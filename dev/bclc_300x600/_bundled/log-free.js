(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var creative = {};

creative.init = function () {
  void 0;
  creative.setupDOMElements();

  // Check if Enabler is initialized.
  if (Enabler.isInitialized()) {
    // Check if ad is visible to user.
    if (Enabler.isVisible()) {
      creative.enablerInitHandler();
    } else {
      Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, creative.enablerInitHandler);
    }
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.INIT, creative.enablerInitHandler);
  }
};

creative.setupDOMElements = function () {
  creative.domElements = {};
  creative.domElements.exit_button = document.getElementById("pn-bg-exit");
  creative.domElements.backgroundImage = document.getElementById("pn-frame1-bg");
  creative.domElements.casino_img = document.getElementById("pn-casino-image");
};

creative.dynamicDataAvailable = function () {

  // NOTE: Here starts the pasted section from Studio.
  // Dynamic Content variables and sample values
  Enabler.setProfileId(10212371);
  var devDynamicContent = {};

  devDynamicContent.BCLC_Casinos__Fall_2018__Dynamic_Feed_General__300x250 = [{}];
  devDynamicContent.BCLC_Casinos__Fall_2018__Dynamic_Feed_General__300x250[0]._id = 0;
  devDynamicContent.BCLC_Casinos__Fall_2018__Dynamic_Feed_General__300x250[0].Unique_ID = 245;
  devDynamicContent.BCLC_Casinos__Fall_2018__Dynamic_Feed_General__300x250[0].Reporting_Label = "bclc_casinos_2018_bb_cascades";
  devDynamicContent.BCLC_Casinos__Fall_2018__Dynamic_Feed_General__300x250[0].City = "Langley";
  devDynamicContent.BCLC_Casinos__Fall_2018__Dynamic_Feed_General__300x250[0].Casino_Name = "Cascades Casino";
  devDynamicContent.BCLC_Casinos__Fall_2018__Dynamic_Feed_General__300x250[0].Casino_Frame_Image = {};
  devDynamicContent.BCLC_Casinos__Fall_2018__Dynamic_Feed_General__300x250[0].Casino_Frame_Image.Type = "file";
  devDynamicContent.BCLC_Casinos__Fall_2018__Dynamic_Feed_General__300x250[0].Casino_Frame_Image.Url = "https://s0.2mdn.net/ads/richmedia/studio/39901982/39901982_20180921145245834_frame-2-casino-cascades.png";
  https: //www.google.com/doubleclick/studio/#assets:accountId=39901982&folderId=61990835
  devDynamicContent.BCLC_Casinos__Fall_2018__Dynamic_Feed_General__300x250[0].Exit_URL = {};
  devDynamicContent.BCLC_Casinos__Fall_2018__Dynamic_Feed_General__300x250[0].Exit_URL.Url = "http://casinos.bclc.com/whats-new/no-two-nights-are-the-same";
  devDynamicContent.BCLC_Casinos__Fall_2018__Dynamic_Feed_General__300x250[0].Default = false;
  devDynamicContent.BCLC_Casinos__Fall_2018__Dynamic_Feed_General__300x250[0].Active = true;

  Enabler.setDevDynamicContent(devDynamicContent);

  // NOTE: Here ends the pasted section from Studio.

  // Variable "dynamicContent" gets automatically initialized by Enabler.
  // Change "Travel_Packaged_Solutions_AB" to the name of your dynamic elements.
  creative.dynamicData = dynamicContent.BCLC_Casinos__Fall_2018__Dynamic_Feed_General__300x250[0];

  // Set your dynamic exit url so it can be used in initial.js.
  creative.dynamicExitUrl = creative.dynamicData.Exit_URL.Url;
};

creative.enablerInitHandler = function (event) {
  creative.dynamicDataAvailable();

  creative.domElements.exit_button.addEventListener("click", creative.exitClickHandler);

  if (Enabler.isPageLoaded()) {
    creative.pageLoadHandler();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, creative.pageLoadHandler);
  }
};

creative.exitClickHandler = function (event) {
  Enabler.exit("exit", creative.dynamicExitUrl);
};

creative.pageLoadHandler = function (event) {
  creative.domElements.casino_img.src = creative.dynamicData.Casino_Frame_Image.Url;
  creative.showAd();
};

window.addEventListener('load', creative.init.bind(creative));

// Handle Animation
// creative.showAd = function() {
//   // add your animation js here
// };

exports.creative = creative;

},{}],2:[function(require,module,exports){
"use strict";

var _commonJsDcJs = require('../../_common/js/dc.js');

_commonJsDcJs.creative.showAd = function () {
	start();
};

function start() {
	TweenLite.defaultEase = Power2.easeOut;
	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });
	// tl.set(".t1",  {opacity:0} )	

	tl.add(flicker(".t1"), "+=.5");
	tl.to(".t1", .5, { opacity: 0 }, "+=2");

	tl.from([".t2", ".bg2"], .5, { opacity: 0 });
	tl.add(flicker(".t2"), "+=.8");
	tl.to([".t2"], .3, { opacity: 0 }, "+=3");

	tl.from(".t3", .3, { opacity: 0 }, "+=.1");

	tl.add("end");
	tl.from(".cta", .3, { opacity: 0 }, "end");
	tl.from(".legal", .3, { opacity: 0 }, "end");

	tl.from(".footer", .3, { opacity: 0 }, "end");

	tl.to(".logo", .3, { y: 0 }, "end");
}

function flicker(el) {
	var tl = new TimelineMax({ repeat: 5 });
	tl.to(el, .015, { opacity: 0 });
	tl.to(el, .01, { opacity: 1 });

	// const tl2 = new TimelineMax({repeat:1, repeatDelay:2})
	// tl2.add(tl)
	return tl;
}

module.exports = {};

},{"../../_common/js/dc.js":1}]},{},[2])


//# sourceMappingURL=main.js.map