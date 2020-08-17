import React from 'react';
import ProfileFormInputCheckbox from './ProfileFormInputCheckbox';

interface Props {
  readOnly: boolean,
  localProfile: Profile,
  setLocalProfile: (profile: Profile) => void,
};

const ProfileFormContact =
  ({ readOnly, localProfile, setLocalProfile }: Props) =>
  <>
    <ProfileFormInputCheckbox
      name="email"
      readOnly={readOnly}
      localProfile={localProfile}
      setLocalProfile={setLocalProfile}
    />
    <ProfileFormInputCheckbox
      name="sms"
      readOnly={readOnly}
      localProfile={localProfile}
      setLocalProfile={setLocalProfile}
    />
    <ProfileFormInputCheckbox
      name="mail"
      readOnly={readOnly}
      localProfile={localProfile}
      setLocalProfile={setLocalProfile}
    />
  </>


export default ProfileFormContact;