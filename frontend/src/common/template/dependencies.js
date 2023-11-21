const jquery = require('jquery');
window.$ = window.jQuery = jquery;
 
require('modules/admin-lte/dist/js/app');
require('modules/admin-lte/plugins/jQueryUI/jquery-ui.min');
require('modules/admin-lte/bootstrap/js/bootstrap.min');
require('modules/admin-lte/plugins/fastclick/fastclick');
require('modules/admin-lte/plugins/slimScroll/jquery.slimscroll.min');
 
require('modules/font-awesome/css/font-awesome.min.css');
require('modules/ionicons/dist/css/ionicons.css');
require('modules/admin-lte/bootstrap/css/bootstrap.min.css');
require('modules/admin-lte/dist/css/AdminLTE.css');
require('modules/admin-lte/dist/css/skins/_all-skins.css');
require('modules/admin-lte/plugins/iCheck/flat/blue.css');
 
require('./custom.css');