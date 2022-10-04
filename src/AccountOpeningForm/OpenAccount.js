import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Account } from "./Account";
export default function OpenAccount() {
  const [accountForm, updateAccountForm] = useState(new Account());
  const openAccount = (event) => {
    console.log("I'm opening account");
    event.preventDefault();

    console.log(accountForm);
    //console.log(formData)
    //api -> backend -> db
  };

  const updateForm = (event) => {
    console.log(event);
    //accountForm[event.target.id] = event.target.value;
    updateAccountForm({
      ...accountForm,
      [event.target.id]: event.target.value,
    });
  };

  const updateServices = (event) => {
    updateAccountForm({
      ...accountForm,
      services: {
        ...accountForm.services,
        [event.target.id]: !accountForm.services[event.target.id],
      },
    });
  };

  const mobileRegex = new RegExp("[0-9]{10}");
  const password = '([a-z]+[A-Z]+[0-9]+[.,-}{|*&^%@!~":;]+)';
  return (
    <div className="center-box">
      <form onSubmit={openAccount}>
        <div>
          <input
            type="text"
            placeholder="First Name"
            required
            pattern="[a-zA-Z]*"
            id="firstName"
            onChange={updateForm}
            value={accountForm.firstName}
          />
          <input
            type="text"
            placeholder="Middle Name"
            required
            id="middleName"
            onChange={updateForm}
            value={accountForm.middleName}
          />
          <input
            type="text"
            placeholder="Last Name"
            required
            id="lastName"
            onChange={updateForm}
            value={accountForm.lastName}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            required
            pattern={password}
            id="password"
            onChange={updateForm}
            value={accountForm.password}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            required
            id="email"
            value={accountForm.email}
            onChange={updateForm}
          />
        </div>
        <div>
          <input
            placeholder="Mobile Number"
            pattern="[0-9]{10}"
            required
            id="mobile"
            value={accountForm.mobile}
            onChange={updateForm}
          />
        </div>

        <div>
          <select
            placeholder="Type of account"
            id="accountType"
            onChange={updateForm}
          >
            <option value="saving">Saving</option>
            <option value="current">Current</option>
            <option value="fixed">Fixed</option>
          </select>
        </div>
        <div>
          <label>Gender</label>
          <input
            type="radio"
            name="gender"
            id="gender"
            onChange={updateForm}
            value="male"
          />
          Male
          <input
            type="radio"
            name="gender"
            id="gender"
            onChange={updateForm}
            value="female"
          />
          Female
        </div>
        <div>
          <label>Services</label>
          <div>
            <input
              type="checkbox"
              checked={accountForm.services.creditCard}
              onChange={updateServices}
              id="creditCard"
            />
            Credit Card
          </div>
          <div>
            <input
              type="checkbox"
              checked={accountForm.services.debitCard}
              onChange={updateServices}
              id="debitCard"
            />
            Debit Card
          </div>
          <div>
            <input
              type="checkbox"
              checked={accountForm.services.passBook}
              onChange={updateServices}
              id="passBook"
            />
            Passbook Card
          </div>
          <div>
            <input
              type="checkbox"
              checked={accountForm.services.mobileBankinkg}
              onChange={updateServices}
              id="mobileBanking"
            />
            Mobile Banking
          </div>
          <div>
            <input
              type="checkbox"
              checked={accountForm.services.smsBanking}
              onChange={updateServices}
              id="smsBanking"
            />
            SMS Banking
          </div>
        </div>
        <div>
          <label>D.O.B</label>
          <input
            type="date"
            onChange={updateForm}
            id="dob"
            value={accountForm.dob}
          />
        </div>
        <div>
          <label>Pan Card</label>
          <input type="file" placeholder="Please update Pan" />
        </div>
        <div>
          <label>Adhar Card</label>
          <input type="file" />
        </div>
        <div>
          <Button type="submit" variant="primary">
            Open
          </Button>
        </div>
      </form>
    </div>
  );
}
