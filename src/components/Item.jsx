import "./../assets/scss/Item.scss";

export default function Item({ index, item, isSelected, onToggle, size, nItems }) {
  const hasImage = typeof item?.img === "string" && item.img.trim() !== "";
  const label = typeof item?.label === "string" ? item.label : "";

  // Calcular tamaño responsivo basado en disponibilidad de espacio
  // Se ajusta por el número de items y el ancho disponible
  const minItemSize = 100; // Tamaño mínimo en px
  const maxItemSize = 200; // Tamaño máximo en px
  const itemsPerRow = Math.max(1, Math.floor(size.width / 170)); // Mínimo 170px por item
  const availableSpace = size.width * 0.92; // 92% del ancho disponible
  const itemSize = Math.max(
    minItemSize,
    Math.min(
      (availableSpace / itemsPerRow) * 0.85, // 85% del espacio por fila
      Math.min(maxItemSize, size.height * 0.35), // Máximo 35% de la altura disponible
    ),
  );

  const padding = itemSize * 0.06;
  const contentPadding = itemSize * 0.04;
  const imageMaxWidth = itemSize * 0.65;
  const fontSize = Math.max(10, itemSize * 0.11);

  const handleClick = () => {
    if (typeof onToggle === "function") {
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
