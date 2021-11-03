import { Button, Box, Typography, Stack } from '@material-ui/core';
import { useRouter } from 'next/router';
import { useQuestions } from '../hooks';
import { Header, ItemReport } from '../components';

export default function Report() {
  const router = useRouter();
  const { reportQuestions, correct, inCorrect, loading } = useQuestions();

  console.log(reportQuestions);
  return (
    <Box>
      <Header />
      <Box maxWidth={1024} margin="auto" marginTop={2}>
        {reportQuestions.length < 1 ? (
          <Typography>Você não possui relatórios disponíveis.</Typography>
        ) : (
          <>
            {reportQuestions &&
              Object(reportQuestions).map((item) => (
                <Box
                  key={item.question}
                  maxWidth={1024}
                  margin="auto"
                  marginTop={2}
                >
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
                    {Object(reportQuestions).map((item) => (
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
                </Box>
              ))}
          </>
        )}
        <Box
          justifyContent="center"
          alignItems="center"
          maxWidth={1024}
          margin="auto"
          padding={8}
        >
          <Button variant="outlined" onClick={() => router.push('/')}>
            Start
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
