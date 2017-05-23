(function() {
    function Room($firebaseArray) {
        var Room = {};
        var ref = firebase.database().ref().child('rooms');
        var rooms = $firebaseArray(ref);

        Room.all = rooms;

        Room.add = function(room) {
            rooms.$add({$value: room}).then(function(room) {
                var id = room.key;
                rooms.$indexFor(id); // returns location in the array
            });
        } 

        return Room;
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room])
})();
               