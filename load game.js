/*global console createjs linkHTMLDisplay $ _ jQuery startNewGame*/

//jQuery ajax shim for ie8.

var mainWindow = null;
var isFL = null;
var loadGame = function() {
	"use strict";
	
	var options = {
		preferFlash: false,
		EaselJS_url: 'dependancies/easel.js/lib/easeljs-0.5.0.min.js',
		EaselFL_url: 'dependancies/EaselFL/build/output/easelfl-cur.min.js',
		SWFObject_url: 'dependancies/EaselFL/js/swfobject.js',
	};
	createjs.FLSetup.run(onSetupSuccess, onSetupFailure, options);

	function onSetupSuccess(isFL_){
		isFL = isFL_;
		var loadOtherScriptsCount = 0;
		var jsAr = [
			"dependancies/tween.js/lib/tweenjs-0.3.0.min.js",
			"dependancies/sound.js/lib/soundjs-0.3.0.min.js"];
		
		var onAllLoaded = function() {
			if(loadOtherScriptsCount === jsAr.length) {
				console.log('All scripts loaded. Starting game.');
				mainWindow = startNewGame();
				linkHTMLDisplay();
			}
		};
		
		jsAr.map(function(js) {
			console.log('getting ' + js);
			$.ajax({
				async: false,
				type: "GET",
				url: js,
				dataType: 'text',

				success: function(data){
					jQuery.globalEval(data);
					loadOtherScriptsCount += 1;
					onAllLoaded();
				},
				error: function() {console.error('An error occured loading a game script.');}
				
			});
		});
	}
	
	function onSetupFailure() {console.error('EaselFL failed to load; aborting.');}
};
