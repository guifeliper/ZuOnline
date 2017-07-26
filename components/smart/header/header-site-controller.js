angular.module('zuOnline').controller('HeaderSiteController', [
    '$location',
    function HeaderSiteController($location) {
        'use strict';
        
        this.activeMenu = false;
        this.toggleMenu = toggleMenu;//o que é isto?

        function toggleMenu () {
            if (this.activeMenu === false) {
                this.activeMenu = true;
            }
            else {
                this.activeMenu = false;
            }
        	
        }
    }
]);