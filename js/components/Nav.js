import createElement from "../../ui-framework/main";

export default function Nav(whenClicked) {
  const nav = createElement("nav", "", document.body);
  const navList = createElement("ul", "", nav);

  const navListItems = ["Dashboard", "Bookmarks", "Create", "Profile"];
  navListItems.forEach(function (text) {
    const listItem = createElement("li", text, navList);
    listItem.addEventListener("click", function (event) {
      whenClicked(text);
    });
  });
}
