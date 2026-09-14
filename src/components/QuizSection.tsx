import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { HelpCircle, CheckCircle2, XCircle, RefreshCw, Award } from 'lucide-react';
import { renderChemicalJSX } from '../utils/chemFormat';

interface QuizSectionProps {
  quizzes: QuizQuestion[];
  lessonTitle: string;
}

export const QuizSection: React.FC<QuizSectionProps> = ({ quizzes, lessonTitle }) => {
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [showExplanations, setShowExplanations] = useState<Record<string, boolean>>({});

  const handleSelect = (questionId: string, label: string) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: label }));
  };

  const handleToggleExplanation = (questionId: string) => {
    setShowExplanations(prev => ({ ...prev, [questionId]: !prev[questionId] }));
  };

  const handleReset = () => {
    setUserAnswers({});
    setShowExplanations({});
  };

  // Calculate score
  const total = quizzes.length;
  const answered = Object.keys(userAnswers).length;
  const correctCount = quizzes.filter(q => userAnswers[q.id] === q.correctLabel).length;

  return (
    <div className="mt-8 pt-6 border-t border-slate-200">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-1">
            <Award className="w-3.5 h-3.5" />
            Luyện tập trắc nghiệm
          </div>
          <h3 className="text-lg font-bold text-slate-800">
            Câu hỏi củng cố kiến thức ({quizzes.length} câu)
          </h3>
        </div>

        <div className="flex items-center gap-3">
          {answered > 0 && (
            <div className="px-3 py-1 rounded-lg bg-slate-100 text-xs font-medium text-slate-700">
              Điểm: <strong className="text-indigo-600 font-bold">{correctCount}/{total}</strong> ({Math.round((correctCount / total) * 100)}%)
            </div>
          )}
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Làm lại trắc nghiệm
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {quizzes.map((quiz) => {
          const selected = userAnswers[quiz.id];
          const isAnswered = !!selected;
          const isCorrect = selected === quiz.correctLabel;
          const showExp = showExplanations[quiz.id] || isAnswered;

          return (
            <div
              key={quiz.id}
              className={`p-4 rounded-xl border transition-all ${
                isAnswered
                  ? isCorrect
                    ? 'bg-emerald-50/40 border-emerald-200'
                    : 'bg-rose-50/40 border-rose-200'
                  : 'bg-white border-slate-200/80 shadow-2xs'
              }`}
            >
              <div className="flex items-start gap-2.5 mb-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-semibold text-xs flex items-center justify-center">
                  {quiz.number}
                </span>
                <p className="text-sm font-semibold text-slate-800 pt-0.5 leading-relaxed">
                  {renderChemicalJSX(quiz.question)}
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-8">
                {quiz.options.map((opt) => {
                  const isThisSelected = selected === opt.label;
                  const isThisCorrect = opt.label === quiz.correctLabel;

                  let optClass = 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700';

                  if (isAnswered) {
                    if (isThisCorrect) {
                      optClass = 'border-emerald-500 bg-emerald-100/70 text-emerald-900 font-semibold';
                    } else if (isThisSelected) {
                      optClass = 'border-rose-400 bg-rose-100/70 text-rose-900 line-through';
                    } else {
                      optClass = 'border-slate-100 bg-slate-50/50 text-slate-400';
                    }
                  }

                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleSelect(quiz.id, opt.label)}
                      className={`text-left p-2.5 rounded-lg border text-xs flex items-start gap-2 transition-all cursor-pointer ${optClass}`}
                    >
                      <span className="font-bold shrink-0">{opt.label}.</span>
                      <span className="leading-snug">{renderChemicalJSX(opt.text)}</span>
                    </button>
                  );
                })}
              </div>

              {/* Explanation section */}
              {isAnswered && (
                <div className="mt-3 pl-8">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 font-medium">
                      {isCorrect ? (
                        <span className="flex items-center gap-1 text-emerald-700">
                          <CheckCircle2 className="w-4 h-4" /> Chính xác!
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-rose-700">
                          <XCircle className="w-4 h-4" /> Đáp án đúng là {quiz.correctLabel}
                        </span>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => handleToggleExplanation(quiz.id)}
                      className="text-indigo-600 hover:text-indigo-800 text-xs inline-flex items-center gap-1"
                    >
                      <HelpCircle className="w-3.5 h-3.5" />
                      {showExp ? 'Ẩn lời giải' : 'Xem giải thích'}
                    </button>
                  </div>

                  {showExp && (
                    <div className="mt-2 p-2.5 bg-indigo-50/60 rounded-lg text-xs text-indigo-950 border border-indigo-100 leading-relaxed">
                      <strong>Giải thích:</strong> {renderChemicalJSX(quiz.explanation)}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
