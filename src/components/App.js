import { useState, useEffect } from "react";
import Child from "./Child";

const App = () => {
  console.log("%cApp: render start", "color: MediumSpringGreen");

  const [isChildShown, setIsChildShown] = useState(() => {
    console.log("%cApp: useState(() => false)", "color: tomato");
    return false;
  });

  useEffect(() => {
    console.log("%cApp: useEffect(() => {}, [])", "color: MediumTurquoise");
    return () => {
      console.log(
        "%cApp: useEffect(() => {}, []) cleanup 🧹",
        "color: MediumTurquoise"
      );
    };
  }, []);

  useEffect(() => {
    console.log("%cApp: useEffect(() => {}, [isChildShown])", "color: HotPink");
    return () => {
      console.log(
        "%cApp: useEffect(() => {}, [isChildShown]) cleanup 🧹",
        "color: HotPink"
      );
    };
  }, [isChildShown]);

  const element = (
    <>
      <label>
        <input
          type="checkbox"
          checked={isChildShown}
          onChange={(e) => setIsChildShown(e.target.checked)}
        />{" "}
        show child
      </label>
      <div
        style={{
          padding: 10,
          margin: 10,
          height: 50,
          width: 50,
          border: "solid",
        }}
      >
        {isChildShown ? <Child /> : null}
      </div>
    </>
  );

  console.log("%cApp: render end", "color: MediumSpringGreen");
  return element;
};

export default App;
