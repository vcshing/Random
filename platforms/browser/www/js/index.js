/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {

        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
		
     /*   var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
		*/

		app.adv();
		window.open = cordova.InAppBrowser.open;
        console.log('Received Event: ' + id);
    },
	adv: function(){
	
		  // Set AdMobAds options:
		  admob.setOptions({
			publisherId:          "ca-app-pub-3715336230214756/3701593022",  // Required
			interstitialAdId:	  "ca-app-pub-3715336230214756/5178326221",
			tappxIdAndroid:       "/120940746/Pub-13008-Android-8657",        // Optional
			tappxShare:           0.2  ,
			 bannerAtTop: false, // set to true, to put banner at top
			overlap: false, // set to true, to allow banner overlap webview
			offsetStatusBar: false, // set to true to avoid ios7 status bar overlap
			isTesting: false, // receiving test ads (do not test with real ads as your account will be banned)				// Optional
			autoShowBanner: true, // auto show banners ad when loaded
			autoShowInterstitial: true // auto show interstitials ad when loaded			// Optional
			
		  });

		  // Start showing banners (atomatic when autoShowBanner is set to true)
			admob.createBannerView();
		  // Request interstitial (will present automatically when autoShowInterstitial is set to true)
		  //admob.requestInterstitialAd();
		
	}
};

