import { useState } from 'react';
import { Button, Box, Stack, Typography, TextField } from '@material-ui/core';
import { useQuestions } from '../hooks';
import { Header, ItemQuestion, ItemReport } from '../components';
import { useRouter } from 'next/router';

export default function Question() {
  const router = useRouter();
  const { questions, reportQuestions, correct, inCorrect, finishQuestions } =
    useQuestions();
  const [isShow, setIsShow] = useState(false);

  const handleFinish = () => {
    finishQuestions();
    setIsShow(true);
  };

  return (
    <Box>
      <Header />
      {!isShow ? (
        <>
          {questions &&
            questions?.results.map((item, index) => (
              <ItemQuestion
                key={item.question}
                category={item.category}
                type={item.type}
                difficulty={item.difficulty}
                question={item.question}
                correct_answer={item.correct_answer}
                incorrect_answers={item.incorrect_answers}
                numberQuestion={index}
              />
            ))}
        </>
      ) : (
        <>
          <Stack
            direction="row"
            maxWidth={1024}
            marginY={2}
            alignItems="flex-end"
            justifyContent="flex-end"
          >
            <Typography color="green">Correct: {correct}</Typography>
            <Typography color="red" marginLeft={2}>
              Incorrect: {inCorrect}
            </Typography>
          </Stack>
          {reportQuestions.length < 1 ? null : (
            <>
              {reportQuestions &&
                reportQuestions.map((item) => (
                  <ItemReport
                    key={item.question}
                    category={item.category}
                    type={item.type}
                    difficulty={item.difficulty}
                    question={item.question}
                    correct_answer={item.correct_answer}
                    incorrect_answers={item.incorrect_answers}
                    numberQuestion={item.numberQuestion}
                    selected={item.selected}
                  />
                ))}
            </>
          )}
        </>
      )}
      <Box
        justifyContent="center"
        alignItems="center"
        maxWidth={1024}
        margin="auto"
        padding={8}
      >
        {!isShow ? (
          <Button variant="outlined" onClick={handleFinish}>
            Finish
          </Button>
        ) : (
          <Button variant="outlined" onClick={() => router.push('/')}>
            Start
          </Button>
        )}
      </Box>
    </Box>
  );
}
