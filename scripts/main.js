moment.locale('fr');

angular.module('everyversary', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "views/home.html",
            controller: function($scope, Anniversary) {

                $scope.birthday = new  Date(546530400000);

                $scope.getDates = function() {

                    if (!($scope.birthday instanceof Date)) {
                        return;
                    }

                    $scope.birthdays = Anniversary.getAges($scope.birthday);
                };

                $scope.getDates();
            }
        });
});