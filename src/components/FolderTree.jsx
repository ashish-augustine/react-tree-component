import { NodeRendererProps, Tree } from "react-arborist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCarSide,
  faFolder,
  faCirclePlus,
  faCircleMinus,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";

let iconMap = {
  folder: faFolder,
  car: faCarSide,
  opened: faCircleMinus,
  closed: faCirclePlus,
};

function getIconComponent(node) {
  let icon = "car";
  let color = "#B2B2B2";
  if (node.isLeaf) {
    icon = "car";
    color = "#D43D48";
  }
  if (node.data.isFolder || node.level === 0) {
    icon = "folder";
    color = "#F5D374";
  }
  if (node.data.icon) icon = node.data.icon;
  if (node.data.color) color = node.data.color;

  return (
    <FontAwesomeIcon
      color={color}
      icon={iconMap[icon]}
      style={{ marginLeft: "5px" }}
    />
  );
}

function Node({ node, style, dragHandle, onNodeClick }) {
  /* This node instance can do many things. See the API reference. */

  function clickHandler() {
    node.toggle();
    if (onNodeClick) onNodeClick(node);
  }
  return (
    <div
      style={{
        ...style,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: "5px",
      }}
      ref={dragHandle}
      onClick={clickHandler}>
      {node.isLeaf ? null : (
        <FontAwesomeIcon
          color={node.isOpen ? "#C1C3C5" : "#96989A"}
          icon={node.isOpen ? iconMap.opened : iconMap.closed}
        />
      )}

      {getIconComponent(node)}
      <p style={{ marginLeft: "5px" }}>{node.data.name}</p>
    </div>
  );
}

export default function FolderTree({ data, onItemSelected }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2 style={{ marginTop: "1%", marginLeft: "1%" }}>Data Objects</h2>
      <Tree
        // ref={tree}

        initialData={data}
        openByDefault={false}
        width={600}
        height={600}
        indent={24}
        rowHeight={36}
        paddingTop={30}
        paddingBottom={10}
        padding={25 /* sets both */}>
        {(params) => Node({ ...params, onNodeClick: onItemSelected })}
      </Tree>
    </div>
  );
}
