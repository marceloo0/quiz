export interface Result {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  numberQuestion?: number;
  selected?: string;
  number_correct_answer?: number;
  number_incorrect_answers?: number;
}

export interface ReportProps {
  quantityReport: number;
  reportQuestions: Result[];
}

export interface ReportQuestionsProps {
  quantityReport: number;
  reportQuestions: ReportProps[];
}

export interface RootObject {
  response_code: number;
  results: Result[];
}
