document.addEventListener("DOMContentLoaded", function () {
	const blue = document.getElementById("blueuser");
	const square = document.getElementById("squared");

	// verify if twitter is open
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		if (!tabs.length || !tabs[0].url || !tabs[0].url.includes("x.com")) {
			return;
		}

		// Load state
		chrome.storage.sync.get("hideBlueUsers", (data) => {
			blue.checked = data.hideBlueUsers || false;
		});
		chrome.storage.sync.get("squareImages", (data) => {
			square.checked = data.squareImages || false;
		});

		// Event listeners for checkboxes
		blue.addEventListener("change", function () {
			chrome.storage.sync.set({ hideBlueUsers: blue.checked });
			chrome.tabs.sendMessage(tabs[0].id, {
				action: "toggleBlueUsers",
				hide: blue.checked,
			});
		});

		square.addEventListener("change", function () {
			chrome.storage.sync.set({ squareImages: square.checked });
			chrome.tabs.sendMessage(tabs[0].id, {
				action: "toggleSquareImages",
				hide: square.checked,
			});
		});
	});
});
