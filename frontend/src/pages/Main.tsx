import React from "react";
import { useNavigation } from '../navigation';

const Main = () => {
  const navigation = useNavigation();

  return (
    <div>
      <h1>Main Page</h1>
      <button onClick={() => navigation("/login")}>Go Back</button>
    </div>
  )
};

export default Main;
