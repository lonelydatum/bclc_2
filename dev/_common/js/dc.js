var creative = {};

creative.init = function() {
  console.log('dynamicDataAvailable');
  creative.setupDOMElements();

  // Check if Enabler is initialized.
  if (Enabler.isInitialized()) {
    // Check if ad is visible to user.
    if (Enabler.isVisible()) {
      creative.enablerInitHandler();
    } else {
      Enabler.addEventListener(
        studio.events.StudioEvent.VISIBLE,
        creative.enablerInitHandler
      );
    }
  } else {
    Enabler.addEventListener(
      studio.events.StudioEvent.INIT,
      creative.enablerInitHandler
    );
  }
};

creative.setupDOMElements = function() {
  creative.domElements = {};
  creative.domElements.exit_button = document.getElementById("pn-bg-exit");
  creative.domElements.backgroundImage = document.getElementById(
    "pn-frame1-bg"
  );
  creative.domElements.casino_img = document.getElementById("pn-casino-image");
};

creative.dynamicDataAvailable = function() {

  // NOTE: Here starts the pasted section from Studio.
  // Dynamic Content variables and sample values
  Enabler.setProfileId(10212371);
  var devDynamicContent = {};

  devDynamicContent.BCLC_Casinos__Fall_2018__Dynamic_Feed_General__300x250 = [
    {}
  ];
  devDynamicContent.BCLC_Casinos__Fall_2018__Dynamic_Feed_General__300x250[0]._id = 0;
  devDynamicContent.BCLC_Casinos__Fall_2018__Dynamic_Feed_General__300x250[0].Unique_ID = 245;
  devDynamicContent.BCLC_Casinos__Fall_2018__Dynamic_Feed_General__300x250[0].Reporting_Label =
    "bclc_casinos_2018_bb_cascades";
  devDynamicContent.BCLC_Casinos__Fall_2018__Dynamic_Feed_General__300x250[0].City =
    "Langley";
  devDynamicContent.BCLC_Casinos__Fall_2018__Dynamic_Feed_General__300x250[0].Casino_Name =
    "Cascades Casino";
  devDynamicContent.BCLC_Casinos__Fall_2018__Dynamic_Feed_General__300x250[0].Casino_Frame_Image = {};
  devDynamicContent.BCLC_Casinos__Fall_2018__Dynamic_Feed_General__300x250[0].Casino_Frame_Image.Type =
    "file";
  devDynamicContent.BCLC_Casinos__Fall_2018__Dynamic_Feed_General__300x250[0].Casino_Frame_Image.Url = "https://s0.2mdn.net/ads/richmedia/studio/39901982/39901982_20180921145245834_frame-2-casino-cascades.png";
    https://www.google.com/doubleclick/studio/#assets:accountId=39901982&folderId=61990835
  devDynamicContent.BCLC_Casinos__Fall_2018__Dynamic_Feed_General__300x250[0].Exit_URL = {};
  devDynamicContent.BCLC_Casinos__Fall_2018__Dynamic_Feed_General__300x250[0].Exit_URL.Url =
    "http://casinos.bclc.com/whats-new/no-two-nights-are-the-same";
  devDynamicContent.BCLC_Casinos__Fall_2018__Dynamic_Feed_General__300x250[0].Default = false;
  devDynamicContent.BCLC_Casinos__Fall_2018__Dynamic_Feed_General__300x250[0].Active = true;

  Enabler.setDevDynamicContent(devDynamicContent);

  // NOTE: Here ends the pasted section from Studio.

  // Variable "dynamicContent" gets automatically initialized by Enabler.
  // Change "Travel_Packaged_Solutions_AB" to the name of your dynamic elements.
  creative.dynamicData =
    dynamicContent.BCLC_Casinos__Fall_2018__Dynamic_Feed_General__300x250[0];

  // Set your dynamic exit url so it can be used in initial.js.
  creative.dynamicExitUrl = creative.dynamicData.Exit_URL.Url;
};

creative.enablerInitHandler = function(event) {
  creative.dynamicDataAvailable();

  creative.domElements.exit_button.addEventListener(
    "click",
    creative.exitClickHandler
  );

  if (Enabler.isPageLoaded()) {
    creative.pageLoadHandler();
  } else {
    Enabler.addEventListener(
      studio.events.StudioEvent.PAGE_LOADED,
      creative.pageLoadHandler
    );
  }
};

creative.exitClickHandler = function(event) {
  Enabler.exit("exit", creative.dynamicExitUrl);
};

creative.pageLoadHandler = function(event) {
  creative.domElements.casino_img.src =
    creative.dynamicData.Casino_Frame_Image.Url;
  creative.showAd();
};

window.addEventListener('load', creative.init.bind(creative));

// Handle Animation
// creative.showAd = function() {
//   // add your animation js here
// };




function flicker(el){
  const tl = new TimelineMax({repeat:3})
  tl.to(el, .035, {opacity:.5})
  tl.to(el, .03, {opacity:1})

  // const tl2 = new TimelineMax({repeat:1, repeatDelay:2})
  // tl2.add(tl)
  return tl
}



export {creative, flicker}


