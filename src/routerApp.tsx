import React from "react";
import { Routes, Route } from "react-router-dom";
import ListPage from "components/Pages/ListPage";
import MainPage from "components/Pages/MainPage";
import NoMatch from "components/Pages/NoMatch";

const RouterApp: React.FC = () => {
  return (
    <Routes>
      <Route path={`${process.env.PUBLIC_URL}/`} element={<MainPage />} />
      <Route path={`${process.env.PUBLIC_URL}/list/*`} element={<ListPage />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default RouterApp;
