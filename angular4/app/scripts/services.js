/**
 * Created by Raheel on 6/11/14.
 */
angular.module('projectManagementApp').factory('ProjectFactory',function($resource){
    var Project = $resource('http://localhost:8080/scrum-server/v1/api/project/',{
        update:{
            method:'PUT'
        }
    });
    var ProjectParam = $resource('http://localhost:8080/scrum-server/v1/api/project/:id',{

    });

    return {
        getProjects: function(){
            return Project.query();
        },

        saveProject:function(data){
            return Project.save(data).$promise;
        },

        deleteProject:function(data){
            return ProjectParam.delete({id: data}).$promise;
        },

        updateProject:function(data){
            return Project.update(data).$promise;
        }


    };
});

angular.module('projectManagementApp').factory('TaskFactory',function($resource){
    var Task = $resource('http://localhost:8080/scrum-server/v1/api/task/');
    var TaskParam = $resource('http://localhost:8080/scrum-server/v1/api/task/:id',{

    });

    return {
        getTasks: function(){
            return Task.query();
        },

        getTasksById: function(id){
            return TaskParam.query(id);
        },

        saveTask:function(data){
            return Task.save(data).$promise;
        },

        deleteTask:function(data){
            return TaskParam.delete({id: data}).$promise;
        },

        updateTask:function(data){
            return Task.update(data).$promise;
        }


    };
});


angular.module('projectManagementApp').factory('CommentFactory',function($resource){
    var Comment = $resource('http://localhost:8080/scrum-server/v1/api/comment/');
    var CommentParam = $resource('http://localhost:8080/scrum-server/v1/api/comment/:id',{

    });

    return {
        getComments: function(){
            return Comment.query();
        },

        saveComment:function(data){
            return Comment.save(data).$promise;
        },

        deleteComment:function(data){
            return CommentParam.delete({id: data}).$promise;
        },

        updateComment:function(data){
            return Comment.update(data).$promise;
        }


    };
});

