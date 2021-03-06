//localStorage.setItem('codepen-tasker',undefined);

$('#content').slimScroll({
   position: 'right',
   height: '370px',
   railVisible: true,
   alwaysVisible: true,
   color: '#00c0ff',
   wheelStep: 7
});

  function splitTime(time) {
      var minutes = "0" + Math.floor(time / 60);
      var seconds = "0" + (time - minutes * 60);
      return minutes.substr(-2) + ":" + seconds.substr(-2);
   }
  
var app = angular.module('tasker', ['angular-svg-round-progress', 'ngAnimate']);
app.run(function($rootScope) {
   $rootScope.run = false;
   $rootScope.hasState = false;
});

app.controller('tasks', ['$scope', 'taskService', function($scope, taskService) {   
   $scope.tasks = taskService.getAll();
   
   $scope.delete = function($index) {
      taskService.remove($index);
   };
   
}]);

app.controller('controls', ['$scope','$rootScope','timeService', 'taskService', function($scope, $rootScope, timeService, taskService) {
   $scope.startpause = function() {
      if ($rootScope.run === false) {
         $rootScope.run = true; 
         $rootScope.hasState = true;
      } else {
         $rootScope.run = false; 
      }
   }
   
   $scope.addnote = function() {
      $rootScope.run = false;
      $rootScope.hasState = false;
      
      var note = prompt("What have you done ?");

      if (note != null && note.trim() !== "")  {
         taskService.add(note);
         $rootScope.$broadcast('RESET');
      } else {
         $rootScope.hasState = true;
      }
   };   
}]);
   
app.controller('currentPause', ['$scope', '$interval','timeService', function($scope, $interval, timeService) {  
          
   $scope.max = timeService.getConfig('pause');
   $scope.current = timeService.getConfig('pause');
   $scope.currentText = splitTime($scope.current);
   
   $scope.$on('RESET', function() {
      $scope.current = timeService.getConfig('pause');
      $scope.currentText = splitTime($scope.current);
   });
   
   $interval(function(){            
      if (!$scope.run && $scope.hasState) {                     
         $scope.current -= 1;
         $scope.currentText = splitTime($scope.current);
         timeService.setPause($scope.current);
         
         if ($scope.current <= 0) {
            document.getElementById('alert').play();
            $scope.current = timeService.getConfig('pause');
            $rootScope.run = false;            
         }
      }
   }, 1000);   
}]);

app.controller('currentTask', ['$scope', '$interval', 'timeService', function($scope, $interval, timeService) {  
         
   $scope.max = timeService.getConfig('time');
   $scope.current = timeService.getConfig('time');
   $scope.currentText = splitTime($scope.current);   
   
   $scope.$on('RESET', function() {
      $scope.current = timeService.getConfig('time');
      $scope.currentText = splitTime($scope.current);
   });
   
      $interval(function(){            
         if ($scope.run && $scope.hasState) {
            $scope.current -= 1;
            $scope.currentText = splitTime($scope.current);
            timeService.setTime($scope.current);
            
            if ($scope.current <= 0) {
               document.getElementById('alert').play();
               $scope.current = timeService.getConfig('time');
               $rootScope.run = false;
            }
         }
      }, 1000);   
}]);


app.factory('taskService', ['timeService', function(timeService) {
   var date = "";
   var tasks = []; 
   
   if (date === "") {
      var gd = new Date();   
      date += gd.getDay() + "/" + gd.getMonth() + "/" + gd.getFullYear();
   }
   
   return {            
      add: function(note) {
         tasks.push({ 
            date: date,
            note: note,            
            time: timeService.getWorkedTime(false),
            pause: timeService.getWorkedPause(false),
            ftime: timeService.getWorkedTime(true),
            fpause: timeService.getWorkedPause(true)
         });
         
         this.setPersistence();
      },
      
      remove: function(index) {
         tasks.splice(index, 1);
         this.setPersistence();
      },
      
      getAll: function() {
         if (localStorage.getItem('codepen-tasker') === null) {
            this.setPersistence();
         }
         
         if (tasks.length === 0) {
            this.getPersistence();
         }
                  
         return tasks;      
      },
      
      getPersistence: function() {
         tasks = JSON.parse(localStorage.getItem('codepen-tasker'));
      },
      
      setPersistence: function() {
         console.log(tasks);
         localStorage.setItem('codepen-tasker',JSON.stringify(tasks));
      }
   }   
}]);

app.factory('timeService', [function() {
   var CONFIG = {
         time: 2400,
         pause: 600
   },
   PAUSE = CONFIG.pause,
   TIME = CONFIG.time;
   
   return {  
      
      reset: function() {
         PAUSE = CONFIG.pause;
         TIME = CONFIG.time;
      },
      
      getConfig: function(prop) {
         return CONFIG[prop];
      },
      
      getWorkedPause: function(formatted) {
         if (formatted) {
            return splitTime(CONFIG.pause - PAUSE);
         }
         return CONFIG.pause - PAUSE;   
      },
      
      getWorkedTime: function(formatted) {
         if (formatted) {
            return splitTime(CONFIG.time - TIME);
         }
         
         return CONFIG.time - TIME;   
      },
      
      getTime: function() {
         return TIME;
      },
      
      getPause: function() {
         return PAUSE
      },
      
      setTime: function(val) {
         TIME = val;         
      },
      
      setPause: function(val) {
         PAUSE = val;
      }
   }
}]);