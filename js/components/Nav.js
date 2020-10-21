import createElement from "../../ui-framework/main";
import "../../css/components/navigation.css";

export default function Nav(whenClicked) {
  const nav = createElement("nav", "", document.body, "navigation");
  const navList = createElement("ul", "", nav);

  const navListItems = ["Dashboard", "Bookmarks", "Create", "Profile"];
  navListItems.forEach(function (text) {
    const listItem = createElement("li", text, navList);
    listItem.addEventListener("click", function (event) {
      whenClicked(text);
    });
  });
}
