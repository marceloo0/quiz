import { useState } from 'react';
import {
  Avatar,
  Button,
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Stack,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormHelperText,
  FormLabel,
} from '@material-ui/core';
import { Result } from '../../interfaces/question';
import { useQuestions } from '../../hooks';
export const ItemQuestion = ({
  category,
  type,
  difficulty,
  question,
  correct_answer,
  incorrect_answers,
  numberQuestion,
}: Result) => {
  const { reportQuest } = useQuestions();
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [helperText, setHelperText] = useState('Please select an option.');

  const circleNumber = (
    <Box margin={1}>
      <Avatar
        aria-label="recipe"
        sx={{
          border: 1,
          borderColor: '#333',
          color: '#333',
          width: 25,
          height: 25,
        }}
      >
        {Number(numberQuestion) + 1}
      </Avatar>
    </Box>
  );

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const report = {
      category,
      type,
      difficulty,
      question,
      correct_answer,
      incorrect_answers,
      numberQuestion,
      selected: value,
      number_correct_answer: correct_answer === value ? 1 : 0,
      number_incorrect_answers: correct_answer !== value ? 1 : 0,
    };

    reportQuest(report);
    setIsDisabled(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box maxWidth={1024} margin="auto" marginTop={2}>
        <Card variant="outlined">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            padding={2}
            borderBottom={1}
            borderColor="#CECECE"
          >
            <Stack direction="row">
              <Typography>Category: </Typography>
              <Typography marginLeft={1} color="gray">
                {category}
              </Typography>
            </Stack>
            <Stack direction="row">
              <Typography>Difficulty: </Typography>
              <Typography marginLeft={1} color="gray">
                {difficulty}
              </Typography>
            </Stack>
          </Stack>
          <FormControl
            sx={{ m: 2 }}
            component="fieldset"
            error={error}
            variant="standard"
          >
            <FormLabel component="legend">
              <Stack direction="row" alignItems="center">
                {circleNumber}
                {question}
              </Stack>
            </FormLabel>
            <Box marginLeft={1.5}>
              {type === 'multiple' ? (
                <RadioGroup
                  aria-label="quiz"
                  name="quiz"
                  value={value}
                  onChange={handleRadioChange}
                >
                  <FormControlLabel
                    value={correct_answer}
                    control={<Radio />}
                    label={correct_answer}
                  />
                  {incorrect_answers.map((item) => (
                    <FormControlLabel
                      key={item}
                      value={item}
                      control={<Radio />}
                      label={item}
                    />
                  ))}
                </RadioGroup>
              ) : (
                <RadioGroup
                  aria-label="quiz"
                  name="quiz"
                  value={value}
                  onChange={handleRadioChange}
                >
                  <FormControlLabel
                    value={correct_answer}
                    control={<Radio />}
                    label={correct_answer}
                  />
                  {incorrect_answers.map((item) => (
                    <FormControlLabel
                      key={item}
                      value={item}
                      control={<Radio />}
                      label={item}
                    />
                  ))}
                </RadioGroup>
              )}
            </Box>
            <Box alignItems="end" marginTop={2}>
              <Button type="submit" variant="outlined" disabled={isDisabled}>
                Send
              </Button>
            </Box>
          </FormControl>
        </Card>
      </Box>
    </form>
  );
};
