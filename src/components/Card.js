import Book from "./Book";
export default function Card(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>

      <Book></Book>
    </div>
  );
}
