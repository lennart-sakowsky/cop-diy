import Header from "./components/Header";
import Nav from "./components/Nav";

export default function App() {
  const headerComponent = Header();
  Nav(headerComponent.update);
}

/* In Short-Arrow-Form
Nav((text) => headerComponent.update(text));
 */
