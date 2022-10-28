import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import TodoPage from './pages/TodoPage';
import { useTempLogin } from './hooks/useTempLogin';

function App() {
  useTempLogin();
  return (
    <Routes>
      <Route path="/" exact={true} element={<MainPage />} />
      <Route path="/todo" element={<TodoPage />} />
    </Routes>
  );
}

export default App;
