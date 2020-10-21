import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import QuestionButton from "./components/QuestionButton";
import QuestionList from "./components/QuestionList";
import Profile from "./components/Profile";

export default function App() {
  const headerComponent = Header();
  Main();
  QuestionList();
  // QuestionButton();
  Profile();
  Nav(headerComponent.update);
}

/* In Short-Arrow-Form
Nav((text) => headerComponent.update(text));
 */
