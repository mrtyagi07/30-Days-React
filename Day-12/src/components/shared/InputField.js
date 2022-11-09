import React from 'react';

const InputField = props => {
  console.log(props);
  return (
    <div className="inputField">
      <label htmlFor="firstName">First Name: </label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        placeholder="First Name"
        value={props.firstName}
        onChange={props.handleChange}
      />
      <h1>{props.inputs.firstName}</h1>

      <label htmlFor="lastName">Last Name: </label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        placeholder="Last Name"
        value={props.lastName}
        onChange={props.handleChange}
      />
      <h1>{props.inputs.lastName}</h1>
      <label htmlFor="email">Email </label>
      <input
        type="email"
        name="email"
        value={props.email}
        onChange={props.handleChange}
        placeholder="Email"
      />
    </div>
  );
};

export default InputField;
