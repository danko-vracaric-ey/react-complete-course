import React, { useMemo } from "react";

import classes from "./DemoList.module.css";

const DemoList = (props) => {
  console.log("DemoList is Running!");
  console.log(props.items);

  const sortedList = useMemo(() => {
    console.log("someExtensiveOperation");
    return props.items.sort((a, b) => a - b);
  }, [props.items]);

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
