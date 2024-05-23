import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { LoaderPage } from './components/Loader/Loader';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useAuth } from './hooks';
import { RestrictedRoute } from './components/RestrictedRoute';
import { PrivateRoute } from './components/PrivateRoute';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { userSlice } from './redux/user/userSlice';

// import UserPanel from './components/UserPanel/UserPanel';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage '));
const TrackerPage = lazy(() => import('./pages/TrackerPage/TrackerPage'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(userSlice.actions.get());
    }
  }, [dispatch, isLoggedIn]);
  return isRefreshing ? (
    <LoaderPage />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/tracker" component={<SignUpPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/tracker" component={<SignInPage />} />
          }
        />
        <Route
          path="/tracker"
          element={
            <PrivateRoute redirectTo="/login" component={<TrackerPage />} />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
export default App;
// export default function App() {
//   return (
//     <div>
//       <div style={{ height: '300px' }}></div>
//       <UserPanel />;<div style={{ height: '400px' }}></div>
//     </div>
//   );
// }
