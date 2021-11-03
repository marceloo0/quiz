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

export const ItemReport = ({
  category,
  type,
  difficulty,
  question,
  correct_answer,
  incorrect_answers,
  numberQuestion,
  selected,
}: Result) => {
  return (
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
        <FormLabel component="legend">
          <Stack direction="row" alignItems="center">
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
                {numberQuestion + 1}
              </Avatar>
            </Box>
            {question}
          </Stack>
        </FormLabel>
        <Box margin={2}>
          {type === 'multiple' ? (
            <Stack spacing={2}>
              <Typography
                color={
                  correct_answer === selected
                    ? 'green'
                    : correct_answer !== selected
                    ? 'blue'
                    : 'gray'
                }
              >
                {correct_answer}
              </Typography>
              {incorrect_answers &&
                incorrect_answers.map((items) => (
                  <Typography
                    key={items}
                    color={
                      items === selected
                        ? 'red'
                        : items === selected
                        ? 'green'
                        : 'gray'
                    }
                  >
                    {items}
                  </Typography>
                ))}
            </Stack>
          ) : (
            <Stack spacing={2}>
              <Typography
                color={
                  correct_answer === selected
                    ? 'green'
                    : correct_answer === selected
                    ? 'blue'
                    : 'gray'
                }
              >
                {correct_answer}
              </Typography>
              {incorrect_answers &&
                incorrect_answers.map((items) => (
                  <Typography
                    key={items}
                    color={
                      items === selected
                        ? 'red'
                        : items === selected
                        ? 'green'
                        : 'gray'
                    }
                  >
                    {items}
                  </Typography>
                ))}
            </Stack>
          )}
          <Stack
            marginTop={2}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            padding={2}
            borderTop={1}
            borderColor="#CECECE"
          >
            <Stack direction="row">
              <Typography>A resposta certa:</Typography>
              <Typography marginLeft={1} color="gray">
                {correct_answer}
              </Typography>
            </Stack>
            <Stack direction="row">
              <Typography>A resposta escolhida: </Typography>
              <Typography marginLeft={1} color="gray">
                {selected ? selected : 'none'}
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Card>
    </Box>
  );
};
