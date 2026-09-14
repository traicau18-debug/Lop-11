export interface BlankDefinition {
  id: string;
  answer: string;
  options: string[]; // Options including the answer and distractors
  hint?: string;
  explanation?: string;
}

export interface ContentItem {
  id: string;
  type: 'paragraph' | 'heading' | 'bullet' | 'callout' | 'equation' | 'table';
  text?: string; // Text containing {{blank_id}} markers
  level?: 1 | 2 | 3;
  calloutType?: 'info' | 'warning' | 'tip' | 'experiment';
  title?: string;
  blanks?: BlankDefinition[];
  tableData?: {
    headers: string[];
    rows: {
      cells: {
        text: string;
        blanks?: BlankDefinition[];
      }[];
    }[];
  };
}

export interface Section {
  id: string;
  title: string;
  items: ContentItem[];
}

export interface QuizOption {
  id: string;
  label: string; // 'A', 'B', 'C', 'D'
  text: string;
}

export interface QuizQuestion {
  id: string;
  number: number;
  question: string;
  options: QuizOption[];
  correctLabel: string;
  explanation: string;
  notePrompt?: string;
}

export interface PracticalApplication {
  id: string;
  title: string;
  question: string;
  solution: string;
  chemicalEquations?: string[];
}

export interface Lesson {
  id: string;
  number: number;
  title: string;
  chapterId: string;
  chapterTitle: string;
  description: string;
  sections: Section[];
  quizzes?: QuizQuestion[];
  applications?: PracticalApplication[];
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  description: string;
  lessons: Lesson[];
}

export type FillMode = 'drag' | 'click' | 'hover';
