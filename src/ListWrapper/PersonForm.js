import React from "react";
class Person {
  firstName;
  lastName;
  address;
  email;
  pinCode;
  mobile;
  id;
  constructor(
    firstName = "",
    lastName = "",
    address = "",
    mobile = "",
    email = "",
    pinCode = ""
  ) {
    this.id = Date.now();
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.mobile = mobile;
    this.email = email;
    this.pinCode = pinCode;
  }
}

export default function PersonForm({ dispatch }) {
  const [personForm, updateForm] = React.useState(new Person());

  const updatePerson = (event) => {
    updateForm((prev) => {
      return {
        ...prev,
        [event.target.id]: event.target.value,
      };
    });
  };

  const firstName = (
    <div>
      <input
        placeholder="firstName"
        id="firstName"
        onChange={updatePerson}
        value={personForm.firstName}
      />
    </div>
  );
  const lastName = (
    <div>
      <input
        placeholder="lastName"
        id="lastName"
        onChange={updatePerson}
        value={personForm.lastName}
      />
    </div>
  );
  const mobile = (
    <div>
      <input
        placeholder="mobile"
        id="mobile"
        onChange={updatePerson}
        value={personForm.mobile}
      />
    </div>
  );
  const email = (
    <div>
      <input
        placeholder="email"
        id="email"
        onChange={updatePerson}
        value={personForm.email}
      />
    </div>
  );
  const pinCode = (
    <div>
      <input
        placeholder="pinCode"
        id="pinCode"
        onChange={updatePerson}
        value={personForm.pinCode}
      />
    </div>
  );

  const AddPerson = (e) => {
    e.preventDefault();

    dispatch({ type: "ADD_ITEM", person: personForm });

    updateForm(new Person());
  };

  return (
    <div>
      <form onSubmit={AddPerson}>
        {firstName}
        {lastName}
        {email}
        {mobile}
        {pinCode}
        <div>
          <button>Add</button>
        </div>
      </form>
    </div>
  );
}
