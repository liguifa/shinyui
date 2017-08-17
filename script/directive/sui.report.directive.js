angular.module("shinyui", [])

.directive("suiHistogram", function () {
    var vm = {
        template: "<svg class='sui-report sui-report-histogram' width='500px' height='500px'>\
                    <line class='sui-report-histogram-dot' x1='0' y1='{{500-$index*50}}' x2='-10' y2='{{500-$index*50}}' ng-repeat='dot in vm.dotY' />\
                    <line class='sui-report-histogram-y' x1='0' y1='0' x2='0' y2='500' />\
                    <rect class='sui-report-histogram-item' ng-repeat='point in vm.points' x='{{$index*50+10}}' y='{{500-point.y}}' width='40' height='{{point.y}}' />\
                    <line class='sui-report-histogram-x' x1='0' y1='500' x2='500' y2='500' />\
                    <line class='sui-report-histogram-dot' x1='{{30+$index*50}}' y1='500' x2='{{30+$index*50}}' y2='502' ng-repeat='dot in vm.dotX' />\
                    <text x='{{12+$index*50}}' y='516' fill='red' ng-repeat='dot in vm.dotX'>{{dot}}</text>\
                   </svg>"
    }
    return {
        restrict: "E",
        template: vm.template,
        replace: true,
        priority: 1,
        scope: {
            points:"=",
            dotX:"=",
            dotY:"="
        },
        controller: function ($scope) {
            $scope.vm = {
                points: [],
                dotX:[],
                dotY:[]
            };

            $scope.$watch("points", function (points) {
                $scope.vm.points = points;
            });
            
            $scope.$watch("dotX",function(x){
                $scope.vm.dotX = x;
            });
            
            $scope.$watch("dotY",function(y){
                $scope.vm.dotY = y;
            });
        }
    }
})