import React, { useState, useEffect } from 'react';
import { Flex } from "rebass"
import styled from 'styled-components';

import ProfileFormButtons from './ProfileFormButtons';
import ProfileFormMain from './ProfileFormMain';
import ProfileFormAddress from './ProfileFormAddress';
import ProfileFormContactInputs from './ProfileFormContact';

const Form = styled.form`
  margin: 0;
  min-width: 0;
  border-radius: 10px;
  background-color: white;
  margin: 2rem;
  padding: 2rem;
`;

interface Props {
  profile: Profile,
  setProfile: (profile: Profile) => void,
};

const ProfileForm = ({ profile, setProfile }: Props) => {
  const [localProfile, setLocalProfile] = useState(profile);
  const [readOnly, setReadOnly] = useState(true);
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Flex mb={2} flexDirection="column">
        <ProfileFormMain
          readOnly={readOnly}
          localProfile={localProfile}
          setLocalProfile={setLocalProfile}
        />
        <ProfileFormAddress
          readOnly={readOnly}
          localProfile={localProfile}
          setLocalProfile={setLocalProfile}
        />
      </Flex>
      <Flex mb={2}>
        <ProfileFormContactInputs
          readOnly={readOnly}
          localProfile={localProfile}
          setLocalProfile={setLocalProfile}
        />
      </Flex>
      <Flex px={2} my={2}>
        <ProfileFormButtons
          localProfile={localProfile}
          setLocalProfile={setLocalProfile}
          profile={profile}
          setProfile={setProfile}
          readOnly={readOnly}
          setReadOnly={setReadOnly}
          />
      </Flex>
    </Form>
  );
};

export default ProfileForm;
