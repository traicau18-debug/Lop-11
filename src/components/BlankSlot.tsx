import React, { useState, useRef, useEffect, useMemo } from 'react';
import { BlankDefinition } from '../types';
import { Check, X, HelpCircle, ChevronDown } from 'lucide-react';
import { renderChemicalJSX } from '../utils/chemFormat';

interface BlankSlotProps {
  blank: BlankDefinition;
  value: string;
  onChange: (blankId: string, val: string) => void;
  isChecked: boolean;
  showCorrect: boolean;
  selectedChip: string | null;
  onChipUsed: () => void;
}

export const BlankSlot: React.FC<BlankSlotProps> = ({
  blank,
  value,
  onChange,
  isChecked,
  showCorrect,
  selectedChip,
  onChipUsed
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  const isCorrect = value.trim().toLowerCase() === blank.answer.trim().toLowerCase();

  // Xáo trộn danh sách gợi ý để đáp án không bao giờ luôn nằm ở dòng đầu tiên
  const shuffledOptions = useMemo(() => {
    if (!blank.options || blank.options.length <= 1) {
      return blank.options || [];
    }
    const arr = [...blank.options];
    // Dùng mã băm của blank.id để xáo trộn ổn định (không bị nhảy vị trí khi click/hover)
    let hash = 5381;
    for (let i = 0; i < blank.id.length; i++) {
      hash = (hash * 33) ^ blank.id.charCodeAt(i);
    }
    let seed = Math.abs(hash) || 987654321;
    function rand() {
      seed = (seed * 1664525 + 1013904223) % 4294967296;
      return seed / 4294967296;
    }

    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    // Đảm bảo nếu ngẫu nhiên rơi vào dòng đầu thì tráo đổi sang vị trí khác
    if (arr[0] === blank.answer && arr.length > 1) {
      const swapIdx = 1 + Math.floor(rand() * (arr.length - 1));
      [arr[0], arr[swapIdx]] = [arr[swapIdx], arr[0]];
    }

    return arr;
  }, [blank.id, blank.options, blank.answer]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const text = e.dataTransfer.getData('text/plain');
    if (text) {
      onChange(blank.id, text);
    }
  };

  const handleClickSlot = () => {
    if (selectedChip) {
      onChange(blank.id, selectedChip);
      onChipUsed();
      return;
    }
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(blank.id, option);
    setIsOpen(false);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(blank.id, '');
  };

  // Determine styling based on state
  let styleClasses = 'bg-amber-50/80 hover:bg-amber-100/90 text-amber-900 border-amber-300 border-dashed';
  if (isDragOver) {
    styleClasses = 'bg-indigo-100 border-indigo-500 border-solid ring-2 ring-indigo-400 scale-105';
  } else if (showCorrect) {
    styleClasses = 'bg-emerald-100 text-emerald-900 border-emerald-400 border-solid font-medium';
  } else if (value) {
    if (isChecked) {
      styleClasses = isCorrect
        ? 'bg-emerald-50 text-emerald-900 border-emerald-400 border-solid font-semibold ring-1 ring-emerald-300'
        : 'bg-rose-50 text-rose-900 border-rose-400 border-solid font-semibold ring-1 ring-rose-300 animate-pulse';
    } else {
      styleClasses = 'bg-blue-50 text-blue-900 border-blue-300 border-solid font-medium shadow-xs';
    }
  }

  const displayText = showCorrect ? blank.answer : value || '..........';

  return (
    <span
      ref={containerRef}
      id={`blank-${blank.id}`}
      className="relative inline-block mx-1 my-0.5 align-baseline font-sans text-sm"
      onMouseEnter={() => !value && !showCorrect && setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        onClick={handleClickSlot}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        title={value ? 'Nhấp để chọn lại hoặc đổi từ' : 'Rê chuột hoặc nhấp để chọn từ khóa'}
        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg border transition-all duration-150 cursor-pointer select-none text-[13.5px] font-medium leading-relaxed ${styleClasses}`}
      >
        <span className="truncate max-w-[240px]">
          {renderChemicalJSX(displayText)}
        </span>

        {/* Status icons */}
        {isChecked && !showCorrect && value && (
          isCorrect ? (
            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[2.5]" />
          ) : (
            <X className="w-3.5 h-3.5 text-rose-500 shrink-0 stroke-[2.5]" />
          )
        )}

        {/* Clear icon if filled */}
        {value && !isChecked && !showCorrect && (
          <span
            onClick={handleClear}
            className="p-0.5 hover:bg-blue-200/70 rounded text-blue-700 hover:text-blue-900 transition-colors"
            title="Xóa từ đã điền"
          >
            <X className="w-3 h-3" />
          </span>
        )}

        {/* Dropdown arrow for empty or editable slots */}
        {!showCorrect && !value && (
          <ChevronDown className="w-3 h-3 text-amber-700/60 opacity-60" />
        )}
      </button>

      {/* Floating Options Dropdown on Hover or Click */}
      {isOpen && !showCorrect && (
        <div
          className="absolute z-40 top-full left-1/2 -translate-x-1/2 mt-1 min-w-[210px] max-w-[320px] bg-white rounded-xl shadow-xl border border-slate-200 p-2 animate-in fade-in zoom-in-95 duration-150 text-left"
          onMouseEnter={() => setIsOpen(true)}
        >
          <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-100 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
            <span>Chọn từ khóa điền vào:</span>
            {blank.hint && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowHint(!showHint);
                }}
                className="text-indigo-600 hover:text-indigo-800 flex items-center gap-0.5"
                title="Xem gợi ý"
              >
                <HelpCircle className="w-3 h-3" />
                <span>Gợi ý</span>
              </button>
            )}
          </div>

          {showHint && blank.hint && (
            <div className="mb-2 p-1.5 bg-amber-50 text-amber-800 text-xs rounded-md border border-amber-200">
              💡 {renderChemicalJSX(blank.hint)}
            </div>
          )}

          <div className="flex flex-col gap-1 max-h-56 overflow-y-auto">
            {shuffledOptions.map((opt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => handleSelectOption(opt, e)}
                className={`text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                  value === opt
                    ? 'bg-indigo-50 text-indigo-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <span>{renderChemicalJSX(opt)}</span>
                {value === opt && <Check className="w-3.5 h-3.5 text-indigo-600" />}
              </button>
            ))}
          </div>

          {value && (
            <div className="pt-1.5 mt-1.5 border-t border-slate-100">
              <button
                type="button"
                onClick={handleClear}
                className="w-full text-center text-xs text-rose-600 hover:text-rose-700 hover:bg-rose-50 py-1 rounded-md transition-colors"
              >
                Xóa lựa chọn này
              </button>
            </div>
          )}
        </div>
      )}

      {/* Incorrect Feedback Tooltip when checked */}
      {isChecked && !isCorrect && !showCorrect && value && (
        <div className="hidden group-hover:block absolute z-30 bottom-full left-1/2 -translate-x-1/2 mb-1 px-2.5 py-1 bg-slate-900 text-white text-[11px] rounded-md shadow whitespace-nowrap">
          {blank.hint ? `Gợi ý: ${blank.hint}` : 'Chưa chính xác, hãy thử lại!'}
        </div>
      )}
    </span>
  );
};
