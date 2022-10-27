import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Routes>
      <Route path="/" exact={true} element={<MainPage />} />
    </Routes>
  );
}

export default App;
