(function() {
    function HomeCtrl(Room) {
        this.allRooms = Room.all;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl])
})();
