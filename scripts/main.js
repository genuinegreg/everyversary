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
            })
            .state('home.add', {
                url: 'add',
                templateUrl: 'views/home.add.html',
                //controller: 'Home.Add.Ctrl'
            })

            .state('home.edit', {
                url: 'edit',
                templateUrl: 'views/home.add.html',
                //controller: 'Home.Add.Ctrl'
            })

    });