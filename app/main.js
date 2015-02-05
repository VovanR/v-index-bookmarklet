/* jshint strict:false, browser:true */
(function bookmarklet() {

	var location = window.location;
	location.href = location.protocol + '//' + location.host;

}());
