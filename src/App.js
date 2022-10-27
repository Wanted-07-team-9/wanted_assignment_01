import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './utils/privateRoute';
import LoginPage from './pages/Login';
import RegistPage from './pages/Register';
import TodoPage from './pages/Todo';
import NotFound from './pages/Notfound';
import { GlobalStyles } from './styles/common';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute needAuth={false} component={<LoginPage />} />} />
          <Route path="/register" element={<RegistPage />} />
          <Route path="/todo" element={<PrivateRoute needAuth={true} component={<TodoPage />} />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
