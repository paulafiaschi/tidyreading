export default function Number(props) {
  return (
    <div className="numberContainer">
      <p>{props.number}</p>
      <p>{props.kind}</p>
    </div>
  );
}
