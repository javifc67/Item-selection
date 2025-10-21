import "./../assets/scss/MainScreen.scss";

export default function MainScreen({ config, sendResult }) {
  return (
    <div id="MainScreen" className="screen_wrapper" style={{ backgroundImage: `url(${config.backgroundImg})` }}></div>
  );
}
