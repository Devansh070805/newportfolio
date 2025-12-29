const FoxScene = () => {
  return (
    <div
      style={{
        height: "100vh",
        background: "#0f0c29",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white"
      }}
    >
      <h2 style={{ fontSize: "2.5rem" }}>🦊 Fox Animation Here</h2>
      <p style={{ opacity: 0.7, marginTop: "1rem" }}>
        Scroll content starts below
      </p>
    </div>
  );
};

export default FoxScene;
