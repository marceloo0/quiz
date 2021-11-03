import { useContext } from 'react';
import { QuestionContext } from '../context/QuestionContext';

export function useQuestions() {
  const value = useContext(QuestionContext);

  return value;
}
