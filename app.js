//IIFI Function

//budget Controller
var budgetController = (function () {
  var Expense = function (id, description, value) {
    this.id = id;
    this.descrition = description;
    this.value = value;
  };
  var Income = function (id, description, value) {
    this.id = id;
    this.descrition = description;
    this.value = value;
  };

  var data = {
    allItems: {
      esp: [],
      inc: [],
    },
    total: {
      exp: 0,
      inc: 0,
    },
  };
})();

//ui Controller
var UIController = (function () {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn",
  };
  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value, //either inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },
    getDOMstrings: function () {
      return DOMstrings;
    },
  };
})();

//global app controller
var controller = (function (budgetCtrl, UICtrl) {
  var setupEventListeners = function () {
    var DOM = UICtrl.getDOMstrings();

    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  var ctrlAddItem = function () {
    //console.log("BTN CLICKED");
    //1. get the field input data
    var input = UICtrl.getInput();
    // console.log(input);

    //2. add to the budget controller

    //3. add the item to UI

    //4. calculate the budget

    //5. display the budget to UI
  };
  return {
    init: function () {
      console.log("starting");
      setupEventListeners();
    },
  };
})(budgetController, UIController);

controller.init();
