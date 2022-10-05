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
  accountType = "current";
  gender = "";
  services = {
    creditCard: false,
    debitCard: false,
    passBook: true,
    mobileBankinkg: false,
    smsBanking: false,
  };
  dob = "";
  panCard = null;
  adharCard = null;
}
