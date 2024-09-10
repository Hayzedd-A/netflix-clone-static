$("body").click(() => {
  console.log("event captured on body");
  if ($(".form input").val().length) {
    console.log("if run");
    $(".form label").addClass("content");
  } else {
    console.log("else run");
    $(".form label").removeClass("content");
  }
});
