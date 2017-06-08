(function() {
    function HomeCtrl(Room, $scope, Message, $cookies) {
        this.allRooms = Room.all;

        $scope.activeRoom = null;
        $scope.messages = null;

        $scope.setActiveRoom = function(room) {
            $scope.activeRoom = room;
            $scope.messages = Message.getByRoomId($scope.activeRoom.$value, $scope.activeRoom.$id);
        };

        $scope.sendMessage = function() {
            var message = document.getElementById('writeMessageTextArea').value;
            if (message.trim()) {    
                Message.send({
                    content: message,
                    roomId: $scope.activeRoom.$id,
                    sentAt: firebase.database.ServerValue.TIMESTAMP,
                    username: $cookies.get('blocChatCurrentUser')
                });
            }
            document.getElementById('writeMessageTextArea').value = null;
            document.getElementById('writeMessageTextArea').focus();
        }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$scope', 'Message', '$cookies', HomeCtrl])
})();
