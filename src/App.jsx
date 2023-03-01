import { data } from "./data";
import FolderTree from "./components/FolderTree";
import RightPane from "./components/RightPane";
import "./App.css";
import { useState } from "react";

export default function App() {
  function onItemSelected(node) {
    console.log(node);
    setSelected(node);
  }

  let [selected, setSelected] = useState();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100vw",
        height: "100%",
      }}>
      <FolderTree data={data} onItemSelected={onItemSelected} />
      <RightPane node={selected} />
    </div>
  );
}
