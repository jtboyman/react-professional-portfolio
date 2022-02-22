import React from 'react';
import PortfolioContainer from './components/PortfolioContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div>
        <PortfolioContainer />
      </div>
      <div className="position-fixed bottom-0 start-50 translate-middle-x">
        <Footer />
      </div>
    </div>

  );
}

export default App;
