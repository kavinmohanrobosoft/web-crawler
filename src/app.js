import * as React from "react";
import Crawler from "./crawlerFile"
import { data } from "./crawler";
const finalData = data.join()
const App = () => {
  return (
    <>
      <Crawler data={finalData} tagTobehandle="h1" sort={true} />
    </>
  );
};

export default App;
