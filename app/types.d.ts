interface Credentials {
  email: string,
  password: string,
}

interface ProfileAddress {
  street: string,
  town: string,
  county: string,
  postcode: string,
  [key: string]
}

type ContactOption = "mail" | "email" | "sms"

type ContactOptions = Array<ContactOption>

interface ProfilePreferences {
  contact: ContactOptions,
}

interface Profile {
  id: string,
  first_name: string,
  other_names: string,
  address: ProfileAddress,
  mobile: string,
  email: string,
  company: string,
  preferences: ProfilePreferences,
  [key: string]
}