import React, { useState } from 'react';
import { PracticalApplication } from '../types';
import { Lightbulb, ChevronDown, ChevronUp, Beaker } from 'lucide-react';
import { renderChemicalJSX } from '../utils/chemFormat';

interface PracticalAppsSectionProps {
  applications: PracticalApplication[];
}

export const PracticalAppsSection: React.FC<PracticalAppsSectionProps> = ({ applications }) => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => {
    setOpenItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="mt-8 pt-6 border-t border-slate-200">
      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-2">
        <Beaker className="w-3.5 h-3.5" />
        Vận dụng thực tế & Đời sống
      </div>
      <h3 className="text-lg font-bold text-slate-800 mb-4">
        Bài tập liên hệ thực tế & giải thích hiện tượng
      </h3>

      <div className="space-y-3">
        {applications.map((app) => {
          const isOpen = !!openItems[app.id];

          return (
            <div
              key={app.id}
              className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-2xs transition-all"
            >
              <div
                onClick={() => toggle(app.id)}
                className="p-4 cursor-pointer hover:bg-slate-50 flex items-start justify-between gap-3 transition-colors"
              >
                <div className="flex items-start gap-2.5">
                  <div className="p-1.5 bg-amber-100/70 text-amber-800 rounded-lg shrink-0 mt-0.5">
                    <Lightbulb className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800">
                      {renderChemicalJSX(app.title)}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 whitespace-pre-line leading-relaxed">
                      {renderChemicalJSX(app.question)}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="p-1 text-slate-400 hover:text-slate-600 rounded-md shrink-0"
                >
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>

              {isOpen && (
                <div className="px-4 pb-4 pt-2 border-t border-slate-100 bg-slate-50/50">
                  <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-800 leading-relaxed">
                    <span className="font-bold text-indigo-700 block mb-1">
                      💡 Lời giải & Phân tích cơ chế hóa học:
                    </span>
                    <p className="whitespace-pre-line text-slate-700">
                      {renderChemicalJSX(app.solution)}
                    </p>
                    {app.chemicalEquations && app.chemicalEquations.length > 0 && (
                      <div className="mt-2.5 pt-2 border-t border-slate-100">
                        <span className="font-semibold text-slate-700 block mb-1">Phương trình minh họa:</span>
                        {app.chemicalEquations.map((eq, i) => (
                          <div key={i} className="font-mono text-indigo-800 bg-slate-50 p-1.5 rounded mb-1 border border-slate-200 text-xs">
                            {renderChemicalJSX(eq)}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
