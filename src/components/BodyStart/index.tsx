import { Button, Box, Stack, Typography, TextField } from '@material-ui/core';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useQuestions } from '../../hooks';
import logo1 from '../../assets/logo1.png';

export const BodyStart = () => {
  const router = useRouter();
  const { getQuestions, loading, questions } = useQuestions();
  const [isShow, setIsShow] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const onChange = (value: number) => {
    setQuantity(value);
  };

  const handleGetQuestions = () => {
    getQuestions(quantity);
    router.push('/question');
  };

  const handleEnter = () => {
    setIsShow(true);
  };

  return (
    <Box>
      {!isShow ? (
        <Stack
          direction="row"
          spacing={20}
          justifyContent="space-between"
          alignItems="center"
          maxWidth={1024}
          margin="auto"
          padding={8}
        >
          <Image src={logo1} alt="logo" width={336} height={586} />
          <Box>
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              fontWeight="bold"
              fontSize={48}
            >
              Welcome! Lets start!
            </Typography>
            <Typography variant="h4" component="h1" gutterBottom>
              Choose how many questions you would like to answer.
            </Typography>
            <Stack direction="row" spacing={6} alignItems="center">
              <TextField
                id="outlined-basic"
                label="Quantity"
                variant="outlined"
                type="number"
                value={quantity}
                onChange={(text) => onChange(Number(text.target.value))}
              />
              <Button
                variant="outlined"
                onClick={handleEnter}
                disabled={quantity <= 0 ? true : false}
              >
                Next
              </Button>
            </Stack>
          </Box>
        </Stack>
      ) : (
        <Stack
          direction="row"
          spacing={20}
          justifyContent="center"
          alignItems="center"
          margin="auto"
          paddingTop={32}
        >
          <Button
            variant="contained"
            color="success"
            size="large"
            onClick={handleGetQuestions}
          >
            Start
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => setIsShow(false)}
            size="large"
          >
            Cancel
          </Button>
        </Stack>
      )}
    </Box>
  );
};
