(function() {
    function HomeCtrl(Room, $scope, Message) {
        this.allRooms = Room.all;

        $scope.activeRoom = null;
        $scope.messages = null;

        $scope.setActiveRoom = function(room) {
            $scope.activeRoom = room;
            $scope.messages = Message.getByRoomId($scope.activeRoom.$value, $scope.activeRoom.$id);
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$scope', 'Message', HomeCtrl])
})();
