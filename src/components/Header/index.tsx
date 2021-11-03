import { Button, Box, Stack } from '@material-ui/core';
import Image from 'next/image';
import { useRouter } from 'next/router';

import logo from '../../assets/logo.png';

export const Header = () => {
  const router = useRouter();

  return (
    <Box
      height={150}
      justifyContent="center"
      alignItems="center"
      borderBottom={1}
      borderColor="#9e9e9e"
    >
      <Stack
        direction="row"
        spacing={20}
        justifyContent="space-between"
        alignItems="center"
        maxWidth={1024}
        margin="auto"
        padding={8}
      >
        <Image src={logo} alt="logo" width={100} height={50} />
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Button onClick={() => router.push('/report')}>Report</Button>
        </Stack>
      </Stack>
    </Box>
  );
};
