/// <reference types="../@types/jquery" />

/**** Aside  ***/
$(".open-icon").on("click", function () {
  $(".open").css("left", "0");
});

$(".close").on("click", function () {
  $(".open").css("left", "-270px");
});
/**** Aside  ***/

/**** Duration  ***/
$(".acc h3").on("click", function () {
  $(this).next().animate({ padding: "toggle", height: "toggle" }, 1000);
  $(".acc p").not($(this).next()).slideUp();
});
/**** Duration  ***/

/**** Details  ****/

let countDownDate = new Date("Dec 31 , 2024 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();

  let dateDiffrence = countDownDate - dateNow;

  let days = Math.floor(dateDiffrence / (1000 * 60 * 60 * 24));
  $(".days").html(`${days < 10 ? `0${days}` : days} days`);

  let hours = Math.floor(
    (dateDiffrence % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  $(".hours").html(`${hours < 10 ? `0${hours}` : hours} hours`);

  let minutes = Math.floor((dateDiffrence % (1000 * 60 * 60)) / (1000 * 60));
  $(".minutes").html(`${minutes < 10 ? `0${minutes}` : minutes} minutes`);

  let seconds = Math.floor((dateDiffrence % (1000 * 60)) / 1000);
  $(".seconds").html(`${seconds < 10 ? `0${seconds}` : seconds} seconds`);

  if (dateDiffrence <= 0) {
    clearInterval(counter);
  }
}, 1000);

/**** Details  ****/

/**** Contact  ****/

$("textarea").on("keyup", function () {
  let myLength = $(this).val().length;
  $(".num").text(
    100 - myLength <= 0 ? "Your Avilable Character Finished" : 100 - myLength
  );
});

/**** Contact  ****/
