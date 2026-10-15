const word = { display: "block", lineHeight: 1.1 } as const;

export function Logo() {
  return (
    <div
      style={{
        fontFamily: "var(--font-body)",
        fontSize: 26,
        fontWeight: 700,
        letterSpacing: 2.4,
        textTransform: "uppercase",
        textAlign: "center",
        color: "var(--theme-text)",
      }}
    >
      <span style={word}>VR</span>
      <span style={word}>Global</span>
      <span style={word}>Group</span>
    </div>
  );
}

export function Icon() {
  return (
    <span
      style={{
        fontFamily: "var(--font-body)",
        display: "block",
        fontSize: 11,
        fontWeight: 800,
        lineHeight: "18px",
        whiteSpace: "nowrap",
        color: "var(--theme-text)",
      }}
    >
      VR
    </span>
  );
}
