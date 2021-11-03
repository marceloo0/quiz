import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from 'react';
import { api } from '../services/api';
import { RootObject, Result, ReportProps } from '../interfaces/question';

interface QuestionContextData {
  questions: RootObject;
  loading: boolean;
  getQuestions(quantity: number): Promise<void>;
  reportQuestions: Result[];
  reportQuest: (question: Result) => void;
  correct: number;
  inCorrect: number;
  finishQuestions: () => void;
}

export const QuestionContext = createContext<QuestionContextData>(
  {} as QuestionContextData
);

interface QuestionContextProviderProps {
  children: ReactNode;
}

export const QuestionContextProvider = ({
  children,
}: QuestionContextProviderProps) => {
  const [questions, setQuestions] = useState<RootObject>();
  const [reportQuestions, setReportQuestions] = useState<Result[]>([]);
  // const [storageReport, setStorageReport] = useState<Result[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getReport = () => {
      const report = localStorage.getItem('@WaProject:report');
      if (report) {
        return setReportQuestions(JSON.parse(report));
      }
      return [] as Result[];
    };
    getReport();
  }, []);

  console.log(reportQuestions);

  const getQuestions = useCallback(async (quantity) => {
    try {
      setLoading(true);

      const { data } = await api.get('api.php', {
        params: { amount: quantity },
      });

      setQuestions(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const reportQuest = (question: Result) => {
    setReportQuestions([...reportQuestions, question]);
  };

  const correct = reportQuestions.reduce((acc, cur) => {
    return cur.number_correct_answer + acc;
  }, 0);

  const inCorrect = reportQuestions.reduce((acc, cur) => {
    return cur.number_incorrect_answers + acc;
  }, 0);

  const finishQuestions = () => {
    localStorage.setItem('@WaProject:report', JSON.stringify(reportQuestions));
  };

  return (
    <QuestionContext.Provider
      value={{
        loading,
        questions,
        getQuestions,
        reportQuestions,
        reportQuest,
        correct,
        inCorrect,
        finishQuestions,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};
