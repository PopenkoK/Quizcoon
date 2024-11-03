import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import Login from './pages/login/Login';
import Quizzes from './pages/quizzes/Quizzes';
import SignUp from './pages/signup/SignUp';
import Test from './pages/tests/Test';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Quizzes />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/test/:id" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
