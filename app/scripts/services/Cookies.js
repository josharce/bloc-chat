(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
        $uibModal.open({
                animation: true,
                templateUrl: 'templates/createUserModal.html',
                size: 'sm',
                backdrop: 'static',
                controller: function($uibModalInstance, $scope) {
                    $scope.ok = function () {
                        $scope.newUsername = document.getElementById('newUsername').value;
                        $uibModalInstance.close($scope.newUsername);    
                    };  
                }
        }).result.then(function (name) {
                $cookies.put('blocChatCurrentUser', name);
                return;
        });
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
