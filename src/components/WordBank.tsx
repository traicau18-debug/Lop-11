import React, { useState, useMemo } from 'react';
import { BlankDefinition } from '../types';
import { Sparkles, Search, Check, RefreshCw } from 'lucide-react';
import { renderChemicalJSX } from '../utils/chemFormat';

interface WordBankProps {
  blanks: BlankDefinition[];
  answers: Record<string, string>;
  selectedChip: string | null;
  onSelectChip: (chip: string | null) => void;
}

export const WordBank: React.FC<WordBankProps> = ({
  blanks,
  answers,
  selectedChip,
  onSelectChip
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [shuffleKey, setShuffleKey] = useState(0);

  // Extract unique answers and shuffle them by default so they aren't in reading order
  const uniqueWords = useMemo(() => {
    const set = new Set<string>();
    blanks.forEach(b => {
      if (b.answer) set.add(b.answer);
    });
    const list = Array.from(set);
    return [...list].sort(() => Math.random() - 0.5);
  }, [blanks, shuffleKey]);

  // Count usage of each word
  const usageCount = useMemo(() => {
    const counts: Record<string, number> = {};
    (Object.values(answers) as string[]).forEach((val: string) => {
      if (val) {
        counts[val] = (counts[val] || 0) + 1;
      }
    });
    return counts;
  }, [answers]);

  // Filtered words
  const filteredWords = uniqueWords.filter(w =>
    w.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDragStart = (e: React.DragEvent, word: string) => {
    e.dataTransfer.setData('text/plain', word);
    e.dataTransfer.effectAllowed = 'copy';
  };

  return (
    <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs mb-6">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-3 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-indigo-50 text-indigo-600 rounded-lg">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-800">
              Ngân hàng từ khóa ({uniqueWords.length} từ)
            </h3>
            <p className="text-xs text-slate-500">
              Kéo thả vào dấu ... hoặc nhấp chọn rồi nhấp vào ô trống cần điền
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Tìm từ khóa..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 pr-3 py-1 text-xs rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 w-36 transition-all"
            />
          </div>
          <button
            type="button"
            onClick={() => setShuffleKey(k => k + 1)}
            className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
            title="Trộn ngẫu nhiên từ khóa"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {selectedChip && (
        <div className="mb-2 px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-lg text-xs text-indigo-700 flex items-center justify-between animate-in fade-in">
          <span>
            Đang chọn từ: <strong className="font-semibold text-indigo-900">{renderChemicalJSX(selectedChip)}</strong> — hãy nhấp vào vị trí <strong>...</strong> bạn muốn điền!
          </span>
          <button
            type="button"
            onClick={() => onSelectChip(null)}
            className="underline hover:text-indigo-900 text-[11px] ml-2"
          >
            Hủy chọn
          </button>
        </div>
      )}

      {/* Chips Container */}
      <div className="flex flex-wrap gap-1.5 max-h-44 overflow-y-auto pr-1">
        {filteredWords.map((word, idx) => {
          const isSelected = selectedChip === word;
          const isUsed = (usageCount[word] || 0) > 0;

          return (
            <button
              key={idx}
              type="button"
              draggable
              onDragStart={(e) => handleDragStart(e, word)}
              onClick={() => {
                if (isSelected) {
                  onSelectChip(null);
                } else {
                  onSelectChip(word);
                }
              }}
              className={`group inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border transition-all cursor-grab active:cursor-grabbing select-none ${
                isSelected
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm ring-2 ring-indigo-300'
                  : isUsed
                  ? 'bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100'
                  : 'bg-indigo-50/60 hover:bg-indigo-100/80 text-indigo-900 border-indigo-200/80 hover:border-indigo-300'
              }`}
            >
              <span className="truncate max-w-[220px]">{renderChemicalJSX(word)}</span>
              {isUsed && (
                <span className="inline-flex items-center text-[10px] text-emerald-600 bg-emerald-50 px-1 rounded-sm">
                  <Check className="w-2.5 h-2.5 mr-0.5" /> đã dùng
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
