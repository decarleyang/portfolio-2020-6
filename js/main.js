$(window).on("load", function () {
  $(".loader-wrapper").fadeOut("slow");
});

$("document").ready(function () {
  // //menu
  // toggle = document.querySelectorAll(".toggle")[0];
  // nav = document.querySelectorAll("nav")[0];
  // toggle_open_text = "Menu";
  // toggle_close_text = "Close";

  // toggle.addEventListener(
  //   "click",
  //   function () {
  //     nav.classList.toggle("open");

  //     if (nav.classList.contains("open")) {
  //       toggle.innerHTML = toggle_close_text;
  //     } else {
  //       toggle.innerHTML = toggle_open_text;
  //     }
  //   },
  //   false
  // );

  // setTimeout(function () {
  //   nav.classList.toggle("open");
  // }, 800);
  // //end of menu

  //skill doughnut charts
  let skillswaypoint = new Waypoint({
    element: document.getElementById("skills"),
    handler: function (direction) {
      //skills
      const options = {
        cutoutPercentage: 65,
        animation: {
          easing: "easeOutQuint",
        },
        animateScale: true,
        tooltips: {
          enabled: false,
        },
        events: [],
      };

      const skills = [
        {
          id: "html",
          values: [99, 1],
        },
        {
          id: "ux",
          values: [90, 10],
        },
        {
          id: "js",
          values: [85, 15],
        },
        {
          id: "ps",
          values: [95, 5],
        },
        {
          id: "php",
          values: [65, 35],
        },
        {
          id: "eth",
          values: [60, 30],
        },
      ];

      let offset = 0;

      for (const skill of skills) {
        const canvas = document.querySelector(`#${skill.id}`);
        if (!canvas) {
          continue;
        }

        const ctx = canvas.getContext("2d");

        setTimeout(() => {
          const chart = new Chart(ctx, {
            type: "doughnut",
            data: {
              datasets: [
                {
                  data: skill.values,
                  backgroundColor: ["#e74c3c", "#ecf0f1"],
                },
              ],
            },
            options: options,
          });
        }, offset);

        offset += 250;
      }
      //end of skills
      this.destroy();
    },
  });
  //end od skill doughnut charts

  // works animation
  let works = new Waypoint({
    element: document.getElementById("works"),
    handler: function (direction) {
      anime({
        targets: ".masking-wrap",
        translateY: -160,
        opacity: 1,
      });

      // Create a timeline with default parameters
      var tl = anime.timeline({
        easing: "easeOutExpo",
        duration: 1500,
      });

      tl.add({
        targets: ".masking-wrap",
        translateY: -160,
        opacity: 1,
      })
        .add(
          {
            targets: "#sunglasses",
            translateY: 20,
            translateX: 10,
            opacity: 1,
          },
          "-=600"
        ) // relative offset
        .add(
          {
            targets: "#laptop",
            translateY: 20,
            translateX: 10,
            opacity: 1,
          },
          400
        ); // absolute offset
    },
    offset: "50%",
  });
  //end of works animation

  //balloon-canvas & porfile-bg animation
  anime({
    targets: "#balloon-canvas",
    opacity: 1,
    translateY: 20,
    easing: "easeInOutQuad",
    delay: 1000,
  });

  var animation = anime({
    targets: "#balloon",
    translateX: 200,
    opacity: 0,
    easing: "easeInOutSine",
    autoplay: false,
  });

  var bganimation = anime({
    targets: "#porfile-bg",
    rotate: 90,
    easing: "easeInOutSine",
    autoplay: false,
  });

  window.onscroll = function (e) {
    animation.seek(window.pageYOffset * 3);
    bganimation.seek(window.pageYOffset * 0.5);
  };
  //end of balloon-canvas & porfile-bg animation

  //scroll to element
  $("a[href^='#']").click(function (e) {
    e.preventDefault();

    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate(
      {
        scrollTop: position,
      } /* speed */
    );
  });
  //end of scroll to element
});
