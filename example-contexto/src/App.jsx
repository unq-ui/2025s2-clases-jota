import { BrowserRouter, Route, Routes } from 'react-router';

import UserProvider from './hooks/UserContext';

import Home from './pages/Home';
import ProtectedRouter from './pages/ProtectedRouter';

import './App.css'
import Login from './pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRouter />}>
            <Route path="/" element={<Home />} />
          </Route>
          {/* <Route path="/about" element={<About />} />
          <Route path="/:id" element={<User />} /> */}
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
