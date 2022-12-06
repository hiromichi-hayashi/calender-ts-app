import "./style.css";
import { setGeolocation } from "./geolocation";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
  こんにちは
  </div>
`;

setGeolocation();
