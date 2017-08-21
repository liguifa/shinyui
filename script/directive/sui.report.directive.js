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

.directive("suiFan", function () {
    var vm = {
        template: "<div><svg class='sui-report sui-report-fan' width='{{vm.w}}px' height='{{vm.h}}px'>\
                    <path fill='{{point.c}}' stroke='none' d='{{point.d}}' opacity='1' fill-opacity='1' stroke-width='2.9994665980652173' style='-webkit-tap-highlight-color: rgba(0, 0, 0, 0); opacity: 1; fill-opacity: 1;' transform='matrix(1,0,0,1,0,0)' ng-repeat='point in vm.points'></path>\
                   </svg></div>",
        build:function(points,r){
            var center = "M"+r/2+","+r/2;
            var frontX = 300;
            var frontY = 0;
            var frontWeight = 0;
            var addX = true;
            var addY = true;
            var newPoints = [];
            for(var i in points){
                // var weight = r*points[i];
                // var tempX = addX ? frontX+weight:frontX-weight;
                // if(tempX>=r)
                // {
                //     addX = false;
                //     tempX = r - (tempX - r);
                // }
                // if(tempX<=0)
                // {
                //     addX = true;
                //     tempX = 0 - tempX;
                // }
                // var tempY = addY ? frontY+weight:frontY-weight;
                // if(tempY>=r)
                // {
                //     addY = false;
                //     tempY = r - (tempY - r);
                // }
                // if(tempY<=0)
                // {
                //     addY = true;
                //     tempY = 0 - tempY;
                // }
                var weight = 360 * points[i];
                var tempWeight = 90-weight-frontWeight;
                var y = Math.sin(tempWeight* 0.017453293) * r/2;
                tempY = r/2 - y;
                var tempWeight = frontWeight + weight;
                var x = Math.sin(tempWeight* 0.017453293) * r/2;
                tempX = r/2 + x;
                frontWeight = weight;
                newPoints.push({d:center+"L"+frontX+","+frontY+"A"+r/2+","+r/2+",0,1,1,"+tempX+","+tempY,c:this.GenerateColor()});
                frontX = tempX;
                frontY = tempY;
            }
            return newPoints;
        },
        GenerateColor:function(){
            return "#"+parseInt(Math.random()*1000000);
        }
    }
    return {
        restrict: "E",
        template: vm.template,
        replace: true,
        priority: 1,
        scope: {
            points: "=",
            dotX: "=",
            dotY: "=",
            width: "=",
            height: "=",
            title: "=",
        },
        controller: function ($scope) {
            $scope.vm = {
                points: [],
                dotX: [],
                dotY: [],
                w: 500,
                h: 500,
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

            $scope.$watch("width", function (width) {
                $scope.vm.w = width;
                  $scope.vm.points = vm.build($scope.points,width);
            });

            $scope.$watch("height", function (height) {
                $scope.vm.h = height;
                  $scope.vm.points = vm.build($scope.points,height);
            });

            $scope.$watch("title", function (title) {
                $scope.vm.title = title;
            })
        }
    }
})