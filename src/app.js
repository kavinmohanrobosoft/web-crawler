import * as React from "react";
import Crawler from "./crawlerFile"
import { data } from "./data";

const App = () => {
  return (
    <>
      <Crawler data={data} tagTobehandle="h1" sort={true} />
    </>
  );
};

export default App;
