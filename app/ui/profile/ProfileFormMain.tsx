import React from 'react';
import ProfileFormInputMain from './ProfileFormInput';

interface Props {
  readOnly: boolean,
  localProfile: Profile,
  setLocalProfile: (profile: Profile) => void,
  errorMsgs: Map<string, string>,
  setErrorMsgs: (msg: Map<string, string>) => void,
};

const ProfileFormMain =
  ({ readOnly, localProfile, setLocalProfile, errorMsgs, setErrorMsgs }: Props) =>
  <>
    <ProfileFormInputMain
      name="first_name"
      value={localProfile.first_name}
      readOnly={readOnly}
      localProfile={localProfile}
      setLocalProfile={setLocalProfile}
      errorMsgs={errorMsgs}
      setErrorMsgs={setErrorMsgs}
    />
    <ProfileFormInputMain
      name="other_names"
      value={localProfile.other_names}
      readOnly={readOnly}
      localProfile={localProfile}
      setLocalProfile={setLocalProfile}
      errorMsgs={errorMsgs}
      setErrorMsgs={setErrorMsgs}
    />
    <ProfileFormInputMain
      name="email"
      value={localProfile.email}
      readOnly={readOnly}
      localProfile={localProfile}
      setLocalProfile={setLocalProfile}
      errorMsgs={errorMsgs}
      setErrorMsgs={setErrorMsgs}
    />
    <ProfileFormInputMain
      name="mobile"
      value={localProfile.mobile}
      readOnly={readOnly}
      localProfile={localProfile}
      setLocalProfile={setLocalProfile}
      errorMsgs={errorMsgs}
      setErrorMsgs={setErrorMsgs}
    />
    <ProfileFormInputMain
      name="company"
      value={localProfile.company}
      readOnly={readOnly}
      localProfile={localProfile}
      setLocalProfile={setLocalProfile}
      errorMsgs={errorMsgs}
      setErrorMsgs={setErrorMsgs}
    />
  </>


export default ProfileFormMain;