import React from 'react';
import { Button } from "rebass"
import { useHistory } from 'react-router-dom';

interface Props {
  localProfile: Profile,
  setLocalProfile: (profile: Profile) => void,
  profile: Profile,
  setProfile: (profile: Profile) => void,
  readOnly: boolean,
  setReadOnly: (readonly: boolean) => void,
};

const ProfileFormButtons = ({
  localProfile,
  setLocalProfile,
  profile,
  setProfile,
  readOnly,
  setReadOnly,
}: Props) => {
  const router = useHistory();
  return (
    readOnly ?
      <>
        <Button mr={2} type="submit" variant="primary"
          onClick={() => setReadOnly(false)}
          >
          Edit
        </Button>
        <Button mr={2} type="submit" variant="outline"
          onClick={() => router.push("/")}>
          Cancel
        </Button>
      </>
      :
      <>
        <Button mr={2} type="submit" variant="primary"
          onClick={() => {
            setProfile({ ...localProfile });
            setReadOnly(true);
          }}>
          Save
        </Button>
        <Button
          mr={2} type="submit" variant="outline"
          onClick={() => {
            setLocalProfile({ ...profile });
            setReadOnly(true);
          }}>
          Cancel
        </Button>
      </>
  );
};

export default ProfileFormButtons;