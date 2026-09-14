import React, { useState } from 'react';
import { Lesson } from '../types';
import {
  Menu,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  Sparkles,
  BookOpen,
  Info,
  X
} from 'lucide-react';

interface HeaderProps {
  currentLesson: Lesson;
  onOpenSidebar: () => void;
  onPrevLesson: () => void;
  onNextLesson: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentLesson,
  onOpenSidebar,
  onPrevLesson,
  onNextLesson,
  hasPrev,
  hasNext
}) => {
  const [showHelpModal, setShowHelpModal] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-4 py-2.5">
        <div className="flex items-center justify-between gap-3 max-w-6xl mx-auto">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenSidebar}
              className="p-2 -ml-1 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl lg:hidden cursor-pointer"
              title="Mở danh sách bài học"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center text-xs text-slate-500 font-medium">
                <span className="truncate max-w-[140px]">{currentLesson.chapterTitle}</span>
                <ChevronRight className="w-3 h-3 mx-1 text-slate-400 shrink-0" />
              </div>
              <span className="text-sm font-bold text-slate-900 truncate max-w-[200px] sm:max-w-[320px]">
                {currentLesson.title}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Quick Navigation Prev / Next */}
            <div className="flex items-center bg-slate-100 rounded-xl p-0.5">
              <button
                type="button"
                onClick={onPrevLesson}
                disabled={!hasPrev}
                className="p-1.5 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                title="Bài trước"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onNextLesson}
                disabled={!hasNext}
                className="p-1.5 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                title="Bài tiếp theo"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Help Button */}
            <button
              type="button"
              onClick={() => setShowHelpModal(true)}
              className="p-2 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors cursor-pointer"
              title="Hướng dẫn làm bài"
            >
              <HelpCircle className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Help Instructions Modal */}
      {showHelpModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100 relative">
            <button
              type="button"
              onClick={() => setShowHelpModal(false)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5 mb-4">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Hướng dẫn ôn tập Hóa học 11
              </h3>
            </div>

            <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
              <p>
                Ứng dụng cung cấp bài học ôn tập tương tác dựa theo tài liệu chuẩn của toàn bộ chương trình Hóa học lớp 11:
              </p>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70 space-y-2">
                <div className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-[11px] font-bold">1</span>
                  Rê chuột (Hover) để chọn từ
                </div>
                <p className="pl-6 text-slate-600">
                  Rê chuột vào bất kỳ chỗ trống <span className="bg-amber-100 text-amber-900 px-1 py-0.5 rounded font-mono text-[11px]">......</span>, một danh sách các từ khóa gợi ý sẽ xuất hiện để bạn nhấp chọn.
                </p>

                <div className="font-semibold text-slate-800 flex items-center gap-1.5 pt-1">
                  <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-[11px] font-bold">2</span>
                  Kéo và thả (Drag & Drop)
                </div>
                <p className="pl-6 text-slate-600">
                  Kéo các thẻ từ khóa từ <strong>Ngân hàng từ khóa</strong> và thả trực tiếp vào ô trống.
                </p>

                <div className="font-semibold text-slate-800 flex items-center gap-1.5 pt-1">
                  <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-[11px] font-bold">3</span>
                  Nhấp từ khóa rồi nhấp ô trống
                </div>
                <p className="pl-6 text-slate-600">
                  Rất tiện lợi trên điện thoại hoặc máy tính bảng: Nhấp vào thẻ từ khóa mong muốn trong ngân hàng rồi nhấp vào ô trống cần điền.
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2 text-slate-500">
                <Info className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>Tiến độ và kết quả làm bài của bạn được tự động lưu lại trên trình duyệt.</span>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setShowHelpModal(false)}
                className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors"
              >
                Đã hiểu, bắt đầu ôn tập
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
