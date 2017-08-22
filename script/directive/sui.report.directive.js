﻿angular.module("shinyui", [])

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

.directive("suiFan", function () {
    var vm = {
        template: "<div><svg class='sui-report sui-report-fan' width='{{vm.r}}px' height='{{vm.r}}px'>\
                    <path class='sui-report-fan-path' fill='{{point.c}}' d='{{point.d}}' ng-repeat='point in vm.points'></path>\
                   </svg><svg width='{{vm.r}}px' height='14px'>\
                    <circle cx='{{$index*108+7}}' cy='7' r='7' fill='{{point.c}}' ng-repeat='point in vm.points'/>\
                    <text x='{{$index*108+22}}' y='14' fill='rgb(102, 102, 102);' ng-repeat='point in vm.points'>{{point.title}}</text>\
                   </svg></div>",
        build:function(points,r){
            var center = "M"+r/2+","+r/2;
            var front = {x:r/2,y:0};
            var frontWeight = 0;
            var newPoints = [];
            for(var i in points){
                var newPoint = this.Calculation(360 * points[i].weight,front,r,frontWeight);
                newPoints.push({title:points[i].title,d:center+"L"+front.x+","+front.y+"A"+r/2+","+r/2+",0,1,1,"+newPoint.x+","+newPoint.y,c:this.GenerateColor()});
                front = newPoint;
                frontWeight += 360 * points[i].weight;
            }
            return newPoints;
        },
        Calculation:function(weight,front,r,frontWeight){
            var quadrant = (frontWeight + weight) / 90;
            if((frontWeight + weight) % 90 == 0){
                switch(quadrant){
                    case 0: return {x:r/2, y:0};
                    case 1: return {x:r, y:r/2};
                    case 2: return {x:r/2, y:r};
                    case 3: return {x:0, y:r/2};
                    case 4: return {x:r/2, y:0};
                }
            } else {
                switch(parseInt(quadrant)){
                    case 0:return this.CalculationForOneQuadrant(weight,front,r,frontWeight);
                    case 1:return this.CalculationForTwoQuadrant(weight,front,r,frontWeight);
                    case 2:return this.CalculationForThreeQuadrant(weight,front,r,frontWeight);
                    case 3:return this.CalculationForFourQuadrant(weight,front,r,frontWeight);
                }
            }
        },
        CalculationForOneQuadrant:function(weight,front,r,frontWeight){
            var weightY = 90 - (weight + frontWeight);
            var lengthY = Math.sin(weightY * 0.017453293) * r/2;
            var newY = r/2 - lengthY;
            var weightX = frontWeight + weight;
            var lengthX = Math.sin(weightX * 0.017453293) * r/2;
            var newX = r/2 + lengthX;
            return {x:newX, y:newY};
        },
        CalculationForTwoQuadrant:function(weight,front,r,frontWeight){
            var weightY = (weight + frontWeight) - 90;
            var lengthY = Math.sin(weightY * 0.017453293) * r/2;
            var newY = r/2 + lengthY;
            var weightX = 180 - (frontWeight + weight);
            var lengthX = Math.sin(weightX * 0.017453293) * r/2;
            var newX = r/2 + lengthX;
            return {x:newX, y:newY};
        },
        CalculationForThreeQuadrant:function(weight,front,r,frontWeight){
            var weightY = 270 - (weight + frontWeight);
            var lengthY = Math.sin(weightY * 0.017453293) * r/2;
            var newY = r/2 + lengthY;
            var weightX = (frontWeight + weight) - 180;
            var lengthX = Math.sin(weightX * 0.017453293) * r/2;
            var newX = r/2 - lengthX;
            return {x:newX, y:newY};
        },
        CalculationForFourQuadrant:function(weight,front,r,frontWeight){
            var weightY = (weight + frontWeight) - 270;
            var lengthY = Math.sin(weightY * 0.017453293) * r/2;
            var newY = r/2 - lengthY;
            var weightX = 360 - (frontWeight + weight);
            var lengthX = Math.sin(weightX * 0.017453293) * r/2;
            var newX = r/2 - lengthX;
            return {x:newX, y:newY};
        },
        GenerateColor:function(){
            return "#"+parseInt(Math.random()*1000000);
        }
    };
    return {
        restrict: "E",
        template: vm.template,
        replace: true,
        priority: 1,
        scope: {
            points: "=",
            dotX: "=",
            dotY: "=",
            r:"=",
            title: "=",
        },
        controller: function ($scope) {
            $scope.vm = {
                points: [],
                dotX: [],
                dotY: [],
                r: 600,
                title: "",
            };

            $scope.$watch("points", function (points) {
                $scope.vm.points = vm.build(points,$scope.vm.w);
            });

            $scope.$watch("dotX", function (x) {
                $scope.vm.dotX = x;
            });

            $scope.$watch("dotY", function (y) {
                $scope.vm.dotY = y;
               
            });

            $scope.$watch("r", function (r) {
                $scope.vm.r = r;
                $scope.vm.points = vm.build($scope.points,r);
            });

            $scope.$watch("title", function (title) {
                $scope.vm.title = title;
            })
        }
    }
})