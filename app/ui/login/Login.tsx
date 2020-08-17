import React, { useState } from 'react';
import { Box, Button, Flex } from "rebass";
import { Label, Input } from "@rebass/forms";

import { authenticateUser } from '../../service/auth/auth';

interface Props {
  setLoggedIn: (loggedIn: boolean) => void,
  setProfile: (profile: Profile) => void,
};

const Login = ({ setLoggedIn, setProfile }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const profile = authenticateUser({ email, password });
    if (profile) {
      setLoggedIn(true);
      setProfile(profile);
    } else {
      setErrorMsg("Invalid login");
    }
  };
  return (
    <Box
      as="form"
      bg="white"
      m={4}
      p={4}
      onSubmit={handleSubmit}
      sx={{ borderRadius: "10px" }}
    >
      <Flex mb={2} flexDirection="column">
        <Box width={1 / 2} px={2}>
          <Label mb={2} htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            placeholder="bob@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box width={1 / 2} px={2} my={2}>
          <Label mb={2} htmlFor="password">
            Password
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
      </Flex>
      <Flex alignItems="baseline">
        <Box px={2} mr="auto">
          <Button type="submit" variant="primary">
            Login
          </Button>
        </Box>
        <Label ml={2} htmlFor="password" color="red">
          {errorMsg}
        </Label>
      </Flex>
    </Box>
  );
};

export default Login;
