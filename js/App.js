import Header from "./components/Header";
import Nav from "./components/Nav";
import QuestionButton from "./components/QuestionButton";
import QuestionList from "./components/QuestionList";

export default function App() {
  const headerComponent = Header();
  QuestionList();
  // QuestionButton();
  Nav(headerComponent.update);
}

/* In Short-Arrow-Form
Nav((text) => headerComponent.update(text));
 */
