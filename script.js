var app = angular.module("dptApp", ["ngRoute"]);
    
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        template : "<h1>Home</h1>"
    })
    .when("/add", {
        templateUrl : "html/add.html"
    })
    .when("/overview", {
        templateUrl : "html/overview.html"
    })
    .otherwise({
        template : "<p>Fehler</p>"
    });
});