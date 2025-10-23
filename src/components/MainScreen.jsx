import { useEffect, useState } from "react";
import "./../assets/scss/MainScreen.scss";
import Item from "./Item";

export default function MainScreen({ config, sendResult }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="MainScreen" className="screen_wrapper" style={{ backgroundImage: `url(${config.backgroundImg})` }}>
      <div className="content_wrapper">
        <p className="title">{config.title}</p>
        <div className="items_wrapper" style={{ height: size.height * 0.9, width: "100%" }}>
          {config.items.map((item, index) => (
            <Item key={index} item={item} size={size}></Item>
          ))}
        </div>
      </div>
    </div>
  );
}
