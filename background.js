"use strict";

var url = 'https://twitter.com/*';

var useragent = "Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko"

function rewriteUA(e) {
		for (var header of e.requestHeaders) {
			if (header.name.toLowerCase() == "user-agent") {
				header.value = useragent;
			}
		console.log("aa")
		}
	return {requestHeaders: e.requestHeaders};
}

// clear twitter's cookies once on install. this is needed since the new design fucks with them.
function clearCookies() {
	var removing = browser.browsingData.removeCookies({
		hostnames: ["twitter.com"]
	});
	console.log("nopp")
}

// listeners

browser.webRequest.onBeforeSendHeaders.addListener(
	rewriteUA,
	{urls: [url]},
	["blocking", "requestHeaders"]
);
browser.runtime.onInstalled.addListener(clearCookies);