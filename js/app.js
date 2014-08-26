var myApp = angular.module('myApp', ["ui.router"])

    myApp.config(function($stateProvider, $urlRouterProvider){

        $stateProvider
            .state('index', {
                url: "",
                views: {
                    "viewA": {
                        template: "index.viewA"
                    },
                    "viewB": {
                        template: "index.viewB"
                    }
                }
            })

            .state('route1', {
                url: "route1",
                templateUrl: "routes/route1.html"
            })
                .state('route1.list', {
                    url: "/list",
                    templateUrl: "lists/route1.list.html",
                    controller: function($scope) {
                        $scope.things = ["A list of data specific to route1"];
                    }
                })

            .state('route2', {
                url: "/route2",
                templateUrl: "routes/route2.html"
            })
                .state('route2.list', {
                    url: "/list",
                    templateUrl: "lists/route2.list.html",
                    controller: function($scope) {
                        $scope.things = ["A list of data specific to route2"];
                    }
                })

            .state('route3', {
                url: "/route3",
                templateUrl: "routes/route3.html"
            })
                .state('route3.list', {
                    url: "/list",
                    templateUrl: "lists/route3.list.html",
                    controller: function($scope) {
                        $scope.things = ["A list of data specific to route3"];
                    }
                })

            .state('route4', {
                url: "/route4",
                templateUrl: "routes/route4.html"
            })
                .state('route4.list', {
                    url: "/lists",
                    templateUrl: "lists/route4.list.html",
                    controller: function($scope) {
                        $scope.things = ["A list of data specific to route4"];
                    }
                })

            .state('route5', {
                url: "/route5",
                templateUrl: "routes/route5.html"
            })
                .state('route5.list', {
                    url: "/list",
                    templateUrl: "lists/route5.list.html",
                    controller: function($scope) {
                        $scope.things = ["A list of data specific to route5"];
                    }
                })

            .state('route6', {
                url: "/route6",
                templateUrl: "routes/route6.html"
            })
                .state('route6.list', {
                    url: "/list",
                    templateUrl: "lists/route6.list.html",
                    controller: function($scope) {
                        $scope.things = ["A list of data specific to route6"];
                    }
                })
        });