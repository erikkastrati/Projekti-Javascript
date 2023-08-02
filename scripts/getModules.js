let modules = [
  { title: "Introduction to Scrum and Agile ways of work" },
  {
    title: "Week 1:",
    description: "Introduction to Software Testing and Selection ",
  },
  {
    title: "Week 2:",
    description: "Manual Testing Fundamentals",
  },
  {
    title: "Week 3-6:",
    description: " Introduction to OOP ( Java )",
  },
  {
    title: "Week 7:",
    description: " Introduction to Automation Testing",
  },
  {
    title: "Week 8-10:",
    description: "Back-end Test Automation using rest assured ( Java ) ",
  },
  {
    title: "Week 11-13:",
    description: "Front-end Test Automation using Selenium (Java) - GUI ",
  },
  {
    title: "Week 14:",
    description: " Database connection - Postgre ",
  },
  {
    title: "Week 15:",
    description: "  End 2 End Testing ",
  },
  {
    title: "Week 16:",
    description: "  Testing Best Practices ",
  },
  {
    title: "Week 17:",
    description: "Prepare for Job Interview",
  },
];
let newList = modules.map(function (item, index) {
  if (item.description) {
    return (
      "<h4>" + item.title + "<span>" + item.description + "</span></h4><br>"
    );
  } else {
    if (index === 0) {
      return '<h4 class="title1">' + item.title + "</h4>";
    } else {
      return "<h4>" + item.title + "</h4>";
    }
  }
});

document.write(newList.join(""));
