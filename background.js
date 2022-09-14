const defaultFilters = [
	"*://*.distraction.com/*",
	"*://*.web.whatsapp.com/*",
	"*://*.facebook.com/*",
	"*://*.discord.com/*",
	"*://*.reddit.com/*",
	"*://*.share.myjosh.in/*",
	"*://*.twitter.com/*",
    "*://*.youtube.com/*",
    "*://*.instagram.com/*",
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: defaultFilters },
    ["blocking"]
)