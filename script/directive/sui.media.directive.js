angular.module("shinyui.media",[])

.directive("suiVideo",function(){
    var vm = {
        template:"<div class='sui-video' style='height:{{vm.height}}px;width:{{vm.width}}px' allowfullscreen=‘’>\
                    <video class='sui-video-item' src='{{vm.src}}' preload autoplay height='{{vm.height-68}}px' width='100%' poster='http://img3.3lian.com/2013/s2/60/d/92.jpg'>\</video>\
                    <div class='sui-video-controls'>\
                        <ul class='sui-video-controls-list'>\
                            <li class='sui-video-controls-list-item sui-video-controls-list-item-hover'>\
                                <i class='sui-icon sui-video-controls-list-item-play' ng-click='vm.play()' ng-if='vm.isPlay'>&#xe871;</i>\
                                <i class='sui-icon sui-video-controls-list-item-play' ng-click='vm.play()' ng-if='!vm.isPlay'>&#xe86e;</i>\
                            </li>\
                            <li class='sui-video-controls-list-item'>\
                                <div class='sui-video-controls-list-item-progress' style='width:{{vm.width-261}}px;'>\
                                    <div class='sui-video-controls-list-item-progress-line' style='width:{{vm.width-312}}px;'>\
                                        <div class='sui-video-controls-list-item-progress-line-load' style='width:{{vm.buffered_progress}}%;'></div>\
                                        <div class='sui-video-controls-list-item-progress-line-load-play' style='width:{{vm.paly_progress}}%;'></div>\
                                        <div class='sui-video-controls-list-item-progress-line-dot' style='left:{{vm.paly_progress}}%;'></div>\
                                    </div>\
                                    <span class='sui-video-controls-list-item-progress-time'>{{vm.currentTime | time}}/{{vm.duration | time}}</span>\
                                </div>\
                                <div class='sui-clear'></div>\
                            </li>\
                            <li class='sui-video-controls-list-item sui-video-controls-list-item-hover sui-video-controls-list-item-volume'>\
                                <i class='sui-icon sui-video-controls-list-item-volume-icon' ng-click='vm.showVolume()'>&#xe84e;</i>\
                                <div class='sui-video-controls-list-item-volume-control' ng-if='vm.isShowVolume'>\
                                    <div class='sui-video-controls-list-item-volume-control-number'><span>{{vm.volume}}</span></div>\
                                    <div class='sui-video-controls-list-item-volume-control-progress'>\
                                        <div class='sui-video-controls-list-item-volume-control-progress-line'>\
                                            <div class='sui-video-controls-list-item-volume-control-progress-line-actvie' style='height:{{100 - vm.volume}}%'></div>\
                                            <div class='sui-video-controls-list-item-volume-control-progress-line-dot' ng-mousedown='vm.startSetVolume($event)' ng-mousemove='vm.setVolume($event)' ng-mouseup='vm.endSetVolume()' ng-mouseout='vm.endSetVolume()'></div>\
                                        </div>\
                                    </div>\
                                </div>\
                            </li>\
                            <li class='sui-video-controls-list-item sui-video-controls-list-item-hover'>\
                                <span class='sui-video-controls-list-item-clarity'>{{vm.clarity}}</span>\
                            </li>\
                            <li class='sui-video-controls-list-item sui-video-controls-list-item-hover'>\
                                <i ng-click='vm.download()' class='sui-icon sui-video-controls-list-item-download'>&#xe832;</i>\
                            </li>\
                            <li class='sui-video-controls-list-item sui-video-controls-list-item-hover'>\
                                <i ng-click='vm.full()' class='sui-icon sui-video-controls-list-item-full'>&#xe852;</i>\
                            </li>\
                        </ul>\
                    </div>\
                    <div class='sui-video-barrage'>\
                        <ul class='sui-video-barrage-list sui-video-barrage-list'>\
                            <li class='sui-video-barrage-list-item sui-video-barrage-list-item-hover'>\
                                <i class='sui-icon'>&#xe845;</i>\
                            </li>\
                            <li class='sui-video-barrage-list-item sui-video-barrage-list-item-hover'>\
                                <i class='sui-icon'>&#xf0eb;</i>\
                            </li>\
                            <li class='sui-video-barrage-list-item sui-video-barrage-list-item-text' style='width:{{vm.width-180}}px;'>\
                                <i class='sui-icon'>&#xf120;</i>\
                                <input type='text' class='sui-video-barrage-list-item-text-input' style='width:{{vm.width-238}}px;' />\
                            </li>\
                            <li class='sui-video-barrage-list-item'>\
                                <button class='sui-video-barrage-list-item-send'>发送</button>\
                            </li>\
                        </ul>\
                    </div>\
                    <div class='sui-video-subtitle'><span>{{vm.currentSubTitle}}</span></div>\
                    <div class='sui-video-barrage-pool' style='bottom:{{vm.height}}px;'>\
                        <span ng-repeat='item in vm.barrages' class='sui-video-barrage-pool-text' style='left:{{item.left}}px;top:{{item.top}}px;color:{{item.color}};'>{{item.text}}</span>\
                    </div>\
                    <div class='sui-clear'></div>\
                  </div>",
        
    }
    return {
        restrict: "E",
        template: vm.template,
        replace: true,
        priority: 1,
        transclude:true,
        scope: {
            src:"=",
            autoplay:"=",
            volume:"=",
            subTitles:"=",
        },
        controller:function($scope){
            $scope.vm = {
                video:null, 
                duration:0,
                paly_progress:0,
                currentTime:0,
                buffered_progress:0,
                isPlay:true,
                volume:0,
                clarity:"自动",
                height:500,
                width:660,
                isFull:false,
                oldSize:{width:660,height:500},
                isShowVolume:false,
                currentSubTitle:"飞鸟尽、良弓藏、狡兔死、走狗烹",
                obsoleteSubTitles:[],
                queueSubTitles:[],
                src:"",
                hideSubTitle:null,
                isStartSetVolume:false,
                startVolumeY:0,
                barrages:[],
                play:function(){
                    if($scope.vm.isPlay){
                        $scope.vm.video.pause();
                        $scope.vm.isPlay = false;
                    } else  {
                        $scope.vm.video.play();
                        $scope.vm.isPlay = true;
                    }
                },
                timeupdate:function(){
                    $scope.$apply(function(){
                        $scope.vm.paly_progress = ($scope.vm.video.currentTime/$scope.vm.duration)*100;
                        $scope.vm.currentTime = $scope.vm.video.currentTime;
                        var firstSubTitle = $scope.vm.queueSubTitles[0];
                        if(firstSubTitle.time <= $scope.vm.currentTime){
                            $scope.vm.currentSubTitle = firstSubTitle.title;
                            $scope.vm.queueSubTitles.splice(0,1);
                            if($scope.vm.hideSubTitle != null){
                                clearTimeout($scope.vm.hideSubTitle);
                            }
                            $scope.vm.hideSubTitle = window.setTimeout(function(){
                                $scope.$apply(function(){
                                    $scope.vm.currentSubTitle = "";
                                });
                            },3000);
                        }
                        // $scope.vm.moveBarrages();
                    });
                },
                loadedmetadata:function(){
                    $scope.vm.duration = $scope.vm.video.duration
                },
                progress:function(){
                    $scope.$apply(function(){
                        var prload = $scope.vm.video.buffered;
                        var start = prload.start(0);
                        var end = prload.end(0);
                        $scope.vm.buffered_progress = end/$scope.vm.duration * 100;
                    });
                },
                full:function(){
                    if(!$scope.vm.isFull){
                        $scope.vm.video.parentElement.webkitRequestFullScreen();
                    } else {
                        document.webkitCancelFullScreen(); 
                    }
                },
                download:function(){
                    window.location.href = $scope.vm.src;
                },
                showVolume:function(){
                    $scope.vm.isShowVolume = !$scope.vm.isShowVolume ;
                },
                startSetVolume:function($event){
                    $scope.vm.isStartSetVolume = true;
                    $scope.vm.startVolumeY = $event.clientY;
                },
                endSetVolume:function(){
                    $scope.vm.isStartSetVolumn = false;
                },
                setVolume:function($event){
                    if($scope.vm.isStartSetVolume){
                        var y = $event.clientY - $scope.vm.startVolumeY;
                        $scope.vm.volume += 0-y;
                    }
                },
                moveBarrages:function(){
                    window.setInterval(function(){
                        $scope.$apply(function(){
                            var tempBarrages = [];
                            $scope.vm.barrages.forEach(function(item) {
                                var addLeft = 1;
                                item.left -= addLeft;
                                if(item.left > 0 - item.text.length * 16 - 4){
                                    tempBarrages.push(item);
                                }
                            }, this);
                            $scope.vm.barrages = tempBarrages;
                        });
                    },20);
                }
            }
            $scope.$watch("volume",function(volume){
                if(volume){
                    volume = parseInt(volume);
                    if(volume<0){
                        volume = 0
                    }
                    if(volume>100){
                        volume = 100;
                    }
                    $scope.vm.volume = volume;
                }
            });
            $scope.$watch("subTitles",function(subTitles){
                subTitles.sort(function(item1,item2){
                    return item1.time - item2.time;
                });
                $scope.vm.obsoleteSubTitles = [];
                $scope.vm.queueSubTitles = [];
                var tempSubTitles = subTitles;
                for(var i in subTitles){
                    if(subTitles[i].time>=$scope.vm.currentTime){
                        break;
                    }
                    $scope.vm.obsoleteSubTitles.push(subTitles[i]);
                    tempSubTitles.splice(i, 1);
                }
                $scope.vm.queueSubTitles = tempSubTitles;
            },true);
            $scope.$watch("vm.volume",function(volume){
                $scope.vm.video.volume = volume/100;
            });
            $scope.$watch("src",function(src){
                $scope.vm.src = src;
            });
            $scope.vm.barrages = [
                {time:2,left:30,top:10,color:'#123456',text:'你真是法海阿1'},
                {time:2,left:30,top:15,color:'#123456',text:'你真是法海阿2'},
                {time:2,left:30,top:20,color:'#123456',text:'你真是法海阿3'},
                {time:2,left:30,top:25,color:'#123456',text:'你真是法海阿4'},
                {time:2,left:30,top:30,color:'#123456',text:'你真是法海阿5'},
                {time:2,left:70,top:10,color:'#123456',text:'你真是法海阿6'},
                {time:2,left:50,top:15,color:'#123456',text:'你真是法海阿7'},
                {time:2,left:40,top:20,color:'#123456',text:'你真是法海阿8'},
                {time:2,left:60,top:25,color:'#123456',text:'你真是法海阿9'},
                {time:2,left:80,top:30,color:'#123456',text:'你真是法海阿10'},
                {time:2,left:110,top:10,color:'#123456',text:'你真是法海阿11'},
                {time:2,left:145,top:15,color:'#123456',text:'你真是法海阿12'},
                {time:2,left:156,top:20,color:'#123456',text:'你真是法海阿13'},
                {time:2,left:179,top:25,color:'#123456',text:'你真是法海阿14'},
                {time:2,left:134,top:30,color:'#123456',text:'你真是法海阿15'},
            ];

            $scope.vm.moveBarrages();
        },
        link:function($scope,elements,attrs){
            var video = elements[0].children[0];
             $scope.vm.video = video;
            video.ontimeupdate = $scope.vm.timeupdate;
            video.onloadedmetadata = $scope.vm.loadedmetadata;
            video.onprogress = $scope.vm.progress;
            $scope.vm.volume = video.volume;
            document.onwebkitfullscreenchange = function( event ) {
                if(document.webkitFullscreenElement != null){
                        $scope.vm.height =  window.screen.height;
                        $scope.vm.width =  window.screen.width;
                        $scope.vm.isFull = true;
                    } else {
                        $scope.vm.height = $scope.vm.oldSize.height;
                        $scope.vm.width = $scope.vm.oldSize.width;
                        $scope.vm.isFull = false;
                    }
            }
        }
    }
})

.filter("time",function(){
    return function(input){
        if(input){
            var hour = parseInt(input/60/60);
            var newTime = input - (hour * 60 * 60);
            var minute = parseInt(newTime/60);
            var second = parseInt(newTime - minute*60);
            var returnValue  = '';
            if(hour < 10){
                returnValue += '0';
            }
            returnValue += hour + ":";
            if(minute < 10){
                returnValue += '0';
            }
            returnValue += minute + ":";
            if(second < 10){
                returnValue += '0';
            }
            returnValue += second;
            return returnValue;
        }
    }
})