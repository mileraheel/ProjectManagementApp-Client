'use strict';

angular.module('projectManagementApp')
  .controller('projectController', function ($scope, $resource,ProjectFactory,TaskFactory) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.projects = ProjectFactory.getProjects();
        $scope.tasks

        $scope.saveProject = function () {
            ProjectFactory.saveProject({'name': $scope.name, 'description': $scope.description}).then(function (newProject) {
                $scope.projects.push(newProject);
            })

        }
        $scope.deleteProject = function (id, index) {
            ProjectFactory.deleteProject(id).then(function (id) {
                $scope.projects.splice(index, 1);
            });
        }
        $scope.updateProject = function (project) {
            ProjectFactory.updateProject({'id': project.id, 'name': project.name, 'description': project.description});

        }

        $scope.getTasks=function(id){
            $scope.tasks=TaskFactory.getTasksById(id)
        }

        $scope.items = ['item1', 'item2', 'item3'];
        $scope.openModal = function () {

            var modalInstance = $modal.open({
                templateUrl: 'tasksModal.html',
                controller: "projectController",
                size: "sm",
                resolve: {
                    tasks: function () {
                        $scope.loadTasks;
                    }
                }
            })
        }
    })


    .controller('taskController', function ($scope, $resource,TaskFactory,ProjectFactory) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.projects = ProjectFactory.getProjects();
        $scope.taskList = TaskFactory.getTasks();

        $scope.saveTask = function(){
            TaskFactory.saveTask({'title':$scope.title,'description':$scope.description,'project':$scope.project}).then(function(newTask){
                $scope.taskList.push(newTask);
            })

        }
        $scope.deleteTask = function(id,index) {
            TaskFactory.deleteTask(id).then(function(id){
                $scope.tasks.splice(index,1);
            });
        }
        $scope.updateTask = function(task){
            TaskFactory.updateTask({'id':task.id ,'title':task.title,'description':task.description,'project':task.project});

        }
        $scope.setSelected=function(selectedId){

        }


    })

    .controller('commentController', function ($scope, $resource,CommentFactory,TaskFactory) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.tasks = TaskFactory.getTasks();
        $scope.commentList = CommentFactory.getComments();

        $scope.saveComment = function(){
            CommentFactory.saveComment({'description':$scope.description,'task':$scope.task}).then(function(newComment){
                $scope.commentList.push(newComment);
            })

        }
        $scope.deleteComment = function(id,index) {
            CommentFactory.deleteComment(id).then(function(id){
                $scope.comments.splice(index,1);
            });
        }
        $scope.updateComment = function(comment){
            CommentFactory.updateComment({'id':comment.id ,'description':comment.description,'task':comment.task});

        }
        $scope.setSelected=function(selectedId){

        }


    });