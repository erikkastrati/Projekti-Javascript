var footeritems = [{ href: "/images/Group 16556.svg", dsp: "Creative Hub" }];
var footermemu = footeritems.map(function (item) {
  return "<img src='" + item.href + "'> alt='' /> <h3> " + item.dsp + "</h3>";
});
