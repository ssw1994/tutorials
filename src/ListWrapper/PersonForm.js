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
    this.id = Date.now(); //unique id
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.mobile = mobile;
    this.email = email;
    this.pinCode = pinCode;
  }
}

export default function PersonForm({ person, dispatch }) {
  const [personForm, updateForm] = React.useState(new Person());

  React.useEffect(() => {
    if (person) {
      updateForm(person);
    } else {
      updateForm(new Person());
    }
  }, [person]);

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

    if (person) {
      dispatch({ type: "UPDATE_ITEM", person: personForm });
    } else {
      dispatch({ type: "ADD_ITEM", person: personForm });
    }
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
          <button>{person ? "Update" : "Add"}</button>
          {person && (
            <button
              type="button"
              onClick={() => dispatch({ type: "CANCEL_EDIT" })}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
