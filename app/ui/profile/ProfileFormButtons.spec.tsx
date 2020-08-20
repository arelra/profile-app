import React from 'react';
import ProfileFormButtons from './ProfileFormButtons';
import { shallow } from 'enzyme';

import { getProfile } from '../../service/profile/profile';

describe("ProfileFormButtons", () => {
  let setLocalProfile = jest.fn();
  let setProfile = jest.fn;
  let setReadOnly = jest.fn();
  let defaultProfile = getProfile('');

  beforeEach(() => {
    setLocalProfile = jest.fn();
    setProfile = jest.fn;
    setReadOnly = jest.fn();
    defaultProfile = getProfile('');
  });
  it("when readyOnly prop is true we see the buttons edit and cancel", () => {
    const wrapper =
      shallow(<ProfileFormButtons
        localProfile={defaultProfile}
        setLocalProfile={setLocalProfile}
        profile={defaultProfile}
        setProfile={setProfile}
        readOnly={true}
        setReadOnly={setReadOnly}
      />);
    expect(wrapper.find("[variant='primary']").exists()).toBe(true);
    expect(wrapper.find("[variant='outline']").exists()).toBe(true);
  });
  it("when edit button is clicked the form is set to readonly", () => {
    const wrapper =
    shallow(<ProfileFormButtons
      localProfile={defaultProfile}
      setLocalProfile={setLocalProfile}
      profile={defaultProfile}
      setProfile={setProfile}
      readOnly={true}
      setReadOnly={setReadOnly}
    />)
    const editButton = wrapper.find("#button-edit");
    editButton.simulate("click");
    expect(setReadOnly.mock.calls[0][0]).toBe(false);
  })
});