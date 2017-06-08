(function () {
    function Message($firebaseArray) {
        var Message = {};
        var ref = null;
        var messages = null;

        Message.getByRoomId = function(roomName, roomId) {
            ref = firebase.database().ref().child("messages").child(roomName);
            messages = $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
            return messages;
        };

        Message.send = function(newMessage) {
            messages.$add(newMessage);
        };

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
