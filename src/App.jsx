import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import ErrorPage from 'pages/ErrorPage/ErrorPage';

const test = import.meta.env.AQUATRACK_API;

function App() {
  console.log(test);
  return (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
  );
}

export default App;
