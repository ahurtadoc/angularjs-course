(function () {
    angular.module('lunchCheck', [] )
        .controller('lunchCtrl',lunchCtrl);
    function lunchCtrl($scope) {
        $scope.check = function (){

            if ($scope.lunchItems == '' || $scope.lunchItems == undefined){
                $scope.message = 'Please enter data first'
                $scope.message = 'Please enter data first'
                $scope.msgStyle={
                    color: "red"
                }
                $scope.boxStyle={
                    "border-color": "red"
                }
            }
            else{
                let items = $scope.lunchItems.replace(/\s/g, "").split(',')
                let aux = 0
                for (const i in items) {
                    console.log(items[i])
                    if (items[i] !== ''){
                        aux ++
                    }
                }
                if (aux===0){
                    $scope.message = 'Please enter data first'
                    $scope.msgStyle={
                        color: "red"
                    }
                    $scope.boxStyle={
                        "border-color": "red"
                    }
                }else if (aux<=3){
                    $scope.message = 'Enjoy!'
                    $scope.msgStyle={
                        color: "green"
                    }
                    $scope.boxStyle={
                        "border-color": "green"
                    }
                }else{
                    $scope.message = 'Too much!'
                    $scope.msgStyle={
                        color: "green"
                    }
                    $scope.boxStyle={
                        "border-color": "green"
                    }
                }

            }

        }

    }


})()