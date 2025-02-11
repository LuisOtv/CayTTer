chrome.runtime.onMessage.addListener((message) => {
	if (message.action === "toggleBlueUsers") {
		if (message.hide) {
			document.styleSheets[0].insertRule('[data-testid="tweet"]:has([data-testid="icon-verified"]) { display: none !important; }', 0);
		} else {
			Array.from(document.styleSheets[0].cssRules).forEach((rule, index) => {
				if (rule.cssText.includes('data-testid="icon-verified"')) {
					document.styleSheets[0].deleteRule(index);
				}
			});
		}
	} else if (message.action === "toggleSquareImages") {
		if (message.hide) {
			document.styleSheets[0].insertRule(".r-sdzlij{border-radius: 0px !important}", 0);
		} else {
			Array.from(document.styleSheets[0].cssRules).forEach((rule, index) => {
				if (rule.cssText.includes(".r-sdzlij")) {
					document.styleSheets[0].deleteRule(index);
				}
			});
		}
	} else if (message.action === "toggleHome") {
		if (message.hide) {
			document.styleSheets[0].insertRule('a[href*="/home"] { display: none !important; }', 0);
		} else {
			Array.from(document.styleSheets[0].cssRules).forEach((rule, index) => {
				if (rule.cssText.includes('a[href*="/home"]')) {
					document.styleSheets[0].deleteRule(index);
				}
			});
		}
	} else if (message.action === "toggleSearch") {
		if (message.hide) {
			document.styleSheets[0].insertRule('a[href*="/explore"] { display: none !important; }', 0);
		} else {
			Array.from(document.styleSheets[0].cssRules).forEach((rule, index) => {
				if (rule.cssText.includes('a[href*="/explore"]')) {
					document.styleSheets[0].deleteRule(index);
				}
			});
		}
	} else if (message.action === "toggleNotification") {
		if (message.hide) {
			document.styleSheets[0].insertRule('a[href="/notifications"] { display: none !important; }', 0);
		} else {
			Array.from(document.styleSheets[0].cssRules).forEach((rule, index) => {
				if (rule.cssText.includes('a[href="/notifications"]')) {
					document.styleSheets[0].deleteRule(index);
				}
			});
		}
	} else if (message.action === "toggleDMs") {
		if (message.hide) {
			document.styleSheets[0].insertRule('a[href="/messages"] { display: none !important; }', 0);
		} else {
			Array.from(document.styleSheets[0].cssRules).forEach((rule, index) => {
				if (rule.cssText.includes('a[href="/messages"]')) {
					document.styleSheets[0].deleteRule(index);
				}
			});
		}
	} else if (message.action === "toggleGrok") {
		if (message.hide) {
			document.styleSheets[0].insertRule('a[href="/i/grok"] { display: none !important; }', 0);
		} else {
			Array.from(document.styleSheets[0].cssRules).forEach((rule, index) => {
				if (rule.cssText.includes('a[href="/i/grok"]')) {
					document.styleSheets[0].deleteRule(index);
				}
			});
		}
	} else if (message.action === "toggleBookmark") {
		if (message.hide) {
			document.styleSheets[0].insertRule('a[href="/i/bookmarks"] { display: none !important; }', 0);
		} else {
			Array.from(document.styleSheets[0].cssRules).forEach((rule, index) => {
				if (rule.cssText.includes('a[href="/i/bookmarks"]')) {
					document.styleSheets[0].deleteRule(index);
				}
			});
		}
	} else if (message.action === "toggleCommunity") {
		if (message.hide) {
			document.styleSheets[0].insertRule('a[href*="/communities"] { display: none !important; }', 0);
		} else {
			Array.from(document.styleSheets[0].cssRules).forEach((rule, index) => {
				if (rule.cssText.includes('a[href*="/communities"]')) {
					document.styleSheets[0].deleteRule(index);
				}
			});
		}
	} else if (message.action === "togglePremium") {
		if (message.hide) {
			document.styleSheets[0].insertRule('a[href="/i/premium_sign_up"] { display: none !important; }', 0);
		} else {
			Array.from(document.styleSheets[0].cssRules).forEach((rule, index) => {
				if (rule.cssText.includes('a[href="/i/premium_sign_up"]')) {
					document.styleSheets[0].deleteRule(index);
				}
			});
		}
	} else if (message.action === "toggleVerified") {
		if (message.hide) {
			document.styleSheets[0].insertRule('a[href="/i/verified-orgs-signup"] { display: none !important; }', 0);
		} else {
			Array.from(document.styleSheets[0].cssRules).forEach((rule, index) => {
				if (rule.cssText.includes('a[href="/i/verified-orgs-signup"]')) {
					document.styleSheets[0].deleteRule(index);
				}
			});
		}
	} else if (message.action === "toggleNotes") {
		if (message.hide) {
			document.styleSheets[0].insertRule('a[href="/i/communitynotes"] { display: none !important; }', 0);
		} else {
			Array.from(document.styleSheets[0].cssRules).forEach((rule, index) => {
				if (rule.cssText.includes('a[href="/i/communitynotes"]')) {
					document.styleSheets[0].deleteRule(index);
				}
			});
		}
	} else if (message.action === "toggleProfile") {
		if (message.hide) {
			document.styleSheets[0].insertRule('a[href="/i/profile"] { display: none !important; }', 0);
		} else {
			Array.from(document.styleSheets[0].cssRules).forEach((rule, index) => {
				if (rule.cssText.includes('a[href="/i/profile"]')) {
					document.styleSheets[0].deleteRule(index);
				}
			});
		}
	} else if (message.action === "toggleMore") {
		if (message.hide) {
			document.styleSheets[0].insertRule('[data-testid="AppTabBar_More_Menu"] { display: none !important; }', 0);
		} else {
			Array.from(document.styleSheets[0].cssRules).forEach((rule, index) => {
				if (rule.cssText.includes('[data-testid="AppTabBar_More_Menu"]')) {
					document.styleSheets[0].deleteRule(index);
				}
			});
		}
	} else if (message.action === "mainColorChange") {
		document.documentElement.style.setProperty("--main-color", message.color);
	} else if (message.action === "secondaryColorChange") {
		document.documentElement.style.setProperty("--secondary-color", message.color);
	} else if (message.action === "highlightColorChange") {
		document.documentElement.style.setProperty("--highlight-color", message.color);
	}
});
// Load state on page open
chrome.storage.sync.get(["mainColor", "hideBlueUsers", "squareImages", "hideHome", "hideSearch", "hideNotification", "hideDMs", "hideGrok", "hideBookmark", "hideCommunity", "hidePremium", "hideVerified", "hideNotes", "hideProfile", "hideMore"], (data) => {
	// Apply each setting based on the stored values
	if (data.hideBlueUsers) {
		document.styleSheets[0].insertRule('[data-testid="tweet"]:has([data-testid="icon-verified"]) { display: none !important; }', 0);
	}
	if (data.squareImages) {
		document.styleSheets[0].insertRule(".r-sdzlij { border-radius: 0px !important; }", 0);
	}
	if (data.hideHome) {
		document.styleSheets[0].insertRule('a[href*="/home"] { display: none !important; }', 0);
	}
	if (data.hideSearch) {
		document.styleSheets[0].insertRule('a[href*="/explore"] { display: none !important; }', 0);
	}
	if (data.hideNotification) {
		document.styleSheets[0].insertRule('a[href="/notifications"] { display: none !important; }', 0);
	}
	if (data.hideDMs) {
		document.styleSheets[0].insertRule('a[href="/messages"] { display: none !important; }', 0);
	}
	if (data.hideGrok) {
		document.styleSheets[0].insertRule('a[href="/i/grok"] { display: none !important; }', 0);
	}
	if (data.hideBookmark) {
		document.styleSheets[0].insertRule('a[href="/i/bookmarks"] { display: none !important; }', 0);
	}
	if (data.hideCommunity) {
		document.styleSheets[0].insertRule('a[href*="/communities"] { display: none !important; }', 0);
	}
	if (data.hidePremium) {
		document.styleSheets[0].insertRule('a[href="/i/premium_sign_up"] { display: none !important; }', 0);
	}
	if (data.hideVerified) {
		document.styleSheets[0].insertRule('a[href="/i/verified-orgs-signup"] { display: none !important; }', 0);
	}
	if (data.hideNotes) {
		document.styleSheets[0].insertRule('a[href="/i/communitynotes"] { display: none !important; }', 0);
	}
	if (data.hideProfile) {
		document.styleSheets[0].insertRule('a[href="/i/profile"] { display: none !important; }', 0);
	}
	if (data.hideMore) {
		document.styleSheets[0].insertRule('[data-testid="AppTabBar_More_Menu"] { display: none !important; }', 0);
	}
	if (data.mainColor) {
		document.documentElement.style.setProperty("--main-color", data.mainColor);
	}
	if (data.secondaryColor) {
		document.documentElement.style.setProperty("--secondary-color", data.secondaryColor);
	}
	if (data.highlightColor) {
		document.documentElement.style.setProperty("--highlight-color", data.highlightColor);
	}
});
