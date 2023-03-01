export default function RightPane(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
        flex: 1,
        alignSelf: "stretch",
        backgroundColor: "#3A88FE",
        color: "white"
      }}
    >
      <h1 style={{ margin: "auto", display: "inline-block" }}>
        {props?.node?.data?.name}
      </h1>
    </div>
  );
}
