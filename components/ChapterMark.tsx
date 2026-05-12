export default function ChapterMark({
  roman,
  title,
  dark = false,
}: {
  roman: string;
  title: string;
  dark?: boolean;
}) {
  const dim = "#7f8487";
  const fg = dark ? "#ffffff" : "#0a1f2e";
  return (
    <div
      className="flex items-baseline gap-3.5 font-sans"
      style={{
        fontSize: 13,
        color: dim,
        letterSpacing: "0.5px",
        textTransform: "uppercase",
      }}
    >
      <span
        className="font-prose italic"
        style={{
          fontSize: 14,
          color: "#b29362",
          textTransform: "none",
          letterSpacing: 0,
        }}
      >
        Chapter {roman}.
      </span>
      <span
        className="flex-1"
        style={{
          height: 1,
          borderTop: `1px dotted ${dark ? "#2a3f4f" : "#8f7548"}`,
          maxWidth: 120,
        }}
      />
      <span style={{ color: fg, fontWeight: 500 }}>{title}</span>
    </div>
  );
}
