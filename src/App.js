import React from "react";
import SignUp from "./pages/signUp";
import MainScreen from "./pages/mainScreen";
import ErrorPage from "./pages/errorPage/Index";
import Modal from "react-modal";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainProtected from "./components/protectedRoute/mainProtected";
import SignUpProtected from "./components/protectedRoute/signUpProtected";

Modal.setAppElement("#root");

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Rota inicial redireciona para /signup */}
          <Route path="/" element={<SignUpProtected />}>
            <Route index element={<SignUp />} />
          </Route>
          <Route path="/main" element={<MainProtected />}>
            <Route index element={<MainScreen />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
