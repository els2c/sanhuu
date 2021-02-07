//monitor
var uiController = (function () {
  return 0;
})();

//finance
var finController = (function () {
  return 0;
})();

//pointer
var appController = (function (uiCon, finCon) {
  var addItem = function () {
    //Оруулах өгөдөлийг дэлгэцээс авна.

    //олж авсан өгөгдөлөө санхүүлуу явуулна.

    //олж авсан өгөгдөлүүдээ веб дээр тохирох хэсэгт тавина

    //төсөв тооцоолон

    //эцсийн үлдэгдэл тооцоог дэлгэцэнд гаргана
    console.log("Darlaa");
  };

  document.addEventListener("keypress", function (event) {
    if (event.key === "Enter" || event.which === 13 || event.keyCode === 13) {
      addItem();
    }
  });

  document.querySelector(".add__btn").addEventListener("click", function () {
    addItem();
  });
})(uiController, finController);
