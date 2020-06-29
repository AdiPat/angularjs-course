(function () {
  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];

  function LunchCheckController($scope) {
    $scope.foodItems = "";
    $scope.numFoodItems = 0;

    $scope.checkFoodItems = function () {
      console.log("checkFoodItems()");
      $scope.numFoodItems = 0;
      let foodItems = $scope.foodItems.split(",");
      foodItems.forEach((item) => {
        if (item !== "") {
          $scope.numFoodItems += 1;
        }
      });
    };

    $scope.getMessage = function () {
      let message = "Enjoy";
      if ($scope.numFoodItems > 3) {
        message = "Too much!";
      } else if ($scope.numFoodItems === 0) {
        message = "";
      }
      return message;
    };
  }
})();
