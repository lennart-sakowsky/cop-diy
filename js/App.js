import Header from "./components/Header";
import Nav from "./components/Nav";

export default function App() {
  const headerComponent = Header();
  Nav(function whenClicked(text) {
    headerComponent.update(text);
  });
}
