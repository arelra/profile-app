const formInputsMain: Array<string> =
  ["first_name", "other_names", "email", "mobile", "company"];

const formInputsAddress: Array<string> =
  [ "street", "town", "county", "postcode"];

const formInputsContacts: Array<string> =
  ["contact-email", "contact-sms", "contact-mail"];

type InputEvent = React.ChangeEvent<HTMLInputElement>;

/**
 * Find a match between the input name and the given profile fields
 * @param fields 
 * @param inputName 
 */
const findMatch = (fields: Array<string>, inputName: string) =>
  fields.find((fieldName) => fieldName === inputName)

/**
 * Create a new profile given an updated main field
 * @param profile
 * @param fieldName 
 * @param value 
 */
const createProfileForMainField = (profile: Profile, fieldName: string, value: string) => {
  const updatedFields = { [fieldName]: value };
  return { ...profile, ...updatedFields };  
}

/**
 * Create a new profile given an updated address field
 * @param profile
 * @param fieldName 
 * @param value 
 */
const createProfileForAddressField = (profile: Profile, fieldName: string, value: string) => {
  const updatedFields = { [fieldName]: value };
  const newAddress = { ...profile.address, ...updatedFields };
  return { ...profile, ...{ address: newAddress } };
}

/**
 * Create a new profile given an updated contact field
 * @param profile
 * @param fieldName 
 * @param checked 
 */
const createProfileForContactField = (
  profile: Profile,
  fieldName: string,
  checked: boolean,
) => {
    const option = fieldName.replace("contact-", "") as ContactOption;
    let prefs = profile.preferences.contact.filter((c) => c !== option);
    if (checked) {
      prefs = [...prefs, option];
    }
    return { ...profile, ...{ preferences: { contact: prefs } } };
};

/**
 * Create a new profile given an input change event
 * Determines which field has changed and calls the respective profile creator
 * @param event 
 * @param profile 
 */
const onChangeCreateProfile = (event: InputEvent, profile: Profile): Profile => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    const mainInputFound = findMatch(formInputsMain, inputName);
    if (mainInputFound) {
      return createProfileForMainField(profile, mainInputFound, inputValue);
    }
    const addressInputFound = findMatch(formInputsAddress, inputName);
    if (addressInputFound) {
      return createProfileForAddressField(profile, addressInputFound, inputValue);
    }
    const contactInputFound = findMatch(formInputsContacts, inputName);
    if (contactInputFound) {
      return createProfileForContactField(
        profile,
        contactInputFound,
        event.target.checked
      );
    }
    return profile;
};

const onChangeValidate = (event: InputEvent): Map<string, string> => {
  const inputName = event.target.name;
  const inputValue = event.target.value;
  const errorMsgs = new Map();
  switch (inputName) {
    case "first_name": {
      if (inputValue.length === 0) {
        errorMsgs.set("first_name", "too short");
      }
      break;
    }
    case "email": {
      if (!inputValue.includes("@")) {
        errorMsgs.set("email", "not a valid email");
      }
      break;
    }
    default:
      return errorMsgs;
  }
  return errorMsgs;
}

export {
  onChangeValidate,
  onChangeCreateProfile,
}
