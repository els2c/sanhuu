//monitor
var uiController = (function () {
  var DOMstrings = {
    type: ".add__type",
    description: ".add__description",
    value: ".add__value",
    addBtn: ".add__btn",
  };
  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.type).value,
        description: document.querySelector(DOMstrings.description).value,
        value: document.querySelector(DOMstrings.value).value,
      };
    },
    getDOMstrings: function () {
      return DOMstrings;
    },
  };
})();

//finance
var finController = (function () {
  var inc = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  var exp = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  var data = {
    finance: {
      inc: [],
      exp: [],
    },
    totalFinance: {
      inc: 0,
      exp: 0,
    },
  };
  return 0;
})();

//pointer
var appController = (function (uiCon, finCon) {
  var addItem = function () {
    //Оруулах өгөдөлийг дэлгэцээс авна.
    uiController.getInput();
    //олж авсан өгөгдөлөө санхүүлуу явуулна.
    //олж авсан өгөгдөлүүдээ веб дээр тохирох хэсэгт тавина

    //төсөв тооцоолон

    //эцсийн үлдэгдэл тооцоог дэлгэцэнд гаргана
    console.log(uiController.getInput());
  };

  var setupEvent = function () {
    var DOM = uiController.getDOMstrings();
    document.addEventListener("keypress", function (event) {
      if (event.key === "Enter" || event.which === 13) {
        addItem();
      }
    });

    document.querySelector(DOM.addBtn).addEventListener("click", function () {
      addItem();
    });
  };

  return {
    init: function () {
      console.log("Programm started...");
      setupEvent();
    },
  };
})(uiController, finController);

appController.init();
