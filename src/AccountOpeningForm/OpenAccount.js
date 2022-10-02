import React from "react";
export default function OpenAccount() {
  const openAccount = () => {
    console.log("I'm opening account");
  };

  const mobileRegex = new RegExp("[0-9]{10}");
  const password = '([a-z]+[A-Z]+[0-9]+[.,-}{|*&^%@!~":;]+)';
  return (
    <div>
      <form onSubmit={openAccount}>
        <div>
          <input
            type="text"
            placeholder="First Name"
            required
            pattern="[a-zA-Z]*"
          />
          <input type="text" placeholder="Middle Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            required
            pattern={password}
          />
        </div>
        <div>
          <input type="email" placeholder="Email" required />
        </div>
        <div>
          <input placeholder="Mobile Number" pattern="[0-9]{10}" required />
        </div>

        <div>
          <select placeholder="Type of account">
            <option>Saving</option>
            <option>Current</option>
            <option>Fixed</option>
          </select>
        </div>
        <div>
          <label>Gender</label>
          <input type="radio" name="gender" />
          Male
          <input type="radio" name="gender" />
          Female
        </div>
        <div>
          <label>Services</label>
          <div>
            <input type="checkbox" /> Credit Card
          </div>
          <div>
            <input type="checkbox" /> Debit Card
          </div>
          <div>
            <input type="checkbox" /> Passbook Card
          </div>
          <div>
            <input type="checkbox" /> Mobile Banking
          </div>
          <div>
            <input type="checkbox" /> SMS Banking
          </div>
        </div>
        <div>
          <label>D.O.B</label>
          <input type="date" />
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
          <button type="submit">Open</button>
        </div>
      </form>
    </div>
  );
}
