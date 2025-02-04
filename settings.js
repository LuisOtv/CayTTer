chrome.runtime.onMessage.addListener((message) => {
	if (message.action === "toggleBlueUsers") {
		if (message.hide) {
			document.styleSheets[0].insertRule(
				'[data-testid="tweet"]:has([data-testid="icon-verified"]) { display: none !important; }',
				0
			);
		} else {
			Array.from(document.styleSheets[0].cssRules).forEach((rule, index) => {
				if (rule.cssText.includes('data-testid="icon-verified"')) {
					document.styleSheets[0].deleteRule(index);
				}
			});
		}
	} else if (message.action === "toggleSquareImages") {
		if (message.hide) {
			document.styleSheets[0].insertRule(
				".r-sdzlij{border-radius: 0px !important}",
				0
			);
		} else {
			Array.from(document.styleSheets[0].cssRules).forEach((rule, index) => {
				if (rule.cssText.includes(".r-sdzlij")) {
					document.styleSheets[0].deleteRule(index);
				}
			});
		}
	}
});

// load state on page open
chrome.storage.sync.get("hideBlueUsers", (data) => {
	if (data.hideBlueUsers) {
		document.styleSheets[0].insertRule(
			'[data-testid="tweet"]:has([data-testid="icon-verified"]) { display: none !important; }',
			0
		);
	}
	if (data.squareImages) {
		document.styleSheets[0].insertRule(".r-sdzlij{border-radius: 0px}", 0);
	}
});
