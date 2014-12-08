moment.locale('fr');

angular.module('everyversary', ['ui.router', 'LocalStorageModule'])
    // router config
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");
        //
        // Now set up the states
        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "views/home.html",
                controller: 'Home.Ctrl'
            });
    });