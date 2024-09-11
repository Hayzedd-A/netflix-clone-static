// $("body").click(() => {
//   console.log("event captured on body");
//   if ($(".form input").val().length) {
//     console.log("if run");
//     $(".form label").addClass("content");
//   } else {
//     console.log("else run");
//     $(".form label").removeClass("content");
//   }
// });

$("document").ready(() => {
  console.log("DOM fully loaded and parsed");
  for (let i = 1; i <= 10; i++) {
    const img = $("<img>").attr(
      "src",
      `assets/images/trendings/trendings${i}.webp`
    );
    const movieCard = $("<span>").attr("class", "movieCard").append(img);
    $(".movieCards").append(movieCard);
  }

  // generate the markup for the faq
  $(document).ready(function () {
    const faq = [
      {
        question: "What is Netflix?",
        answer: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. 
      You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!`,
      },
      {
        question: "How much does Netflix cost?",
        answer: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦2,200 to ₦7,000 a month. No extra costs, no contracts.`,
      },
      {
        question: "Where can I watch?",
        answer: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
      You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
      },
      {
        question: "How do i cancel?",
        answer: `Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
      },
      {
        question: "What can I watch on Netflix?",
        answer: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`,
      },
      {
        question: "Is Netflix good for kids'?",
        answer: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
      Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
      },
    ];

    // Loop through the FAQ array and generate the HTML for each FAQ item
    faq.forEach(function (item) {
      // Create the question and icon div
      const questionDiv = `
      <div class="faq">
        <div class="question">
          <span>${item.question}</span>
          <span class="icon">&plus;</span>
        </div>
        <div class="answer">
        </div>
      </div>
    `;

      // Append questionDiv to the #faq-container
      $(".faq-container").append(questionDiv);

      // Split the answer into paragraphs and append to the answer div
      const answerParagraphs = item.answer
        .split("\n")
        .map(answerPart => `<p>${answerPart.trim()}</p>`)
        .join("");
      $(".faq-container .faq:last-child .answer").append(answerParagraphs);
    });
  });

  $(".faq-container").on("click", ".question", function () {
    const parent = $(this).parent();
    if (parent.hasClass("current")) {
      $(".faq").removeClass("current");
    } else {
      $(".faq").removeClass("current");
      $(this).parent().addClass("current");
    }
    console.log(parent);
  });

  const footerLink = [
    "Help Center",
    "Account",
    "Media Center",
    "Investor Relations",
    "Jobs",
    "Ways to Watch",
    "Terms of Use",
    "Privacy",
    "Cookie Preferences",
    "Corporate Information",
    "Contact Us",
    "Speed Test",
    "Legal Notices",
    "Only on Netflix",
  ];
  footerLink.forEach(link => {
    const footerItem = $("<a>").text(link);
    $(".others").append(footerItem);
  });
});
