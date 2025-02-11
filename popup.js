document.addEventListener("DOMContentLoaded", function () {
	const blue = document.getElementById("blueuser");
	const square = document.getElementById("squared");
	const home = document.getElementById("home");
	const search = document.getElementById("search");
	const notification = document.getElementById("notifications");
	const dms = document.getElementById("dms");
	const grok = document.getElementById("grok");
	const bookmark = document.getElementById("bookmark");
	const communities = document.getElementById("community");
	const premium = document.getElementById("premium");
	const verified = document.getElementById("verified");
	const notes = document.getElementById("notes");
	const profile = document.getElementById("profile");
	const more = document.getElementById("more");
	const maincolor = document.getElementById("maincolor");
	const secondarycolor = document.getElementById("secondarycolor");
	const highlightcolor = document.getElementById("highlightcolor");

	// Verify if twitter is open
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		if (!tabs.length || !tabs[0].url || !tabs[0].url.includes("x.com")) {
			return;
		}

		// Load state
		chrome.storage.sync.get(["hideBlueUsers", "squareImages", "hideHome", "hideSearch", "hideDMs", "hideNotification", "hideGrok", "hideBookmark", "hideCommunity", "hidePremium", "hideVerified", "hideNotes", "hideProfile", "hideMore", "maincolor", "secondarycolor", "highlightcolor"], (data) => {
			blue.checked = data.hideBlueUsers || false;
			square.checked = data.squareImages || false;
			home.checked = data.hideHome || false;
			search.checked = data.hideSearch || false;
			notification.checked = data.hideNotification || false;
			dms.checked = data.hideDMs || false;
			grok.checked = data.hideGrok || false;
			bookmark.checked = data.hideBookmark || false;
			communities.checked = data.hideCommunity || false;
			premium.checked = data.hidePremium || false;
			verified.checked = data.hideVerified || false;
			notes.checked = data.hideNotes || false;
			profile.checked = data.hideProfile || false;
			more.checked = data.hideMore || false;
			maincolor.value = data.maincolor || "";
			secondarycolor.value = data.secondarycolor || "";
			highlightcolor.value = data.highlightcolor || "";
		});

		// Event listeners for checkboxes

		maincolor.addEventListener("input", function () {
			chrome.storage.sync.set({ maincolor: maincolor.value }, () => {
				console.log("mainColor saved:", maincolor.value);
			});
			chrome.tabs.sendMessage(tabs[0].id, {
				action: "mainColorChange",
				color: maincolor.value,
			});
		});

		secondarycolor.addEventListener("input", function () {
			chrome.storage.sync.set({ secondarycolor: secondarycolor.value }, () => {
				console.log("secondaryColor saved:", secondarycolor.value);
			});
			chrome.tabs.sendMessage(tabs[0].id, {
				action: "secondaryColorChange",
				color: secondarycolor.value,
			});
		});

		highlightcolor.addEventListener("input", function () {
			chrome.storage.sync.set({ highlightcolor: highlightcolor.value }, () => {
				console.log("highlightColor saved:", highlightcolor.value);
			});
			chrome.tabs.sendMessage(tabs[0].id, {
				action: "highlightColorChange",
				color: highlightcolor.value,
			});
		});

		square.addEventListener("change", function () {
			chrome.storage.sync.set({ squareImages: square.checked }, () => {
				console.log("squareImages saved:", square.checked);
			});
			chrome.tabs.sendMessage(tabs[0].id, {
				action: "toggleSquareImages",
				hide: square.checked,
			});
		});

		home.addEventListener("change", function () {
			chrome.storage.sync.set({ hideHome: home.checked }, () => {
				console.log("hideHome saved:", home.checked);
			});
			chrome.tabs.sendMessage(tabs[0].id, {
				action: "toggleHome",
				hide: home.checked,
			});
		});

		search.addEventListener("change", function () {
			chrome.storage.sync.set({ hideSearch: search.checked }, () => {
				console.log("hideSearch saved:", search.checked);
			});
			chrome.tabs.sendMessage(tabs[0].id, {
				action: "toggleSearch",
				hide: search.checked,
			});
		});

		notification.addEventListener("change", function () {
			chrome.storage.sync.set({ hideNotification: notification.checked }, () => {
				console.log("hideNotification saved:", notification.checked);
			});
			chrome.tabs.sendMessage(tabs[0].id, {
				action: "toggleNotification",
				hide: notification.checked,
			});
		});

		dms.addEventListener("change", function () {
			chrome.storage.sync.set({ hideDMs: dms.checked }, () => {
				console.log("hideDMs saved:", dms.checked);
			});
			chrome.tabs.sendMessage(tabs[0].id, {
				action: "toggleDMs",
				hide: dms.checked,
			});
		});

		grok.addEventListener("change", function () {
			chrome.storage.sync.set({ hideGrok: grok.checked }, () => {
				console.log("hideGrok saved:", grok.checked);
			});
			chrome.tabs.sendMessage(tabs[0].id, {
				action: "toggleGrok",
				hide: grok.checked,
			});
		});

		bookmark.addEventListener("change", function () {
			chrome.storage.sync.set({ hideBookmark: bookmark.checked }, () => {
				console.log("hideBookmark saved:", bookmark.checked);
			});
			chrome.tabs.sendMessage(tabs[0].id, {
				action: "toggleBookmark",
				hide: bookmark.checked,
			});
		});

		communities.addEventListener("change", function () {
			chrome.storage.sync.set({ hideCommunity: communities.checked }, () => {
				console.log("hideCommunity saved:", communities.checked);
			});
			chrome.tabs.sendMessage(tabs[0].id, {
				action: "toggleCommunity",
				hide: communities.checked,
			});
		});

		premium.addEventListener("change", function () {
			chrome.storage.sync.set({ hidePremium: premium.checked }, () => {
				console.log("hidePremium saved:", premium.checked);
			});
			chrome.tabs.sendMessage(tabs[0].id, {
				action: "togglePremium",
				hide: premium.checked,
			});
		});

		verified.addEventListener("change", function () {
			chrome.storage.sync.set({ hideVerified: verified.checked }, () => {
				console.log("hideVerified saved:", verified.checked);
			});
			chrome.tabs.sendMessage(tabs[0].id, {
				action: "toggleVerified",
				hide: verified.checked,
			});
		});

		notes.addEventListener("change", function () {
			chrome.storage.sync.set({ hideNotes: notes.checked }, () => {
				console.log("hideNotes saved:", notes.checked);
			});
			chrome.tabs.sendMessage(tabs[0].id, {
				action: "toggleNotes",
				hide: notes.checked,
			});
		});

		profile.addEventListener("change", function () {
			chrome.storage.sync.set({ hideProfile: profile.checked }, () => {
				console.log("hideProfile saved:", profile.checked);
			});
			chrome.tabs.sendMessage(tabs[0].id, {
				action: "toggleProfile",
				hide: profile.checked,
			});
		});

		more.addEventListener("change", function () {
			chrome.storage.sync.set({ hideMore: more.checked }, () => {
				console.log("hideMore saved:", more.checked);
			});
			chrome.tabs.sendMessage(tabs[0].id, {
				action: "toggleMore",
				hide: more.checked,
			});
		});
	});
});
