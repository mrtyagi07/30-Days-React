import Navbar from './components/header/Navbar';
import css from './app.css';

const App = props => {
  const date = new Date();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  const day = date.getDay().toString().padStart(2, 0);

  const handleTime = () => {
    alert(`${month} ${day}, ${year}`);
    // return `${month} ${day}, ${year}`;
  };

  const theme = month => {
    if (
      month === 'March' ||
      month === 'April' ||
      month === 'May' ||
      month === 'June'
    ) {
      document.body.style.backgroundColor = '#c2410c';
    } else if (
      month === 'July' ||
      month === 'August' ||
      month === 'September'
    ) {
      document.body.style.backgroundColor = '#8b5cf6';
    } else if (
      month === 'October' ||
      month === 'November' ||
      month === 'December'
    ) {
      document.body.style.backgroundColor = '#c026d3';
    } else if (month === 'Janurary' || month === 'Feburary') {
      document.body.style.backgroundColor = '#65a30d';
    }
  };
  theme(month);

  return (
    <>
      <Navbar theme={theme} />;{/* <Main theme={theme} /> */}
    </>
  );
};

export default App;
