import React from "react";
import { Routes, Route } from "react-router"

import { PrivateRoute } from "./navigation";
import { Main, Login } from "./pages";
import { Theme } from '@mui/material/styles';

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PrivateRoute element={<Main />} />} />
    </Routes>
  );
}

export default App;
