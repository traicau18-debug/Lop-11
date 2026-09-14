import React from 'react';
import { BlankDefinition } from '../types';
import { BlankSlot } from './BlankSlot';
import { renderChemicalJSX } from '../utils/chemFormat';

interface BlankTextRendererProps {
  text: string;
  blanks?: BlankDefinition[];
  answers: Record<string, string>;
  onAnswerChange: (blankId: string, val: string) => void;
  isChecked: boolean;
  showCorrect: boolean;
  selectedChip: string | null;
  onChipUsed: () => void;
}

export const BlankTextRenderer: React.FC<BlankTextRendererProps> = ({
  text,
  blanks = [],
  answers,
  onAnswerChange,
  isChecked,
  showCorrect,
  selectedChip,
  onChipUsed
}) => {
  const blanksMap = new Map<string, BlankDefinition>();
  blanks.forEach(b => blanksMap.set(b.id, b));

  // Split text into tokens by {{blank_id}}
  const tokens = text.split(/(\{\{[a-zA-Z0-9_-]+\}\})/g);

  return (
    <span className="leading-relaxed text-slate-800 text-[15px]">
      {tokens.map((token, index) => {
        const match = token.match(/^\{\{([a-zA-Z0-9_-]+)\}\}$/);
        if (match) {
          const blankId = match[1];
          const blankDef = blanksMap.get(blankId);
          if (blankDef) {
            return (
              <BlankSlot
                key={blankId}
                blank={blankDef}
                value={answers[blankId] || ''}
                onChange={onAnswerChange}
                isChecked={isChecked}
                showCorrect={showCorrect}
                selectedChip={selectedChip}
                onChipUsed={onChipUsed}
              />
            );
          }
          return <span key={index} className="text-amber-600 font-medium">[.....]</span>;
        }

        // Check for newlines within paragraph text
        if (token.includes('\n')) {
          const lines = token.split('\n');
          return (
            <React.Fragment key={index}>
              {lines.map((line, lIdx) => (
                <React.Fragment key={lIdx}>
                  {renderChemicalJSX(line)}
                  {lIdx < lines.length - 1 && <br className="my-1" />}
                </React.Fragment>
              ))}
            </React.Fragment>
          );
        }

        return <React.Fragment key={index}>{renderChemicalJSX(token)}</React.Fragment>;
      })}
    </span>
  );
};

