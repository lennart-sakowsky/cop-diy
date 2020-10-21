import Header from "./components/Header";
import Nav from "./components/Nav";
import QuestionButton from "./components/QuestionButton";
import QuestionList from "./components/QuestionList";
import fieldCopy from "./components/FormField";
import clickButt from "./components/FormsButton";

fieldCopy();
fieldCopy();
clickButt();

export default function App() {
  const headerComponent = Header();
  QuestionList();
   // QuestionButton();
  Nav(headerComponent.update);
  }



/* In Short-Arrow-Form
Nav((text) => headerComponent.update(text));
 */
