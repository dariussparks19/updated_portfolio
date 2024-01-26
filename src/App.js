import React from 'react';
//imported global styled
import GlobalStyle from './components/GlobalStyle';

import AboutMe from './pages/AboutMe';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <AboutMe/>
    </div>
  );
}

export default App;
