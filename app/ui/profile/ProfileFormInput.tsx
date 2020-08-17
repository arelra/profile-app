import React from 'react';
import { Box } from "rebass"
import { Label, Input } from "@rebass/forms";

import onChangeCreateProfile from './on-change-create-profile';

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
};

const ProfileFormInput = ({
  name,
  value,
  readOnly,
  localProfile,
  setLocalProfile}: Props) =>
    <Box width={3/4} px={2} my={2}>
      <Label mb={2} htmlFor={name}>
        {formatName(name)}
      </Label>
      <Input
        type="text"
        id={name}
        name={name}
        readOnly={readOnly}
        style={{ backgroundColor: readOnly ? "#EEE" : "white" }}
        value={value}
        onChange={(e) => setLocalProfile(onChangeCreateProfile(e, localProfile))}
      />
    </Box>

export default ProfileFormInput;