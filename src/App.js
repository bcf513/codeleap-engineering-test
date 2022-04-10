import SignUp from './pages/signUp'
import MainScreen from './pages/mainScreen';
import ErrorPage from './pages/errorPage/Index';
import Modal from 'react-modal';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 
Modal.setAppElement('#root')

function App() {

  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;