import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import MonthInfo from '../MonthInfo/MonthInfo';

const SharedLayout = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <MonthInfo />
    </>
  );
};

export default SharedLayout;
