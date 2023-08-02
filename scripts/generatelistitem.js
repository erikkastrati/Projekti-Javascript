const listItems = [
  {
    content: "Program start: <strong>October 2023</strong>",
  },
  {
    content:
      "Apply for Early Bird price until August 15th!<br /><span>*This Application process is open until August 15th for the fastest 10 students!</span>",
  },
  { content: "<strong>5 months</strong> to junior tester" },
  {
    content:
      "Suitable for: <strong>Beginners<br />(We advise you to first see the free course)</strong>",
  },
  {
    content: "Program structure:<br />5 months program + Hire-Me-Program",
  },
];

function generateListItems() {
  const container = document.getElementById("description-infos");

  const listItemsHTML = listItems.map((item) => {
    return `<li>${item.content}</li>`;
  });

  const list = document.createElement("ul");
  list.className = "item";
  list.innerHTML = listItemsHTML.join("");

  container.appendChild(list);
}

generateListItems();
