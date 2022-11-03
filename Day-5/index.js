// function syntax

const getUserInfo = (firstName, lastName, country) => {
  return `${firstName} ${lastName}. Lives in ${country}.`;
};

// calling a functons

console.log(getUserInfo('Vaibhav', 'Tyagi', 'India'));

// User component, component should start with an uppercase
const User = props => {
  return (
    <div>
      <h1>
        {props.firstName}
        {props.secondName}
      </h1>
      <small>{props.country}</small>
    </div>
  );
};

// calling or instantiating a component, this component has three properties and we call them props:firstName, lastName, country
<User firstName="Vaibhav" secondName="Tyagi" country="India" />;
