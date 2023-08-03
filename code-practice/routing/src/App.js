import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import LayoutPage from './pages/Layout';
import './style.css';


function App() {
  return (
    <Routes>
      <Route element={<LayoutPage />}>
        <Route path="/" element={<HomePage />} />

      </Route>
    </Routes>
  );
}

export default App;
