import useSound from "../hooks/useSound";
import "./../assets/scss/Item.scss";

export default function Item({ index, item, isSelected, onToggle, size, nItems }) {
  const selectSound = useSound("/sounds/select_item.wav");

  const hasImage = typeof item?.img === "string" && item.img.trim() !== "";
  const label = typeof item?.label === "string" ? item.label : "";

  const minItemSize = 60;
  const itemsPerRow = Math.max(1, Math.floor(size.width / 200));

  const itemSizeByWidth = size.width / itemsPerRow;

  const itemSizeByHeight = size.height * 0.75;

  const itemSize = Math.max(minItemSize, Math.min(itemSizeByWidth, itemSizeByHeight));

  const padding = itemSize * 0.06;
  const contentPadding = itemSize * 0.04;
  const imageMaxWidth = itemSize * 0.7;
  const fontSize = Math.max(10, itemSize * 0.12);

  const handleClick = () => {
    if (typeof onToggle === "function") {
      selectSound.play();
      onToggle(index);
    }
  };

  return (
    <button
      type="button"
      className={`item-card ${isSelected ? "item-card--selected" : ""}`}
      onClick={handleClick}
      aria-pressed={!!isSelected}
      style={{
        padding,
        width: itemSize,
        height: itemSize,
      }}
    >
      <div className={`item-card__content ${hasImage ? "item-card__content--image" : ""}`}>
        {hasImage ? (
          <img
            style={{ padding: contentPadding, maxWidth: imageMaxWidth }}
            className="item-card__image"
            src={item.img}
            alt={label || `Item ${index + 1}`}
          />
        ) : (
          <span style={{ fontSize, padding: contentPadding }} className="item-card__label">
            {label || `Item ${index + 1}`}
          </span>
        )}
      </div>
    </button>
  );
}
