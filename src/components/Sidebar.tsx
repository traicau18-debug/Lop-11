import React, { useState } from 'react';
import { Chapter, Lesson } from '../types';
import {
  BookOpen,
  ChevronRight,
  ChevronDown,
  Search,
  CheckCircle2,
  Atom,
  Flame,
  Layers,
  FlaskConical,
  X
} from 'lucide-react';

interface SidebarProps {
  chapters: Chapter[];
  currentLessonId: string;
  onSelectLesson: (lessonId: string) => void;
  isOpen: boolean;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  chapters,
  currentLessonId,
  onSelectLesson,
  isOpen,
  onCloseMobile
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openChapters, setOpenChapters] = useState<Record<string, boolean>>({
    'chuong-1': true,
    'chuong-2': true,
    'chuong-3': true,
    'chuong-4': true,
    'chuong-5': true,
    'chuong-6': true
  });

  const toggleChapter = (chapterId: string) => {
    setOpenChapters(prev => ({ ...prev, [chapterId]: !prev[chapterId] }));
  };

  // Filter lessons
  const filteredChapters = chapters.map(ch => ({
    ...ch,
    lessons: ch.lessons.filter(l =>
      l.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ch.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(ch => ch.lessons.length > 0);

  const getChapterIcon = (num: number) => {
    switch (num) {
      case 1: return <Flame className="w-4 h-4 text-amber-500" />;
      case 2: return <Atom className="w-4 h-4 text-sky-500" />;
      case 3: return <Layers className="w-4 h-4 text-emerald-500" />;
      case 4: return <Flame className="w-4 h-4 text-orange-500" />;
      case 5: return <FlaskConical className="w-4 h-4 text-indigo-500" />;
      case 6: return <BookOpen className="w-4 h-4 text-purple-500" />;
      default: return <BookOpen className="w-4 h-4 text-indigo-500" />;
    }
  };

  return (
    <>
      {/* Backdrop on mobile */}
      {isOpen && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 bg-slate-900/40 z-40 lg:hidden backdrop-blur-xs transition-opacity"
        />
      )}

      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 lg:w-80 bg-white border-r border-slate-200/90 flex flex-col transition-transform duration-200 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-blue-500 text-white flex items-center justify-center font-bold text-sm shadow-xs">
              11
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-900 leading-tight">
                Hóa Học 11
              </h2>
              <p className="text-[11px] text-slate-500">
                Ôn tập từ khóa & Trắc nghiệm
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onCloseMobile}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg lg:hidden"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-3 border-b border-slate-100">
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Tìm bài học, chủ đề..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors"
            />
          </div>
        </div>

        {/* Lessons List Navigation */}
        <div className="flex-1 overflow-y-auto p-3 space-y-3">
          {filteredChapters.map((chapter) => {
            const isChapterOpen = openChapters[chapter.id] ?? true;

            return (
              <div key={chapter.id} className="rounded-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleChapter(chapter.id)}
                  className="w-full px-3 py-2 bg-slate-50/80 hover:bg-slate-100 text-left flex items-center justify-between rounded-lg transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-2">
                    {getChapterIcon(chapter.number)}
                    <span className="text-xs font-bold text-slate-800 line-clamp-1 group-hover:text-indigo-600">
                      {chapter.title}
                    </span>
                  </div>
                  {isChapterOpen ? (
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                  ) : (
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  )}
                </button>

                {isChapterOpen && (
                  <div className="mt-1 ml-2 pl-2 border-l-2 border-slate-100 space-y-0.5 py-1">
                    {chapter.lessons.map((lesson) => {
                      const isActive = lesson.id === currentLessonId;

                      return (
                        <button
                          key={lesson.id}
                          type="button"
                          onClick={() => {
                            onSelectLesson(lesson.id);
                            onCloseMobile();
                          }}
                          className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-all flex items-center justify-between cursor-pointer group ${
                            isActive
                              ? 'bg-indigo-50 text-indigo-900 font-semibold shadow-2xs'
                              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center gap-2 truncate">
                            <span
                              className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                                isActive ? 'bg-indigo-600' : 'bg-slate-300'
                              }`}
                            />
                            <span className="truncate">{lesson.title}</span>
                          </div>
                          {isActive && (
                            <ChevronRight className="w-3 h-3 text-indigo-500 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="p-3 border-t border-slate-100 bg-slate-50/60 text-center">
          <p className="text-[11px] text-slate-500">
            Chương trình Hóa học 11 GDPT mới
          </p>
        </div>
      </aside>
    </>
  );
};
