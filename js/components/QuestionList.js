import createElement from "../../ui-framework/main";
import QuestionButton from "./QuestionButton";

export default function QuestionList() {
  const element = createElement("section", "", document.body);
  const divBookmark = createElement("div", "B", element);
  const h2Title = createElement("h2", "Question:", element);
  const paragraph = createElement("p", "Lorem ipsum", element);
  // element.appendChild(QuestionButton());
  const questionList = createElement("ul", "", element);

  const questionListItems = ["Tag w", "Tag x", "Tag y", "Tag z"];
  questionListItems.forEach((tagText) => {
    const questionListItem = createElement("li", tagText, questionList);
  });
}
