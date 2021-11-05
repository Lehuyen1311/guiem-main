const textConfig = {
  text1: "Hế lô bae <3 ",
  text2: "Click dzô",
  text3: "Nếu e khum phiền thì làm ny t nhé",
  text4: "Không bíc thì coi như đồng ý hị!",
  text5: "Phieenf 🙅‍",
  text6: "Khum bíc nuwaxx 🥺🤭🥺",
  text7: "Đồng ý đuy đồng ý đuy đồng ý đuy",
  text8: "Send to me ._.",
  text9: "Nói khum bíc cũng tính đồng ý hê",
  text10: "Hí hí",
  text11:
    "Đồng ý đi xn lần",
  text12: "dạ iêm đùm ý hohoho",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(300).fadeOut("slow");
    $("body").delay(300).css({
      overflow: "visible",
    });
  }, 500);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/emieu.jpg",
      imageWidth: 400,
      imageHeight: 300,
      background: '#fff url("img/emieu.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }

  // switch button position
  function switchButton() {
    var audio = new Audio("sound/camnhan.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("");
    audio.play();
    Swal.fire({
      title: textConfig.text7,
      html: true,
      width: 900,
      borderradius: "15px",
      padding: "3em",
      html: "<input type='text' class='form-control' id='txtReason'  placeholder='Đồng ý đi màaaaa :>'>",
      background: '#fff url("img/love.jpg")',
      backdrop: `
                    rgba(0,0,123,0.4)
                    url("img/emieu.jpg")
                    right top
                    no-repeat
                  `,
      
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text8,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          width: 900,
          confirmButtonText: textConfig.text12,
          background: '#fff url("img/love.jpg")',
          title: textConfig.text10,
          text: textConfig.text11,
          confirmButtonColor: "#83d0c9",
          onClose: () => {
            window.location = "https://www.facebook.com/messages/t/100012837701426";
          },
        });
      }
    });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});
