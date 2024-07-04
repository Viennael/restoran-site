var hoverTimeout;
$(".b1").addClass("denemegeri");
$(".b2").addClass("deneme2geri");
$(".b3").addClass("deneme3geri");
$(".b4").addClass("deneme4geri");
$(".b5").addClass("deneme5geri");
$(".b6").addClass("deneme6geri");
$(".b7").addClass("deneme7geri");
$(".b8").addClass("deneme8geri");

//----------------------------------PİZZA MENU KODLARI---------------------------------------

$(".b1kapsa").mouseenter(function () {
  var $this = $(this);
  clearTimeout(hoverTimeout);

  //------------DİĞER MENÜ KODLARI---------------------

  $(".pizzah32").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b2kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b2kapsa").removeClass("deneme2kapsa");
    $(".b2").removeClass("deneme2");
    $(".b2").addClass("deneme2geri");
  }, 100);

  $(".pizzah33").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b3kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b3kapsa").removeClass("deneme3kapsa");
    $(".b3").removeClass("deneme3");
    $(".b3").addClass("deneme3geri");
  }, 100);

  $(".pizzah34").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b4kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b4kapsa").removeClass("deneme4kapsa");
    $(".b4").removeClass("deneme4");
    $(".b4").addClass("deneme4geri");
  }, 100);

  $(".pizzah35").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b5kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b5kapsa").removeClass("deneme5kapsa");
    $(".b5").removeClass("deneme5");
    $(".b5").addClass("deneme5geri");
  }, 100);

  $(".pizzah36").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b6kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b6kapsa").removeClass("deneme6kapsa");
    $(".b6").removeClass("deneme6");
    $(".b6").addClass("deneme6geri");
  }, 100);

  $(".pizzah37").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b7kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b7kapsa").removeClass("deneme7kapsa");
    $(".b7").removeClass("deneme7");
    $(".b7").addClass("deneme7geri");
  }, 100);

  $(".pizzah38").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b8kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b8kapsa").removeClass("deneme8kapsa");
    $(".b8").removeClass("deneme8");
    $(".b8").addClass("deneme8geri");
  }, 100);

  //------------DİĞER MENÜ KODLARI BİTİŞİ--------------

  hoverTimeout = setTimeout(function () {
    $this.css({ transform: "scale(1.3, 2)" }); // Ölçeği 1.6, 1.8 kat artır
    $this.addClass("denemekapsa");
    $(".b1").addClass("deneme");
    $(".b1").removeClass("denemegeri");
    if ($(".pizzah31").css("color") == "rgb(0, 0, 0)") {
      $(".pizzah31").css({
        background: "rgb(91, 0, 195)",
        color: "white",
        borderBottom: "0.4vw solid rgb(255, 255, 255)",
        borderTop: "0.4vw solid rgb(255, 227, 227)",
      });
    }

    $(".videopizza").css({
      display: "block",
      width: "23.252604166666668vw",
      opacity: "100%",
      top: "-5vw",
      left: "23vw",
    });

    $(".despizza").css({
      top: "7vw",
      opacity: "100%",
      height: "14.6vw",
      width: "16vw",
    });
  }, 100);
});

$(".b1kapsa").mouseleave(function () {
  var $this = $(this);
  $(".pizzah31").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  clearTimeout(hoverTimeout);
  hoverTimeout = setTimeout(function () {
    $this.css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $this.removeClass("denemekapsa");
    $(".b1").removeClass("deneme");
    $(".b1").addClass("denemegeri");
  }, 100);
  $(".videopizza").css({
    display: "none",
    width: "3.252604166666668vw",
    left: "48vw",
    top: "-4vw",
  });
  $(".despizza").css({
    top: "5vw",
    opacity: "0%",
    height: "0vw",
    width: "0vw",
  });
});

//------------------------------------TAVUK MENU KODLARI------------------------------------

$(".b2kapsa").mouseenter(function () {
  var $this = $(this);
  clearTimeout(hoverTimeout);

  //------------DİĞER MENÜ KODLARI---------------------

  $(".pizzah31").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b1kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b1kapsa").removeClass("denemekapsa");
    $(".b1").removeClass("deneme");
    $(".b1").addClass("denemegeri");
  }, 100);

  $(".pizzah33").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b3kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b3kapsa").removeClass("deneme3kapsa");
    $(".b3").removeClass("deneme3");
    $(".b3").addClass("deneme3geri");
  }, 100);

  $(".pizzah34").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b4kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b4kapsa").removeClass("deneme4kapsa");
    $(".b4").removeClass("deneme4");
    $(".b4").addClass("deneme4geri");
  }, 100);

  $(".pizzah35").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b5kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b5kapsa").removeClass("deneme5kapsa");
    $(".b5").removeClass("deneme5");
    $(".b5").addClass("deneme5geri");
  }, 100);

  $(".pizzah36").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b6kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b6kapsa").removeClass("deneme6kapsa");
    $(".b6").removeClass("deneme6");
    $(".b6").addClass("deneme6geri");
  }, 100);

  $(".pizzah37").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b7kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b7kapsa").removeClass("deneme7kapsa");
    $(".b7").removeClass("deneme7");
    $(".b7").addClass("deneme7geri");
  }, 100);

  $(".pizzah38").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b8kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b8kapsa").removeClass("deneme8kapsa");
    $(".b8").removeClass("deneme8");
    $(".b8").addClass("deneme8geri");
  }, 100);

  //------------DİĞER MENÜ KODLARI BİTİŞİ--------------

  hoverTimeout = setTimeout(function () {
    $this.css({ transform: "scale(1.6, 1.6)" }); // Ölçeği 1.6, 1.8 kat artır
    $this.addClass("deneme2kapsa");
    $(".b2").addClass("deneme2");
    $(".b2").removeClass("deneme2geri");
    if ($(".pizzah32").css("color") == "rgb(0, 0, 0)") {
      $(".pizzah32").css({
        background: "rgb(255, 162, 0)",
        color: "white",
        borderBottom: "0.4vw solid rgb(255, 255, 255)",
        borderTop: "0.4vw solid rgb(255, 255, 255)",
      });
    }

    $(".videotavuk").css({
      display: "block",
      width: "15.6015625vw",
      opacity: "100%",
      top: "-11vw",
      left: "30vw",
    });

    $(".destavuk").css({
      top: "7vw",
      opacity: "100%",
      height: "7vw",
      width: "16vw",
      left: "28vw",
    });
  }, 100);
});

$(".b2kapsa").mouseleave(function () {
  var $this = $(this);
  $(".pizzah32").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  clearTimeout(hoverTimeout);
  hoverTimeout = setTimeout(function () {
    $this.css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b2kapsa").removeClass("deneme2kapsa");
    $(".b2").removeClass("deneme2");
    $(".b2").addClass("deneme2geri");
  }, 100);
  $(".videotavuk").css({
    display: "none",
    width: "3.252604166666668vw",
    left: "48vw",
    top: "-4vw",
  });
  $(".destavuk").css({
    top: "5vw",
    opacity: "0%",
    height: "0vw",
    width: "0vw",
  });
});

//-------------------------------------ET MENU KODLARI-------------------------------------------
$(".b3kapsa").mouseenter(function () {
  var $this = $(this);
  clearTimeout(hoverTimeout);

  //------------DİĞER MENÜ KODLARI---------------------

  $(".pizzah31").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b1kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b1kapsa").removeClass("denemekapsa");
    $(".b1").removeClass("deneme");
    $(".b1").addClass("denemegeri");
  }, 100);

  $(".pizzah32").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b2kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b2kapsa").removeClass("deneme2kapsa");
    $(".b2").removeClass("deneme2");
    $(".b2").addClass("deneme2geri");
  }, 100);

  $(".pizzah34").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b4kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b4kapsa").removeClass("deneme4kapsa");
    $(".b4").removeClass("deneme4");
    $(".b4").addClass("deneme4geri");
  }, 100);

  $(".pizzah35").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b5kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b5kapsa").removeClass("deneme5kapsa");
    $(".b5").removeClass("deneme5");
    $(".b5").addClass("deneme5geri");
  }, 100);

  $(".pizzah36").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b6kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b6kapsa").removeClass("deneme6kapsa");
    $(".b6").removeClass("deneme6");
    $(".b6").addClass("deneme6geri");
  }, 100);

  $(".pizzah37").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b7kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b7kapsa").removeClass("deneme7kapsa");
    $(".b7").removeClass("deneme7");
    $(".b7").addClass("deneme7geri");
  }, 100);

  $(".pizzah38").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b8kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b8kapsa").removeClass("deneme8kapsa");
    $(".b8").removeClass("deneme8");
    $(".b8").addClass("deneme8geri");
  }, 100);

  //------------DİĞER MENÜ KODLARI BİTİŞİ--------------

  hoverTimeout = setTimeout(function () {
    $this.css({ transform: "scale(1.5, 1.5)" }); // Ölçeği 1.6, 1.8 kat artır
    $this.addClass("deneme3kapsa");
    $(".b3").addClass("deneme3");
    $(".b3").removeClass("deneme3geri");
    if ($(".pizzah33").css("color") == "rgb(0, 0, 0)") {
      $(".pizzah33").css({
        background: "rgb(255, 0, 0)",
        color: "white",
        borderBottom: "0.4vw solid rgb(255, 255, 255)",
        borderTop: "0.4vw solid rgb(255, 255, 255)",
      });
    }

    $(".etvideo").css({
      display: "block",
      width: "15.6015625vw",
      opacity: "100%",
      top: "-11vw",
      left: "30vw",
    });

    $(".deset").css({
      top: "2vw",
      opacity: "100%",
      height: "10.5vw",
      width: "16vw",
      left: "28vw",
    });
  }, 100);
});

$(".b3kapsa").mouseleave(function () {
  var $this = $(this);
  $(".pizzah33").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  clearTimeout(hoverTimeout);
  hoverTimeout = setTimeout(function () {
    $this.css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b3kapsa").removeClass("deneme3kapsa");
    $(".b3").removeClass("deneme3");
    $(".b3").addClass("deneme3geri");
  }, 100);
  $(".etvideo").css({
    display: "none",
  });
  $(".deset").css({
    opacity: "0%",
    height: "0vw",
    width: "0vw",
  });
});

//----------------------------------------BALIK MENU KODLARI-------------------------------------
//
$(".b4kapsa").mouseenter(function () {
  var $this = $(this);
  clearTimeout(hoverTimeout);

  //------------DİĞER MENÜ KODLARI---------------------

  $(".pizzah31").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b1kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b1kapsa").removeClass("denemekapsa");
    $(".b1").removeClass("deneme");
    $(".b1").addClass("denemegeri");
  }, 100);

  $(".pizzah32").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b2kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b2kapsa").removeClass("deneme2kapsa");
    $(".b2").removeClass("deneme2");
    $(".b2").addClass("deneme2geri");
  }, 100);

  $(".pizzah33").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b3kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b3kapsa").removeClass("deneme3kapsa");
    $(".b3").removeClass("deneme3");
    $(".b3").addClass("deneme3geri");
  }, 100);

  $(".pizzah35").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b5kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b5kapsa").removeClass("deneme5kapsa");
    $(".b5").removeClass("deneme5");
    $(".b5").addClass("deneme5geri");
  }, 100);

  $(".pizzah36").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b6kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b6kapsa").removeClass("deneme6kapsa");
    $(".b6").removeClass("deneme6");
    $(".b6").addClass("deneme6geri");
  }, 100);

  $(".pizzah37").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b7kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b7kapsa").removeClass("deneme7kapsa");
    $(".b7").removeClass("deneme7");
    $(".b7").addClass("deneme7geri");
  }, 100);

  $(".pizzah38").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b8kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b8kapsa").removeClass("deneme8kapsa");
    $(".b8").removeClass("deneme8");
    $(".b8").addClass("deneme8geri");
  }, 100);

  //------------DİĞER MENÜ KODLARI BİTİŞİ--------------

  hoverTimeout = setTimeout(function () {
    $this.css({ transform: "scale(1.3, 1.5)" }); // Ölçeği 1.6, 1.8 kat artır
    $this.addClass("deneme4kapsa");
    $(".b4").addClass("deneme4");
    $(".b4").removeClass("deneme4geri");
    if ($(".pizzah34").css("color") == "rgb(0, 0, 0)") {
      $(".pizzah34").css({
        background: "rgb(0, 179, 195)",
        color: "white",
        borderBottom: "0.4vw solid rgb(255, 255, 255)",
        borderTop: "0.4vw solid rgb(255, 255, 255)",
      });
    }

    $(".balikvideo").css({
      display: "block",
      width: "15.6015625vw",
      opacity: "100%",
      top: "7vw",
      left: "24vw",
    });

    $(".desbalik").css({
      top: "-7vw",
      opacity: "100%",
      height: "10.5vw",
      width: "16vw",
      left: "28vw",
    });
  }, 100);
});

$(".b4kapsa").mouseleave(function () {
  var $this = $(this);
  $(".pizzah34").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  clearTimeout(hoverTimeout);
  hoverTimeout = setTimeout(function () {
    $this.css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b4kapsa").removeClass("deneme4kapsa");
    $(".b4").removeClass("deneme4");
    $(".b4").addClass("deneme4geri");
  }, 100);
  $(".balikvideo").css({
    display: "none",
  });
  $(".desbalik").css({
    opacity: "0%",
    height: "0vw",
    width: "0vw",
  });
});
//
//-------------------------------------VEGAN MENU KODLARI--------------------------
//
$(".b5kapsa").mouseenter(function () {
  var $this = $(this);
  clearTimeout(hoverTimeout);

  //------------DİĞER MENÜ KODLARI---------------------

  $(".pizzah31").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b1kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b1kapsa").removeClass("denemekapsa");
    $(".b1").removeClass("deneme");
    $(".b1").addClass("denemegeri");
  }, 100);

  $(".pizzah32").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b2kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b2kapsa").removeClass("deneme2kapsa");
    $(".b2").removeClass("deneme2");
    $(".b2").addClass("deneme2geri");
  }, 100);

  $(".pizzah33").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b3kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b3kapsa").removeClass("deneme3kapsa");
    $(".b3").removeClass("deneme3");
    $(".b3").addClass("deneme3geri");
  }, 100);

  $(".pizzah34").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b4kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b4kapsa").removeClass("deneme4kapsa");
    $(".b4").removeClass("deneme4");
    $(".b4").addClass("deneme4geri");
  }, 100);

  $(".pizzah36").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b6kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b6kapsa").removeClass("deneme6kapsa");
    $(".b6").removeClass("deneme6");
    $(".b6").addClass("deneme6geri");
  }, 100);

  $(".pizzah37").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b7kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b7kapsa").removeClass("deneme7kapsa");
    $(".b7").removeClass("deneme7");
    $(".b7").addClass("deneme7geri");
  }, 100);

  $(".pizzah38").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b8kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b8kapsa").removeClass("deneme8kapsa");
    $(".b8").removeClass("deneme8");
    $(".b8").addClass("deneme8geri");
  }, 100);

  //------------DİĞER MENÜ KODLARI BİTİŞİ--------------

  hoverTimeout = setTimeout(function () {
    $this.css({ transform: "scale(1.2, 1.4)" }); // Ölçeği 1.6, 1.8 kat artır
    $this.addClass("deneme5kapsa");
    $(".b5").addClass("deneme5");
    $(".b5").removeClass("deneme5geri");
    if ($(".pizzah35").css("color") == "rgb(0, 0, 0)") {
      $(".pizzah35").css({
        background: "rgb(14, 169, 0)",
        color: "white",
        borderBottom: "0.4vw solid rgb(255, 255, 255)",
        borderTop: "0.4vw solid rgb(255, 255, 255)",
      });
    }

    $(".veganvideo").css({
      display: "block",
      width: "15.6015625vw",
      opacity: "100%",
      top: "-18vw",
      left: "-37vw",
    });

    $(".desvegan").css({
      top: "-23vw",
      opacity: "100%",
      height: "10.5vw",
      width: "16vw",
      left: "-33vw",
    });
  }, 100);
});

$(".b5kapsa").mouseleave(function () {
  var $this = $(this);
  $(".pizzah35").css({
    background: "white",
    color: "black",
    border: "none",
  });
  clearTimeout(hoverTimeout);
  hoverTimeout = setTimeout(function () {
    $this.css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b5kapsa").removeClass("deneme5kapsa");
    $(".b5").removeClass("deneme5");
    $(".b5").addClass("deneme5geri");
  }, 100);
  $(".veganvideo").css({
    display: "none",
  });
  $(".desvegan").css({
    opacity: "0%",
    height: "0vw",
    width: "0vw",
  });
});

//-----------------------------------------SPESİAL MENÜ KODLARI--------------------------
//
$(".b6kapsa").mouseenter(function () {
  var $this = $(this);
  clearTimeout(hoverTimeout);

  //------------DİĞER MENÜ KODLARI---------------------

  $(".pizzah31").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b1kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b1kapsa").removeClass("denemekapsa");
    $(".b1").removeClass("deneme");
    $(".b1").addClass("denemegeri");
  }, 100);

  $(".pizzah32").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b2kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b2kapsa").removeClass("deneme2kapsa");
    $(".b2").removeClass("deneme2");
    $(".b2").addClass("deneme2geri");
  }, 100);

  $(".pizzah33").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b3kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b3kapsa").removeClass("deneme3kapsa");
    $(".b3").removeClass("deneme3");
    $(".b3").addClass("deneme3geri");
  }, 100);

  $(".pizzah34").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b4kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b4kapsa").removeClass("deneme4kapsa");
    $(".b4").removeClass("deneme4");
    $(".b4").addClass("deneme4geri");
  }, 100);

  $(".pizzah35").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b5kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b5kapsa").removeClass("deneme5kapsa");
    $(".b5").removeClass("deneme5");
    $(".b5").addClass("deneme5geri");
  }, 100);

  $(".pizzah37").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b7kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b7kapsa").removeClass("deneme7kapsa");
    $(".b7").removeClass("deneme7");
    $(".b7").addClass("deneme7geri");
  }, 100);

  $(".pizzah38").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b8kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b8kapsa").removeClass("deneme8kapsa");
    $(".b8").removeClass("deneme8");
    $(".b8").addClass("deneme8geri");
  }, 100);

  //------------DİĞER MENÜ KODLARI BİTİŞİ--------------

  hoverTimeout = setTimeout(function () {
    $this.css({ transform: "scale(1.3, 1.4)" }); // Ölçeği 1.6, 1.8 kat artır
    $this.addClass("deneme6kapsa");
    $(".b6").addClass("deneme6");
    $(".b6").removeClass("deneme6geri");
    if ($(".pizzah36").css("color") == "rgb(0, 0, 0)") {
      $(".pizzah36").css({
        background: "rgb(0, 0, 0)",
        color: "white",
        borderBottom: "0.4vw solid rgb(255, 255, 255)",
        borderTop: "0.4vw solid rgb(255, 255, 255)",
      });
    }

    $(".spesialvideo").css({
      display: "block",
      width: "18.436197916666666vw",
      opacity: "100%",
      top: "-8vw",
      left: "-30vw",
    });

    $(".desspesial").css({
      top: "-23vw",
      opacity: "100%",
      height: "10.6vw",
      width: "16vw",
      left: "-28vw",
    });
  }, 100);
});

$(".b6kapsa").mouseleave(function () {
  var $this = $(this);
  $(".pizzah36").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  clearTimeout(hoverTimeout);
  hoverTimeout = setTimeout(function () {
    $this.css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b6kapsa").removeClass("deneme6kapsa");
    $(".b6").removeClass("deneme6");
    $(".b6").addClass("deneme6geri");
  }, 100);
  $(".spesialvideo").css({
    display: "none",
  });
  $(".desspesial").css({
    opacity: "0%",
    height: "0vw",
    width: "0vw",
  });
});
//
//----------------------------------------TATLILAR MENU KODLARI-----------------------------------
$(".b7kapsa").mouseenter(function () {
  var $this = $(this);
  clearTimeout(hoverTimeout);

  //------------DİĞER MENÜ KODLARI---------------------

  $(".pizzah31").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b1kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b1kapsa").removeClass("denemekapsa");
    $(".b1").removeClass("deneme");
    $(".b1").addClass("denemegeri");
  }, 100);

  $(".pizzah32").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b2kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b2kapsa").removeClass("deneme2kapsa");
    $(".b2").removeClass("deneme2");
    $(".b2").addClass("deneme2geri");
  }, 100);

  $(".pizzah33").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b3kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b3kapsa").removeClass("deneme3kapsa");
    $(".b3").removeClass("deneme3");
    $(".b3").addClass("deneme3geri");
  }, 100);

  $(".pizzah34").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b4kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b4kapsa").removeClass("deneme4kapsa");
    $(".b4").removeClass("deneme4");
    $(".b4").addClass("deneme4geri");
  }, 100);

  $(".pizzah35").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b5kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b5kapsa").removeClass("deneme5kapsa");
    $(".b5").removeClass("deneme5");
    $(".b5").addClass("deneme5geri");
  }, 100);

  $(".pizzah36").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b6kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b6kapsa").removeClass("deneme6kapsa");
    $(".b6").removeClass("deneme6");
    $(".b6").addClass("deneme6geri");
  }, 100);

  $(".pizzah38").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b8kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b8kapsa").removeClass("deneme8kapsa");
    $(".b8").removeClass("deneme8");
    $(".b8").addClass("deneme8geri");
  }, 100);

  //------------DİĞER MENÜ KODLARI BİTİŞİ--------------

  hoverTimeout = setTimeout(function () {
    $this.css({ transform: "scale(1.5, 1.7)" }); // Ölçeği 1.6, 1.8 kat artır
    $this.addClass("deneme7kapsa");
    $(".b7").addClass("deneme7");
    $(".b7").removeClass("deneme7geri");
    if ($(".pizzah37").css("color") == "rgb(0, 0, 0)") {
      $(".pizzah37").css({
        background: "rgb(195, 0, 114)",
        color: "white",
        borderBottom: "0.4vw solid rgb(255, 255, 255)",
        borderTop: "0.4vw solid rgb(255, 255, 255)",
      });
    }

    $(".tatlivideo").css({
      display: "block",
      width: "25.436197916666666vw",
      opacity: "100%",
      top: "-12vw",
      left: "-30vw",
    });

    $(".destatli").css({
      top: "5vw",
      opacity: "100%",
      height: "10.6vw",
      width: "16vw",
      left: "-30vw",
    });
  }, 100);
});

$(".b7kapsa").mouseleave(function () {
  var $this = $(this);
  $(".pizzah37").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  clearTimeout(hoverTimeout);
  hoverTimeout = setTimeout(function () {
    $this.css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b7kapsa").removeClass("deneme7kapsa");
    $(".b7").removeClass("deneme7");
    $(".b7").addClass("deneme7geri");
  }, 100);
  $(".tatlivideo").css({
    display: "none",
  });
  $(".destatli").css({
    opacity: "0%",
    height: "0vw",
    width: "0vw",
  });
});
//
//-------------------------------------İÇECEK MENU KODLARI--------------------------
$(".b8kapsa").mouseenter(function () {
  var $this = $(this);
  clearTimeout(hoverTimeout);

  //------------DİĞER MENÜ KODLARI---------------------

  $(".pizzah31").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b1kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b1kapsa").removeClass("denemekapsa");
    $(".b1").removeClass("deneme");
    $(".b1").addClass("denemegeri");
  }, 100);

  $(".pizzah32").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b2kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b2kapsa").removeClass("deneme2kapsa");
    $(".b2").removeClass("deneme2");
    $(".b2").addClass("deneme2geri");
  }, 100);

  $(".pizzah33").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b3kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b3kapsa").removeClass("deneme3kapsa");
    $(".b3").removeClass("deneme3");
    $(".b3").addClass("deneme3geri");
  }, 100);

  $(".pizzah34").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b4kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b4kapsa").removeClass("deneme4kapsa");
    $(".b4").removeClass("deneme4");
    $(".b4").addClass("deneme4geri");
  }, 100);

  $(".pizzah35").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b5kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b5kapsa").removeClass("deneme5kapsa");
    $(".b5").removeClass("deneme5");
    $(".b5").addClass("deneme5geri");
  }, 100);

  $(".pizzah36").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b6kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b6kapsa").removeClass("deneme6kapsa");
    $(".b6").removeClass("deneme6");
    $(".b6").addClass("deneme6geri");
  }, 100);

  $(".pizzah37").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  hoverTimeout = setTimeout(function () {
    $(".b7kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b7kapsa").removeClass("deneme7kapsa");
    $(".b7").removeClass("deneme7");
    $(".b7").addClass("deneme7geri");
  }, 100);

  //------------DİĞER MENÜ KODLARI BİTİŞİ--------------

  hoverTimeout = setTimeout(function () {
    $this.css({ transform: "scale(1.5, 1.6)" }); // Ölçeği 1.6, 1.8 kat artır
    $this.addClass("deneme8kapsa");
    $(".b8").addClass("deneme8");
    $(".b8").removeClass("deneme8geri");
    if ($(".pizzah38").css("color") == "rgb(0, 0, 0)") {
      $(".pizzah38").css({
        background: "rgb(0, 68, 195)",
        color: "white",
        borderBottom: "0.4vw solid rgb(255, 255, 255)",
        borderTop: "0.4vw solid rgb(255, 255, 255)",
      });
    }

    $(".icecekvideo").css({
      display: "block",
      width: "25.436197916666666vw",
      opacity: "100%",
      top: "-7vw",
      left: "-37vw",
    });

    $(".desicecek").css({
      top: "9vw",
      opacity: "100%",
      height: "14.6vw",
      width: "11vw",
      left: "-36vw",
    });
  }, 100);
});

$(".b8kapsa").mouseleave(function () {
  var $this = $(this);
  $(".pizzah38").css({
    background: "white",
    color: "black",
    borderBottom: "none",
    borderTop: "none",
  });
  clearTimeout(hoverTimeout);
  hoverTimeout = setTimeout(function () {
    $this.css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b8kapsa").removeClass("deneme8kapsa");
    $(".b8").removeClass("deneme8");
    $(".b8").addClass("deneme8geri");
  }, 100);
  $(".icecekvideo").css({
    display: "none",
  });
  $(".desicecek").css({
    opacity: "0%",
    height: "0vw",
    width: "0vw",
  });
});

//------------------------------------------FİXER KODLARI---------------------------------
$(".fixer2").mouseenter(function () {
  clearTimeout(hoverTimeout);

  hoverTimeout = setTimeout(function () {
    $(".b1kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b1kapsa").removeClass("denemekapsa");
    $(".b1").removeClass("deneme");
    $(".b1").addClass("denemegeri");
    $(".pizzah31").css({
      background: "white",
      color: "black",
      borderBottom: "none",
      borderTop: "none",
    });
    $(".videopizza").css({
      display: "none",
    });
    $(".despizza").css({
      opacity: "0%",
      height: "0vw",
      width: "0vw",
    });

    //-------TAVUK----------------------

    $(".b2kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b2kapsa").removeClass("deneme2kapsa");
    $(".b2").removeClass("deneme2");
    $(".b2").addClass("deneme2geri");
    $(".pizzah32").css({
      background: "white",
      color: "black",
      borderBottom: "none",
      borderTop: "none",
    });
    $(".videotavuk").css({
      display: "none",
    });
    $(".destavuk").css({
      opacity: "0%",
      height: "0vw",
      width: "0vw",
    });

    //-----------ET MENÜSÜ--------------

    $(".b3kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b3kapsa").removeClass("deneme3kapsa");
    $(".b3").removeClass("deneme3");
    $(".b3").addClass("deneme3geri");
    $(".pizzah33").css({
      background: "white",
      color: "black",
      borderBottom: "none",
      borderTop: "none",
    });
    $(".etvideo").css({
      display: "none",
    });
    $(".deset").css({
      opacity: "0%",
      height: "0vw",
      width: "0vw",
    });

    //------------BALIK MENÜSÜ---------

    $(".b4kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b4kapsa").removeClass("deneme4kapsa");
    $(".b4").removeClass("deneme4");
    $(".b4").addClass("deneme4geri");
    $(".pizzah34").css({
      background: "white",
      color: "black",
      borderBottom: "none",
      borderTop: "none",
    });
    $(".balikvideo").css({
      display: "none",
    });
    $(".desbalik").css({
      opacity: "0%",
      height: "0vw",
      width: "0vw",
    });

    //----------VEGAN MENÜSÜ--------------

    $(".b5kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b5kapsa").removeClass("deneme5kapsa");
    $(".b5").removeClass("deneme5");
    $(".b5").addClass("deneme5geri");
    $(".pizzah35").css({
      background: "white",
      color: "black",
      border: "none",
    });
    $(".veganvideo").css({
      display: "none",
    });
    $(".desvegan").css({
      opacity: "0%",
      height: "0vw",
      width: "0vw",
    });

    //------SPESİYAL MENÜSÜ-------

    $(".b6kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b6kapsa").removeClass("deneme6kapsa");
    $(".b6").removeClass("deneme6");
    $(".b6").addClass("deneme6geri");
    $(".pizzah36").css({
      background: "white",
      color: "black",
      borderBottom: "none",
      borderTop: "none",
    });
    $(".spesialvideo").css({
      display: "none",
    });
    $(".desspesial").css({
      opacity: "0%",
      height: "0vw",
      width: "0vw",
    });

    //--------TATLI MENÜSÜ-----------

    $(".b7kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b7kapsa").removeClass("deneme7kapsa");
    $(".b7").removeClass("deneme7");
    $(".b7").addClass("deneme7geri");
    $(".pizzah37").css({
      background: "white",
      color: "black",
      borderBottom: "none",
      borderTop: "none",
    });
    $(".tatlivideo").css({
      display: "none",
    });
    $(".destatli").css({
      opacity: "0%",
      height: "0vw",
      width: "0vw",
    });

    //-----------İÇECEK MENÜSÜ---------

    $(".b8kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
    $(".b8kapsa").removeClass("deneme8kapsa");
    $(".b8").removeClass("deneme8");
    $(".b8").addClass("deneme8geri");
    $(".pizzah38").css({
      background: "white",
      color: "black",
      borderBottom: "none",
      borderTop: "none",
    });
    $(".icecekvideo").css({
      display: "none",
    });
    $(".desicecek").css({
      opacity: "0%",
      height: "0vw",
      width: "0vw",
    });
  }, 100);
});

//------------------------------------------ARKAPLAN KODLARI----------------------------
$(".tahta").mouseenter(function () {
  if ($(".b1").hasClass(".denemegeri")) {
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(function () {
      $(".b1kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
      $(".b1kapsa").removeClass("denemekapsa");
      $(".b1").removeClass("deneme");
      $(".b1").addClass("denemegeri");
      $(".pizzah31").css({
        background: "white",
        color: "black",
        borderBottom: "none",
        borderTop: "none",
      });
      $(".videopizza").css({
        display: "none",
        width: "3.252604166666668vw",
        left: "48vw",
        top: "-4vw",
      });
      $(".despizza").css({
        top: "5vw",
        opacity: "0%",
        height: "0vw",
        width: "0vw",
      });

      //----------TAVUK------------------------

      $(".b2kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
      $(".b2kapsa").removeClass("deneme2kapsa");
      $(".b2").removeClass("deneme2");
      $(".b2").addClass("deneme2geri");
      $(".pizzah32").css({
        background: "white",
        color: "black",
        borderBottom: "none",
        borderTop: "none",
      });
      $(".videotavuk").css({
        display: "none",
        width: "3.252604166666668vw",
        left: "48vw",
        top: "-4vw",
      });
      $(".destavuk").css({
        top: "5vw",
        opacity: "0%",
        height: "0vw",
        width: "0vw",
      });

      //-----------ET MENÜSÜ--------------

      $(".b3kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
      $(".b3kapsa").removeClass("deneme3kapsa");
      $(".b3").removeClass("deneme3");
      $(".b3").addClass("deneme3geri");
      $(".pizzah33").css({
        background: "white",
        color: "black",
        borderBottom: "none",
        borderTop: "none",
      });
      $(".etvideo").css({
        display: "none",
      });
      $(".deset").css({
        opacity: "0%",
        height: "0vw",
        width: "0vw",
      });

      //------------BALIK MENÜSÜ---------

      $(".b4kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
      $(".b4kapsa").removeClass("deneme4kapsa");
      $(".b4").removeClass("deneme4");
      $(".b4").addClass("deneme4geri");
      $(".pizzah34").css({
        background: "white",
        color: "black",
        borderBottom: "none",
        borderTop: "none",
      });
      $(".balikvideo").css({
        display: "none",
      });
      $(".desbalik").css({
        opacity: "0%",
        height: "0vw",
        width: "0vw",
      });

      //----------VEGAN MENÜSÜ--------------

      $(".b5kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
      $(".b5kapsa").removeClass("deneme5kapsa");
      $(".b5").removeClass("deneme5");
      $(".b5").addClass("deneme5geri");
      $(".pizzah35").css({
        background: "white",
        color: "black",
        border: "none",
      });
      $(".veganvideo").css({
        display: "none",
      });
      $(".desvegan").css({
        opacity: "0%",
        height: "0vw",
        width: "0vw",
      });

      //------SPESİYAL MENÜSÜ-------

      $(".b6kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
      $(".b6kapsa").removeClass("deneme6kapsa");
      $(".b6").removeClass("deneme6");
      $(".b6").addClass("deneme6geri");
      $(".pizzah36").css({
        background: "white",
        color: "black",
        borderBottom: "none",
        borderTop: "none",
      });
      $(".spesialvideo").css({
        display: "none",
      });
      $(".desspesial").css({
        opacity: "0%",
        height: "0vw",
        width: "0vw",
      });

      //--------TATLI MENÜSÜ-----------

      $(".b7kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
      $(".b7kapsa").removeClass("deneme7kapsa");
      $(".b7").removeClass("deneme7");
      $(".b7").addClass("deneme7geri");
      $(".pizzah37").css({
        background: "white",
        color: "black",
        borderBottom: "none",
        borderTop: "none",
      });
      $(".tatlivideo").css({
        display: "none",
      });
      $(".destatli").css({
        opacity: "0%",
        height: "0vw",
        width: "0vw",
      });

      //-----------İÇECEK MENÜSÜ---------

      $(".b8kapsa").css({ transform: "scale(1)" }); // Ölçeği eski haline döndür
      $(".b8kapsa").removeClass("deneme8kapsa");
      $(".b8").removeClass("deneme8");
      $(".b8").addClass("deneme8geri");
      $(".pizzah38").css({
        background: "white",
        color: "black",
        borderBottom: "none",
        borderTop: "none",
      });
      $(".icecekvideo").css({
        display: "none",
      });
      $(".desicecek").css({
        opacity: "0%",
        height: "0vw",
        width: "0vw",
      });
    }, 100);
  }
});

//--------------------------------------------------LİNKLER----------------------------------

$(document).ready(function () {
  $(".b1kapsa").click(function () {
    window.location.href = "pizza.html";
  });

  $(".b2kapsa").click(function () {
    window.location.href = "tavuk.html";
  });

  $(".b3kapsa").click(function () {
    window.location.href = "et.html";
  });

  $(".b4kapsa").click(function () {
    window.location.href = "balik.html";
  });

  $(".b5kapsa").click(function () {
    window.location.href = "vegan.html";
  });

  $(".b6kapsa").click(function () {
    window.location.href = "special.html";
  });

  $(".b7kapsa").click(function () {
    window.location.href = "tatli.html";
  });

  $(".b8kapsa").click(function () {
    window.location.href = "icecek.html";
  });
});
//-----------------------------------------------LİNKLER BİTİŞ---------------------------
