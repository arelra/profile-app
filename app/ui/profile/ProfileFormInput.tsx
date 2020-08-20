import React from 'react';
import { Box, Flex } from "rebass"
import { Label, Input } from "@rebass/forms";

import { onChangeValidate, onChangeCreateProfile } from './on-change-create-profile';

/**
 * Split on "_" and capitalise the first letters and rejoin
 * @param inputName
 */
const formatName = (inputName: string) =>
  inputName.split("_").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

interface Props {
  name: string,
  value: string,
  readOnly: boolean,
  localProfile: Profile,
  setLocalProfile: (profile: Profile) => void,
  errorMsgs: Map<string, string>,
  setErrorMsgs: (msgs: Map<string, string>) => void,
};

const ProfileFormInput = ({
  name,
  value,
  readOnly,
  localProfile,
  setLocalProfile,
  errorMsgs,
  setErrorMsgs,
}: Props) =>
    <Box width={3/4} px={2} my={2}>
      <Flex justifyContent="flex-start">
        <Label mb={2} mr={2} htmlFor={name} width="auto">
          {formatName(name)}
        </Label>
        <Label mb={2} htmlFor={name} width="auto" style={{color: "red"}}>
          {errorMsgs.get(name)}
        </Label>
      </Flex>
      <Input
        type="text"
        id={name}
        name={name}
        readOnly={readOnly}
        style={{ backgroundColor: readOnly ? "#EEE" : "white" }}
        value={value}
        onChange={(e) => {
          setErrorMsgs(onChangeValidate(e));
          setLocalProfile(onChangeCreateProfile(e, localProfile));
        }}
      />
    </Box>

export default ProfileFormInput;