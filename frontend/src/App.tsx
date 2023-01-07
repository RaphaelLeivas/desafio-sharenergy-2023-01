import React from "react";
import { Routes, Route } from "react-router"

import { PrivateRoute } from "./navigation";
import { Main, Login } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PrivateRoute element={<Main />} />} />
    </Routes>
  );
}

export default App;
