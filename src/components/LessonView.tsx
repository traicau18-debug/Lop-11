import React, { useState, useMemo, useEffect } from 'react';
import { Lesson, BlankDefinition } from '../types';
import { WordBank } from './WordBank';
import { BlankTextRenderer } from './BlankTextRenderer';
import { QuizSection } from './QuizSection';
import { PracticalAppsSection } from './PracticalAppsSection';
import { getAllBlanksForLesson } from '../data';
import confetti from 'canvas-confetti';
import { renderChemicalJSX } from '../utils/chemFormat';
import {
  CheckCircle,
  RotateCcw,
  Eye,
  EyeOff,
  BookOpen,
  Trophy,
  Sparkles,
  MousePointer,
  HelpCircle,
  Check
} from 'lucide-react';

interface LessonViewProps {
  lesson: Lesson;
  onLessonComplete?: (lessonId: string, score: number) => void;
}

export const LessonView: React.FC<LessonViewProps> = ({ lesson, onLessonComplete }) => {
  // Store user filled answers { [blankId]: string }
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isChecked, setIsChecked] = useState(false);
  const [showCorrect, setShowCorrect] = useState(false);
  const [selectedChip, setSelectedChip] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'theory' | 'quiz' | 'app'>('theory');
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetToast, setResetToast] = useState(false);

  // Retrieve saved progress from localStorage for this lesson
  useEffect(() => {
    try {
      const saved = localStorage.getItem(`chem11_answers_${lesson.id}`);
      if (saved) {
        setAnswers(JSON.parse(saved));
      } else {
        setAnswers({});
      }
      setIsChecked(false);
      setShowCorrect(false);
      setSelectedChip(null);
      setActiveTab('theory');
    } catch {
      setAnswers({});
    }
  }, [lesson.id]);

  // All blanks in this lesson
  const allBlanks = useMemo(() => {
    return getAllBlanksForLesson(lesson);
  }, [lesson]);

  // Answer count and correctness statistics
  const stats = useMemo(() => {
    let filled = 0;
    let correct = 0;
    allBlanks.forEach(b => {
      const userVal = answers[b.id];
      if (userVal && userVal.trim()) {
        filled++;
        if (userVal.trim().toLowerCase() === b.answer.trim().toLowerCase()) {
          correct++;
        }
      }
    });
    return {
      total: allBlanks.length,
      filled,
      correct,
      percentage: allBlanks.length > 0 ? Math.round((correct / allBlanks.length) * 100) : 0
    };
  }, [allBlanks, answers]);

  const handleAnswerChange = (blankId: string, val: string) => {
    setAnswers(prev => {
      const updated = { ...prev, [blankId]: val };
      try {
        localStorage.setItem(`chem11_answers_${lesson.id}`, JSON.stringify(updated));
      } catch {
        // localStorage might be blocked or full
      }
      return updated;
    });
    // If was checked, allow editing smoothly
    if (isChecked) {
      setIsChecked(false);
    }
  };

  const handleCheckAnswers = () => {
    setIsChecked(true);
    setShowCorrect(false);

    if (stats.percentage >= 80 && stats.filled >= stats.total * 0.8) {
      // Fire confetti celebration!
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
      if (onLessonComplete) {
        onLessonComplete(lesson.id, stats.percentage);
      }
    }
  };

  const executeReset = () => {
    setAnswers({});
    setIsChecked(false);
    setShowCorrect(false);
    setSelectedChip(null);
    try {
      localStorage.removeItem(`chem11_answers_${lesson.id}`);
    } catch {
      // ignore
    }
    setShowResetModal(false);
    setResetToast(true);
    setTimeout(() => {
      setResetToast(false);
    }, 2500);
  };

  const handleRequestReset = () => {
    // If no answers have been filled and not checked, simply reset without modal
    if (stats.filled === 0 && !isChecked) {
      executeReset();
    } else {
      setShowResetModal(true);
    }
  };

  const handleToggleShowCorrect = () => {
    setShowCorrect(!showCorrect);
  };

  return (
    <div className="max-w-4xl mx-auto pb-24">
      {/* Lesson Header Banner */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs mb-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-semibold tracking-wide">
            {lesson.chapterTitle}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-medium">Tiến độ điền:</span>
            <div className="w-28 h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-300 ${
                  stats.filled === stats.total ? 'bg-emerald-500' : 'bg-indigo-500'
                }`}
                style={{ width: `${(stats.filled / Math.max(stats.total, 1)) * 100}%` }}
              />
            </div>
            <span className="text-xs font-semibold text-slate-700">
              {stats.filled}/{stats.total}
            </span>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
          {renderChemicalJSX(lesson.title)}
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          {renderChemicalJSX(lesson.description)}
        </p>

        {/* Mode Navigation Tabs */}
        <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100">
          <button
            type="button"
            onClick={() => setActiveTab('theory')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
              activeTab === 'theory'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            Ôn tập & Điền từ ({stats.total} vị trí)
          </button>

          {lesson.quizzes && lesson.quizzes.length > 0 && (
            <button
              type="button"
              onClick={() => setActiveTab('quiz')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === 'quiz'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Trophy className="w-3.5 h-3.5" />
              Luyện trắc nghiệm ({lesson.quizzes.length} câu)
            </button>
          )}

          {lesson.applications && lesson.applications.length > 0 && (
            <button
              type="button"
              onClick={() => setActiveTab('app')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === 'app'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Vận dụng thực tế ({lesson.applications.length})
            </button>
          )}
        </div>
      </div>

      {activeTab === 'theory' && (
        <>
          {/* Instructions Box */}
          <div className="p-3.5 bg-gradient-to-r from-indigo-50/70 to-blue-50/70 border border-indigo-100/90 rounded-xl mb-5 flex items-start gap-2.5 text-xs text-indigo-900 leading-relaxed">
            <MousePointer className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold text-indigo-950">Cách làm bài điền từ khóa:</strong>
              <ul className="list-disc list-inside mt-0.5 space-y-0.5 text-indigo-900/90">
                <li><strong>Cách 1:</strong> Rê chuột (hover) vào dấu <span className="underline decoration-dotted font-medium">......</span> để hiển thị menu các phương án và chọn từ khóa đúng.</li>
                <li><strong>Cách 2:</strong> Kéo trực tiếp thẻ từ khóa từ <strong>Ngân hàng từ khóa</strong> bên dưới và thả vào dấu <span className="underline decoration-dotted font-medium">......</span></li>
                <li><strong>Cách 3:</strong> Nhấp chọn từ khóa trong ngân hàng, rồi nhấp vào vị trí ô trống cần điền.</li>
              </ul>
            </div>
          </div>

          {/* Word Bank of available keywords */}
          <WordBank
            blanks={allBlanks}
            answers={answers}
            selectedChip={selectedChip}
            onSelectChip={setSelectedChip}
          />

          {/* Checked Score Banner */}
          {isChecked && (
            <div
              className={`p-4 rounded-xl border mb-6 flex flex-wrap items-center justify-between gap-4 animate-in fade-in ${
                stats.percentage >= 80
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                  : 'bg-amber-50 border-amber-200 text-amber-950'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-xl text-white ${
                    stats.percentage >= 80 ? 'bg-emerald-600' : 'bg-amber-600'
                  }`}
                >
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base">
                    Kết quả: {stats.correct}/{stats.total} từ chính xác ({stats.percentage}%)
                  </h4>
                  <p className="text-xs opacity-85">
                    {stats.percentage >= 80
                      ? 'Xuất sắc! Bạn đã nắm vững kiến thức trọng tâm của bài này.'
                      : 'Hãy kiểm tra các ô màu đỏ và chọn lại từ khóa phù hợp nhé!'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleToggleShowCorrect}
                  className="px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-xs font-semibold rounded-lg shadow-2xs transition-colors cursor-pointer"
                >
                  {showCorrect ? 'Xem bài làm của bạn' : 'Xem đáp án chuẩn'}
                </button>
                <button
                  type="button"
                  onClick={handleRequestReset}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 hover:bg-rose-50 hover:border-rose-200 hover:text-rose-700 text-slate-700 text-xs font-semibold rounded-lg shadow-2xs transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Làm lại
                </button>
              </div>
            </div>
          )}

          {/* Main Review Text Content */}
          <div className="space-y-6">
            {lesson.sections.map((section) => (
              <section
                key={section.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs transition-all"
              >
                <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-600" />
                  {renderChemicalJSX(section.title)}
                </h2>

                <div className="space-y-4">
                  {section.items.map((item) => {
                    if (item.type === 'paragraph' && item.text) {
                      return (
                        <div key={item.id} className="p-1">
                          <BlankTextRenderer
                            text={item.text}
                            blanks={item.blanks}
                            answers={answers}
                            onAnswerChange={handleAnswerChange}
                            isChecked={isChecked}
                            showCorrect={showCorrect}
                            selectedChip={selectedChip}
                            onChipUsed={() => setSelectedChip(null)}
                          />
                        </div>
                      );
                    }

                    if (item.type === 'table' && item.tableData) {
                      return (
                        <div key={item.id} className="my-4 overflow-x-auto">
                          {item.title && (
                            <h3 className="text-sm font-semibold text-slate-800 mb-2">
                              {renderChemicalJSX(item.title)}
                            </h3>
                          )}
                          <table className="w-full border-collapse border border-slate-200 text-xs rounded-xl overflow-hidden">
                            <thead className="bg-slate-50">
                              <tr>
                                {item.tableData.headers.map((h, hIdx) => (
                                  <th
                                    key={hIdx}
                                    className="border border-slate-200 px-3 py-2.5 text-left font-semibold text-slate-700"
                                  >
                                    {renderChemicalJSX(h)}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {item.tableData.rows.map((row, rIdx) => (
                                <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}>
                                  {row.cells.map((cell, cIdx) => (
                                    <td
                                      key={cIdx}
                                      className="border border-slate-200 px-3 py-2.5 text-slate-800 align-top leading-relaxed"
                                    >
                                      {cell.blanks && cell.blanks.length > 0 ? (
                                        <BlankTextRenderer
                                          text={cell.text}
                                          blanks={cell.blanks}
                                          answers={answers}
                                          onAnswerChange={handleAnswerChange}
                                          isChecked={isChecked}
                                          showCorrect={showCorrect}
                                          selectedChip={selectedChip}
                                          onChipUsed={() => setSelectedChip(null)}
                                        />
                                      ) : (
                                        renderChemicalJSX(cell.text)
                                      )}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      );
                    }

                    return null;
                  })}
                </div>
              </section>
            ))}
          </div>

          {/* Sticky Bottom Toolbar for Checking, Showing Answers, Resetting */}
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30 max-w-lg w-[92%] bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200 p-2.5 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 pl-2">
              <span className="text-xs font-semibold text-slate-700">
                {stats.filled}/{stats.total} từ đã điền
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handleToggleShowCorrect}
                className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors"
                title="Bật/tắt đáp án chuẩn"
              >
                {showCorrect ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{showCorrect ? 'Ẩn đáp án' : 'Đáp án'}</span>
              </button>

              <button
                type="button"
                onClick={handleRequestReset}
                className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                title="Làm lại từ đầu"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Làm lại</span>
              </button>

              <button
                type="button"
                onClick={handleCheckAnswers}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs transition-all active:scale-95 cursor-pointer"
              >
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Kiểm tra kết quả</span>
              </button>
            </div>
          </div>

          {/* Custom Modal for Reset Confirmation - Works 100% in iFrames */}
          {showResetModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-150">
              <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-150">
                <div className="w-12 h-12 rounded-full bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mb-4">
                  <RotateCcw className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  Làm lại bài học này?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  Bạn đang có <strong className="text-slate-800 font-semibold">{stats.filled}/{stats.total}</strong> từ khóa đã điền. Toàn bộ câu trả lời sẽ được xóa sạch để bạn làm lại từ đầu.
                </p>
                <div className="flex items-center justify-end gap-2.5">
                  <button
                    type="button"
                    onClick={() => setShowResetModal(false)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    Hủy bỏ
                  </button>
                  <button
                    type="button"
                    onClick={executeReset}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-rose-600 hover:bg-rose-700 shadow-xs transition-colors cursor-pointer"
                  >
                    Xóa & Làm lại
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Toast Notification when reset */}
          {resetToast && (
            <div className="fixed top-20 right-5 z-50 bg-slate-900/95 text-white text-xs font-medium px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2 border border-slate-800 animate-in fade-in slide-in-from-top-3 duration-200">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Đã làm lại bài học! Các ô trống đã được xóa trống.</span>
            </div>
          )}
        </>
      )}

      {activeTab === 'quiz' && lesson.quizzes && (
        <QuizSection quizzes={lesson.quizzes} lessonTitle={lesson.title} />
      )}

      {activeTab === 'app' && lesson.applications && (
        <PracticalAppsSection applications={lesson.applications} />
      )}
    </div>
  );
};
