import React, { ReactNode } from 'react';

import { QuestionContextProvider } from './QuestionContext';

interface QuestionContextProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: QuestionContextProviderProps) => (
  <QuestionContextProvider>{children}</QuestionContextProvider>
);

export default AppProvider;
