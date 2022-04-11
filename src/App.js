import SignUp from './pages/signUp'
import MainScreen from './pages/mainScreen';
import ErrorPage from './pages/errorPage/Index';
import Modal from 'react-modal';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/protectedRoute'
import store from './redux/store';

Modal.setAppElement('#root')

function App() {

  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route exact path="/signup" element={<SignUp />} />
          <Route element={<ProtectedRoute />}>
            <Route exact path="/main" element={<MainScreen />} />
          </Route>
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

//<Route element={<ProtectedRoute loggedIn={store.getState().loggedIn !== null} />}>