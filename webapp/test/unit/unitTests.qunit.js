/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"invoicesv2/invoicesv2/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
