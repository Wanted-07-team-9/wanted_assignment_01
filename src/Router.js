import { Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import ToDoPage from './page/ToDoPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/todo" element={<ToDoPage />} />
    </Routes>
  );
};

export default Router;
