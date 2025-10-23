import "./../assets/scss/Item.scss";

export default function Item({ config, item }) {
  return (
    <div id="Item">
      <div className="content">{item.label}</div>
    </div>
  );
}
