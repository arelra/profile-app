/**
 * Mock save profile
 * @param profile
 */
const saveProfile = (profile: Profile) => {
  return true;
};

/**
 * Mock get profile
 * @param email 
 */
const getProfile = (email: string): Profile => ({
  id: "1737f887-c475-4ebd-9107-515b6fad5631",
  first_name: "Jon",
  other_names: "Jonathon",
  address: {
    street: "1 Regent Street",
    town: "Northford",
    county: "Northshire",
    postcode: "NR1 AAA",
  },
  mobile: "01234 567890",
  email: "jon@jon.com",
  company: "Mega Corp",
  preferences: {
    contact: ["mail", "sms"],
  },
});

const defaultProfile: Profile = {
  id: "",
  first_name: "",
  other_names: "",
  address: {
    street: "",
    town: "",
    county: "",
    postcode: "",
  },
  mobile: "",
  email: "",
  company: "",
  preferences: {
    contact: [],
  },
};

export {
  defaultProfile,
  getProfile,
  saveProfile,
};
