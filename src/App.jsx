import React, { useState } from 'react';
import Header from './components/Header';
import TypingTest from './components/TypingTest';
import Results from './components/Results';
import Footer from './components/Footer';
import ProgressChart from './components/ProgressChart';

const App = () => {
  const [testResults, setTestResults] = useState(null);

  const handleResults = (results) => {
    setTestResults(results);
  };

  return (
    <div className="App">
      <Header />
      <TypingTest onResults={handleResults} />
      <ProgressChart />
      <Footer />
    </div>
  );
};

export default App;