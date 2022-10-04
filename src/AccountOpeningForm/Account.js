export class CustomerName {
  firstName;
  lastName;
  middleName;

  constructor(firstName = "", lastName = "", middleName = "") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
  }
}

export class Account extends CustomerName {
  password = "";
  email = "";
  mobile = "";
  accountType = "";
  gender = "";
  services = {
    creditCard: true,
    debitCard: false,
    passBook: false,
    mobileBankinkg: false,
    smsBanking: false,
  };
  dob = "";
  panCard = null;
  adharCard = null;
}
