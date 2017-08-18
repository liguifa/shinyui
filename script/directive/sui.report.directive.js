angular.module("shinyui", [])

.directive("suiHistogram", function () {
    var vm = {
        template: "<div><svg class='sui-report sui-report-histogram' width='{{vm.w}}px' height='{{vm.h}}px'>\
                    <text class='sui-report-histogram-text' x='{{vm.h/2}}' y='10'>{{vm.title}}</text>\
                    <line class='sui-report-histogram-dot' x1='0' y1='{{-30+vm.h-$index*50}}' x2='-2' y2='{{-30+vm.h-$index*50}}' ng-repeat='dot in vm.dotY' />\
                    <text class='sui-report-histogram-text' x='-16' y='{{-24+vm.h-$index*50}}' ng-repeat='dot in vm.dotY'>{{dot}}</text>\
                    <line class='sui-report-histogram-y' x1='0' y1='0' x2='0' y2='{{vm.h}}' />\
                    <rect class='sui-report-histogram-item' ng-repeat='point in vm.points' x='{{$index*50+10}}' y='{{500-point.y}}' width='40' height='{{point.y}}' />\
                    <line class='sui-report-histogram-x' x1='0' y1='{{vm.h}}' x2='{{vm.w}}' y2='{{vm.h}}' />\
                    <line class='sui-report-histogram-dot' x1='{{30+$index*50}}' y1='{{vm.h}}' x2='{{30+$index*50}}' y2='{{vm.h+2}}' ng-repeat='dot in vm.dotX' />\
                    <text class='sui-report-histogram-text' x='{{22+$index*50}}' y='{{vm.h+14}}' ng-repeat='dot in vm.dotX'>{{dot}}</text>\
                   </svg></div>"
    }
    return {
        restrict: "E",
        template: vm.template,
        replace: true,
        priority: 1,
        scope: {
            points:"=",
            dotX:"=",
            dotY:"=",
            width:"=",
            height:"=",
            title:"=",
        },
        controller: function ($scope) {
            $scope.vm = {
                points: [],
                dotX:[],
                dotY:[],
                w:500,
                h:500,
                title:"",
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

            $scope.$watch("width",function(width){
                $scope.vm.w = width;
            });

            $scope.$watch("height",function(height){
                $scope.vm.h = height;
            });

            $scope.$watch("title",function(title){
                $scope.vm.title = title;
            })
        }
    }
})

.directive("suiLine", function () {
    var vm = {
        template: "<div><svg class='sui-report sui-report-histogram' width='{{vm.w}}px' height='{{vm.h}}px'>\
                    <text class='sui-report-histogram-text' x='{{vm.h/2}}' y='10'>{{vm.title}}</text>\
                    <line class='sui-report-histogram-dot' x1='0' y1='{{-30+vm.h-$index*50}}' x2='-2' y2='{{-30+vm.h-$index*50}}' ng-repeat='dot in vm.dotY' />\
                    <text class='sui-report-histogram-text' x='-16' y='{{-24+vm.h-$index*50}}' ng-repeat='dot in vm.dotY'>{{dot}}</text>\
                    <line class='sui-report-histogram-y' x1='0' y1='0' x2='0' y2='{{vm.h}}' />\
                    <line class='sui-report-histogram-dot' ng-repeat='point in vm.points' x1='{{($index)*50}}' x2='{{($index+1)*50}}' y1='{{vm.h-vm.points[$index-1].y}}' y2='{{vm.h-point.y}}'/>\
                    <line class='sui-report-histogram-x' x1='0' y1='{{vm.h}}' x2='{{vm.w}}' y2='{{vm.h}}' />\
                    <line class='sui-report-histogram-dot' x1='{{30+$index*50}}' y1='{{vm.h}}' x2='{{30+$index*50}}' y2='{{vm.h+2}}' ng-repeat='dot in vm.dotX' />\
                    <text class='sui-report-histogram-text' x='{{22+$index*50}}' y='{{vm.h+14}}' ng-repeat='dot in vm.dotX'>{{dot}}</text>\
                   </svg></div>"
    }
    return {
        restrict: "E",
        template: vm.template,
        replace: true,
        priority: 1,
        scope: {
            points:"=",
            dotX:"=",
            dotY:"=",
            width:"=",
            height:"=",
            title:"=",
        },
        controller: function ($scope) {
            $scope.vm = {
                points: [],
                dotX:[],
                dotY:[],
                w:500,
                h:500,
                title:"",
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

            $scope.$watch("width",function(width){
                $scope.vm.w = width;
            });

            $scope.$watch("height",function(height){
                $scope.vm.h = height;
            });

            $scope.$watch("title",function(title){
                $scope.vm.title = title;
            })
        }
    }
})