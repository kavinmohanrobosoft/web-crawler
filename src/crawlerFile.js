import React from "react";
import JSSoup from "jssoup";

const Crawler = (props) => {
  const listArray = [];
  const soup = new JSSoup(props.data, false);
  const output = soup.findAll(props.tagTobehandle);

  for (let i = 0; i < output.length; i++) {
    listArray.push(output[i].text);
  }

  props.sort ? listArray.sort() : "";

  return (
    <ul>
      {listArray.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default Crawler;
