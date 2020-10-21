import createElement from "../../ui-framework/main";
import "../../css/components/profile.css";

export default function () {
  const profile = createElement(
    "section",
    "",
    document.body.querySelector("main"),
    "profile"
  );
  const profileBox = createElement("div", "", profile, "profile-box");
  const aboutMeBox = createElement("div", "", profileBox, "aboutme-box");
  const aboutMeBoxImage = createElement("img", "", aboutMeBox);
  const aboutMeBoxTitle = createElement("h2", "Marijn Haverbeke", aboutMeBox);
  const aboutMeText = createElement(
    "p",
    "I am a programming language enthusiast and polyglot",
    profileBox
  );
  const skillsTitle = createElement("h3", "Skills", profileBox);
  const skillTagList = createElement("ul", "", profileBox);

  const skillTags = ["Skill 1", "Skill 2", "Skill 3", "Skill 4"];
  skillTags.forEach((tagText) => {
    const skillTag = createElement("li", tagText, skillTagList);
  });

  const button = createElement("button", "logout", profileBox);
}
