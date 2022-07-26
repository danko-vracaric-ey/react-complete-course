import React, { useCallback, useMemo, useState } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/UI/Button/Demo/DemoOutput";
import DemoList from "./components/UI/Button/Demo/DemoList";
function App() {
  const [listTitle, setListTitle] = useState("My List");
  console.log("App is Running");
  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);
  // const [showParagraph, setShowParagraph] = useState(false);
  // const [allowToggle, setAllowToggle] = useState(false);
  // console.log("APP RUNNING");
  // const toggleParagraphHandler = useCallback(() => {
  //   if (allowToggle) {
  //     setShowParagraph((prev) => !prev);
  //   }
  // }, [allowToggle]);

  // const allowToggleHandler = () => {
  //   if (allowToggle) {
  //   }

  //   setAllowToggle(true);
  // }; // this only allowstoggling for other button

  // we can tell react, only rexecute <DemoOutput. Funct only if props changes for e.g
  return (
    <div className="app">
      {/* <DemoOutput show={showParagraph} /> */}
      <DemoList
        title={listTitle}
        items={useMemo(() => [5, 3, 1, 10, 9], [])}
      ></DemoList>
      {/* <Button onClick={allowToggleHandler}>AllowToggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle</Button> */}
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
