import React from 'react';
import onChangeCreateProfile from './on-change-create-profile';
import { getProfile } from '../../service/profile/profile';

const testProfile = getProfile("jon@jon.com");
test("creates a new profile given a change event on first_name", () => {
  const event = {
    target: {
      name: "first_name",
      value: "new",
    }
  } as React.ChangeEvent<HTMLInputElement>;
  const newProfile = onChangeCreateProfile(event, testProfile);
  expect(newProfile.first_name).toEqual("new");
});

test("creates a new profile given a change event on address town", () => {
  const event = {
    target: {
      name: "town",
      value: "new",
    },
  } as React.ChangeEvent<HTMLInputElement>;
  const newProfile = onChangeCreateProfile(event, testProfile);
  expect(newProfile.address.town).toEqual("new");
});

test("creates a new profile given an addition to contact preferences", () => {
  const event = {
    target: {
      name: "contact-email",
      checked: true,
    },
  } as React.ChangeEvent<HTMLInputElement>;
  const newProfile = onChangeCreateProfile(event, testProfile);
  expect(newProfile.preferences.contact).toEqual(["mail", "sms", "email"]);
});

test("creates a new profile given a removal to contact preferences", () => {
  const event = {
    target: {
      name: "contact-mail",
      checked: false,
    },
  } as React.ChangeEvent<HTMLInputElement>;
  const newProfile = onChangeCreateProfile(event, testProfile);
  expect(newProfile.preferences.contact).toEqual(["sms"]);
});