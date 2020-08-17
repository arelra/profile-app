import React from 'react';
import ProfileFormInputMain from './ProfileFormInput';

interface Props {
  readOnly: boolean,
  localProfile: Profile,
  setLocalProfile: (profile: Profile) => void,
};

const ProfileFormAddress =
  ({ readOnly, localProfile, setLocalProfile }: Props) =>
  <>
    <ProfileFormInputMain
      name="street"
      value={localProfile.address.street}
      readOnly={readOnly}
      localProfile={localProfile}
      setLocalProfile={setLocalProfile}
    />
    <ProfileFormInputMain
      name="town"
      value={localProfile.address.town}
      readOnly={readOnly}
      localProfile={localProfile}
      setLocalProfile={setLocalProfile}
    />
    <ProfileFormInputMain
      name="county"
      value={localProfile.address.county}
      readOnly={readOnly}
      localProfile={localProfile}
      setLocalProfile={setLocalProfile}
    />
    <ProfileFormInputMain
      name="postcode"
      value={localProfile.address.postcode}
      readOnly={readOnly}
      localProfile={localProfile}
      setLocalProfile={setLocalProfile}
    />
  </>


export default ProfileFormAddress;