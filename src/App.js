import SignUp from './pages/signUp'
import MainScreen from './pages/mainScreen';
import ErrorPage from './pages/errorPage/Index';
import Modal from 'react-modal';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainProtected from './components/protectedRoute/mainProtected'
import SignUpProtected from './components/protectedRoute/signUpProtected'

Modal.setAppElement('#root')

function App() {

  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route element={<SignUpProtected />}>
            <Route exact path="/signup" element={<SignUp />} />
          </Route>
          <Route element={<MainProtected />}>
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