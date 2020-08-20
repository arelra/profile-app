import React from 'react';
import ProfileFormInputMain from './ProfileFormInput';

interface Props {
  readOnly: boolean,
  localProfile: Profile,
  setLocalProfile: (profile: Profile) => void,
  errorMsgs: Map<string,string>,
  setErrorMsgs: (msg: Map<string, string>) => void,
};

const ProfileFormAddress =
  ({ readOnly, localProfile, setLocalProfile, errorMsgs, setErrorMsgs }: Props) =>
  <>
    <ProfileFormInputMain
      name="street"
      value={localProfile.address.street}
      readOnly={readOnly}
      localProfile={localProfile}
      setLocalProfile={setLocalProfile}
      errorMsgs={errorMsgs}
      setErrorMsgs={setErrorMsgs}
    />
    <ProfileFormInputMain
      name="town"
      value={localProfile.address.town}
      readOnly={readOnly}
      localProfile={localProfile}
      setLocalProfile={setLocalProfile}
      errorMsgs={errorMsgs}
      setErrorMsgs={setErrorMsgs}
    />
    <ProfileFormInputMain
      name="county"
      value={localProfile.address.county}
      readOnly={readOnly}
      localProfile={localProfile}
      setLocalProfile={setLocalProfile}
      errorMsgs={errorMsgs}
      setErrorMsgs={setErrorMsgs}
    />
    <ProfileFormInputMain
      name="postcode"
      value={localProfile.address.postcode}
      readOnly={readOnly}
      localProfile={localProfile}
      setLocalProfile={setLocalProfile}
      errorMsgs={errorMsgs}
      setErrorMsgs={setErrorMsgs}
    />
  </>


export default ProfileFormAddress;