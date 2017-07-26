angular.module('zuOnline').controller('HeaderSiteController', [
<<<<<<< HEAD
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
=======
    function HeaderSiteController() {
        'use strict';     
>>>>>>> 692c4674231a5bffe3eb0b201bd5412caf896c9f
    }
]);