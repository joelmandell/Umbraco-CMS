(function () {
    "use strict";

    function TemplateSectionsOverlayController($scope) {

        var vm = this;

        $scope.model.mandatoryRenderSection = false;

        if(!$scope.model.title) {
            $scope.model.title = "Sections";
        }

        if(!$scope.model.subtitle) {
            $scope.model.subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
        }

        vm.select = select;

        function onInit() {

            if($scope.model.hasMaster) {
                $scope.model.insertType = 'addSection';
            } else {
                $scope.model.insertType = 'renderBody';
            }

        }

        function select(type) {
            $scope.model.insertType = type;
        }

        onInit();

    }

    angular.module("umbraco").controller("Umbraco.Overlays.TemplateSectionsOverlay", TemplateSectionsOverlayController);
})();
