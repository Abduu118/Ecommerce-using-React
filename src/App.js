import logo from './logo.svg';
import './App.css';
import HomePage from './modules/home-page/homePage';
import Contacts from './modules/shared-components/contacts';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CheckoutPage from './modules/shared-components/checkoutPage';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='contacts'
            element={(<Contacts />)}
          />
          <Route
            path='home'
            element={(<HomePage />)}
          />
          <Route
            path='checkoutPage'
            element={(<CheckoutPage />)}
          />
        </Routes>

      </BrowserRouter>
    </>

  );
}

export default App;
