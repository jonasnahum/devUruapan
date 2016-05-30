(function() {
    var app = angular.module('app');
    
    app.controller('EmailFormController', [ '$http', '$scope', 'constants',
                                           function( $http, $scope, constants) {  
       
        var model = this;
        model.to = "jonasnahum@gmail.com";//a quién le va llegar el correo 
        model.name = '';
        model.email = '';//el cliente que envía información
        model.phone = '';
        model.message = '';
        model.waiting = false;
        model.success = function(){
            alert('Gracias, su mensage fué enviado con éxito. Prónto nos comunicarémos con usted.');
            model.clear();
        };                       
        //model.errorLog = errorLog();//for test propouses
        model.errorLog = function(){
            alert("hubo un error");
        };//for test propouses
                                               
        
                                               
        model.clear = function() {
            model.name = '';
            model.email = '';
            model.phone = '';
            model.message = '';
            model.waiting = false;
            $scope.mailForm.$setPristine();
        };
                                               
        model.send = function() {  //email del encargado de la empresa.          
             
            $http({
                method: 'POST',
                url: constants.server + '/correo/',//la varialble constante viene de routes.
                data: model,
                beforeSend: function() {
                    model.waiting = true;
                },
                complete: function() {
                    model.waiting = false;
                }
            }).then(model.success, model.errorLog);
        };
    }]);
})();