Angular-ui-router-Demo
======================
ui-router framework working demo

Special thanks to: https://github.com/angular-ui/ui-router for putting together an awesome tool for high level control over an application's UI as well as the ability to have nested routes and states. Thank you. 

This is a simple working demo.

“ui-router” is a routing library for AngularJS that works with states and views. A “view” is the visible/active layer or level that is actively client facing. 

Here's an example of what a view could look like:(saved in a file named "route1.html" for example, see "routes" folder)

<h1>Route 1</h1>

<ul class="nav nav-pills">
	<li class="active"><a ui-sref=".list"><p>Render Data</p></a></li>
	<li><a href="">Collection Two</a></li>
	<li><a href="">Collection Three</a></li>
</ul>

<div ui-view></div>

“State”(in this case), is all the active routes. Nested routes are possible with each view having it’s own “ui-view”(this framework’s version of Angular’s “ng-view”). They are linked to or accessed using ui-router's "ui-sref" as opposed to an "href". 

<li><a ui-sref="route1">Route 1</a></li>

and

<li class="active"><a ui-sref=".list"><p>Render Data</p></a></li>

ui-router gives the developer high level control over an application’s UI. Also, the framework is not limited to routes but can manipulate other parts of the application as well through a controller.

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


