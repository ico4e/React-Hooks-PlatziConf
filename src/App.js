import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Information from './pages/Information';
import Payment from './pages/Payment';
import Success from './pages/Success';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/checkout/information' component={Information} />
            <Route exact path='/checkout/payment' component={Payment} />
            <Route exact path='/checkout/success' component={Success} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
