import './App.css';
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { PageContext } from './PageContext';

function App() {

  const userStatus = {
    isLoggedIn: true,
    lastLogin: '15/Dec/2020'
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <div className='mt-5'>
          {/* Routing Config */}
          <Switch>
            {/* Step 2 of useContext() hook */}
            <PageContext.Provider value={userStatus}>
              <Route path='/' component={Home} exact/>
              <Route path='/about' component={About} />
            </PageContext.Provider>
          </Switch>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
