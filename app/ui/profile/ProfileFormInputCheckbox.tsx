import React from 'react';
import { Box } from "rebass"
import { Label, Checkbox } from "@rebass/forms";

import { onChangeCreateProfile } from './on-change-create-profile';

interface Props {
  name: string,
  readOnly: boolean,
  localProfile: Profile,
  setLocalProfile: (profile: Profile) => void,
};

const preferenceExists =
  (preferences: ProfilePreferences, preference: ContactOption): boolean =>
    preferences.contact.includes(preference) ? true : false;

const ProfileFormInputCheckbox = ({
  name,
  readOnly,
  localProfile,
  setLocalProfile}: Props) =>
    <Box px={2} my={2}>
      <Label alignItems="center">
        <Checkbox
          id={`contact-${name}`}
          name={`contact-${name}`}
          disabled={readOnly}
          checked={preferenceExists(localProfile.preferences, name as ContactOption)}
          onChange={(e) => setLocalProfile(onChangeCreateProfile(e, localProfile))}
        />
        {`${name.charAt(0).toUpperCase()}${name.slice(1)}`}
      </Label>
    </Box>

export default ProfileFormInputCheckbox;