// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import TableMaxMinProduction from './components/TableMaxMinProduction';
import TableAvgYieldArea from './components/TableAvgYieldArea';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Agriculture Data Analysis</h1>
      <h2>Max and Min Production per Year</h2>
      <TableMaxMinProduction />
      <h2>Average Yield and Cultivation Area (1950-2020)</h2>
      <TableAvgYieldArea />
    </div>
  );
};

export default App;
