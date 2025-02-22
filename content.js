document.querySelectorAll("a").forEach((link) => {
  if (link.href.includes("item?id=")) {
    console.log("Inside link href if statement");
    link.target = "_blank";
  }
});
