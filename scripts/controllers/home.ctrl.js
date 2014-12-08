angular.module('everyversary')
    .controller('Home.Ctrl', ['$scope', 'Anniversary', 'DateStore', function ($scope, Anniversary, DateStore) {

        $scope.new = {};

        //$scope.formPlaceholderAnniversary = function (date) {
        //    if (!date) return;
        //    if (!(date instanceof Date)) return;
        //
        //    $scope.new.placeholderAnniversary = Anniversary.getAnniversary(date)[0];
        //};


        $scope.addBirthday = function (name, date, label) {
            console.log(name, date, label);
            DateStore.add(name, date, label);
            $scope.refresh();
        };

        $scope.refresh = function () {
            //$scope.dates = DateStore.getDates();
            $scope.anniversaries = Anniversary.getAnniversariesFromDateStore();
        };

        $scope.refresh();
    }]
);