import { useState } from 'react';
import css from './app.css';
import InputField from './components/shared/InputField';

const App = props => {
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [country, setCountry] = useState('');
  // const [title, setTitle] = useState('');
  const [inputs, setInputs] = useState({});

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  /*
    we can get the name and value like this: e.target.name, e.target.value
    but we can also destructure  name and value from e.target
    const name = e.target.name
    const value = e.target.value
    */

  // const { name, value } = e.target;

  // [variablename] to use a variable name as a key in an object
  // name refers to the name attribute of the input elements

  const handleSumit = e => {
    /* 
     e.preventDefault()
      stops the default behavior of form element
     specifically refreshing of page
     */
    e.preventDefault();

    /*
      the is the place where we connect backend api 
      to send the data to the database
      */
  };

  return <InputField inputs={inputs} handleChange={handleChange} />;
};

export default App;
