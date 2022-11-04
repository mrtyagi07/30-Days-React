const numbers = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

//style={{ backgroundColor: 'red' }}

const Even = ({ num }) => (
  <div className="grid-item" style={{ backgroundColor: '#5f3dc4' }}>
    {num}
  </div>
);

const Odd = ({ num }) => (
  <div className="grid-item" style={{ backgroundColor: '#37b24d' }}>
    {num}
  </div>
);

const Prime = ({ num }) => (
  <div className="grid-item" style={{ backgroundColor: '#f76707' }}>
    {num}
  </div>
);

const Numbers = ({ numbers }) => {
  // const findOut =
  numbers.map(num => {
    return (
      <div className="grid-container">
        {num % 2 === 0 ? <Even num={num} /> : <Odd num={num} />}
      </div>
    );
    // if (num > 1) {
    //   for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    //     if (num % i === 0) break;
    //     <Prime num={num} />;
    //   }
    // }
  });
  // return <div className="grid-container">{findOut}</div>;
};

const App = () => {
  return <Numbers numbers={numbers} />;
};

const rootElement = document.getElementById('root');
ReactDom.render(<App />, rootElement);
