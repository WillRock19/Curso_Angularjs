angular.module("alurapic").controller("FotosController", function ($scope) {
  //$scope is the scope of the application. It is beying injected in the controller, and whe can use it to make the internal variables be available to external components
  $scope.foto = {
    titulo: "torre-negra",
    url:
      "https://i.pinimg.com/originals/42/0f/ea/420fea7da36d5923f6d993abbb44b05e.jpg",
  };
});
