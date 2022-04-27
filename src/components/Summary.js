import Number from "./Number";

export default function Summary() {
  return (
    <div className="summary">
      <Number number="9" kind="tbr" />
      <Number number="3" kind="reading" />
      <Number number="39" kind="read" />
    </div>
  );
}
