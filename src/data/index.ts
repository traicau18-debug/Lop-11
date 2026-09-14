import { Chapter, Lesson, BlankDefinition } from '../types';
import { chapter1 } from './chapter1';
import { chapter2 } from './chapter2';
import { chapter3 } from './chapter3';
import { chapter4 } from './chapter4';
import { chapter5 } from './chapter5';
import { chapter6 } from './chapter6';

export const allChapters: Chapter[] = [
  chapter1,
  chapter2,
  chapter3,
  chapter4,
  chapter5,
  chapter6
];

export function getAllLessons(): Lesson[] {
  return allChapters.flatMap(c => c.lessons);
}

export function getLessonById(id: string): Lesson | undefined {
  for (const chapter of allChapters) {
    const found = chapter.lessons.find(l => l.id === id);
    if (found) return found;
  }
  return undefined;
}

export function getAllBlanksForLesson(lesson: Lesson): BlankDefinition[] {
  const blanks: BlankDefinition[] = [];
  for (const section of lesson.sections) {
    for (const item of section.items) {
      if (item.blanks) {
        blanks.push(...item.blanks);
      }
      if (item.tableData) {
        for (const row of item.tableData.rows) {
          for (const cell of row.cells) {
            if (cell.blanks) {
              blanks.push(...cell.blanks);
            }
          }
        }
      }
    }
  }
  return blanks;
}
