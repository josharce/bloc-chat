(function () {
    function NewRoomModalCtrl(Room, $uibModal, $scope) {
        $scope.addNewRoom = function(newRoom) {
            Room.add(newRoom);
        } 

        $scope.open = function (size) {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'templates/createRoomModal.html',
                controller: 'ModalInstanceCtrl',
                size: size
            });

            modalInstance.result.then(function (newRoomName) {
                $scope.addNewRoom(newRoomName);;
            }, function () {
                return;
            });
        }
    }

    function ModalInstanceCtrl(Room, $uibModalInstance, $scope) {
        $scope.checkRooms = function() {
            $scope.allRooms = Room.all;
            $scope.newRoomName = document.getElementById('newRoomName').value;

            var roomExists = false;

            for(var i=0;i<$scope.allRooms.length;i++) {
                if ($scope.newRoomName === $scope.allRooms[i].$value) {
                    roomExists = true;
                }
            }
            
            if (!roomExists) {
                return true;
            }
        }
        
        $scope.ok = function () {
            $uibModalInstance.close($scope.newRoomName);    
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss();
        };
    }

    angular
        .module('blocChat')
        .controller('NewRoomModalCtrl', ['Room', '$uibModal', '$scope', NewRoomModalCtrl])
        .controller('ModalInstanceCtrl', ['Room', '$uibModalInstance', '$scope', ModalInstanceCtrl])
})();
