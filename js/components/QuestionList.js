import createElement from "../../ui-framework/main";
//import QuestionButton from "./QuestionButton";
import "../../css/components/questionlist.css";

export default function QuestionList() {
  const questionList = createElement(
    "ul",
    "",
    document.body.querySelector("main"),
    "question-card-list"
  );
  const questionListItem = createElement(
    "li",
    "",
    questionList,
    "question-card"
  );
  const bookmark = createElement("div", "B", questionListItem);
  const h2Title = createElement("h2", "Question:", questionListItem);
  const question = createElement("p", "What do you think?", questionListItem);
  const answer = createElement("p", "Not much", questionListItem, "hidden");
  //QuestionButton();
  const questionTagList = createElement(
    "ul",
    "",
    questionListItem,
    "question-card__tags"
  );

  const questionTags = ["Tag w", "Tag x", "Tag y", "Tag z"];
  questionTags.forEach((tagText) => {
    const questionTag = createElement(
      "li",
      tagText,
      questionTagList,
      "question-card__tag"
    );
  });

  return { showAnswer };

  function showAnswer(className) {
    answer.className = className;
  }
}
