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
    chrome.storage.sync.get("hideHome", (data) => {
      home.checked = data.hideHome || false;
    });
    chrome.storage.sync.get("hideSearch", (data) => {
      search.checked = data.hideSearch || false;
    });
    chrome.storage.sync.get("hideDMs", (data) => {
      search.checked = data.hideSearch || false;
    });
    chrome.storage.sync.get("hideNotification", (data) => {
      notification.checked = data.hideNotification || false;
    });
    chrome.storage.sync.get("hideGrok", (data) => {
      grok.checked = data.hideGrok || false;
    });
    chrome.storage.sync.get("hideBookmark", (data) => {
      bookmark.checked = data.hideBookmark || false;
    });
    chrome.storage.sync.get("hideCommunity", (data) => {
      communities.checked = data.hideCommunity || false;
    });
    chrome.storage.sync.get("hidePremium", (data) => {
      premium.checked = data.hidePremium || false;
    });
    chrome.storage.sync.get("hideVerified", (data) => {
      verified.checked = data.hideVerified || false;
    });
    chrome.storage.sync.get("hideNotes", (data) => {
      notes.checked = data.hideNotes || false;
    });
    chrome.storage.sync.get("hideProfile", (data) => {
      profile.checked = data.hideProfile || false;
    });
    chrome.storage.sync.get("hideMore", (data) => {
      more.checked = data.hideMore || false;
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

    home.addEventListener("change", function () {
      chrome.storage.sync.set({ hideHome: home.checked });
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "toggleHome",
        hide: home.checked,
      });
    });

    search.addEventListener("change", function () {
      chrome.storage.sync.set({ hideSearch: search.checked });
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "toggleSearch",
        hide: search.checked,
      });
    });

    notification.addEventListener("change", function () {
      chrome.storage.sync.set({ hideNotification: notification.checked });
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "toggleNotification",
        hide: notification.checked,
      });
    });

    dms.addEventListener("change", function () {
      chrome.storage.sync.set({ hideSearch: dms.checked });
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "toggleDMs",
        hide: dms.checked,
      });
    });

    grok.addEventListener("change", function () {
      chrome.storage.sync.set({ hideGrok: grok.checked });
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "toggleGrok",
        hide: grok.checked,
      });
    });

    bookmark.addEventListener("change", function () {
      chrome.storage.sync.set({ hideGrok: bookmark.checked });
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "toggleBookmark",
        hide: bookmark.checked,
      });
    });

    communities.addEventListener("change", function () {
      chrome.storage.sync.set({ hideCommunity: communities.checked });
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "toggleCommunity",
        hide: communities.checked,
      });
    });

    premium.addEventListener("change", function () {
      chrome.storage.sync.set({ hidePremium: premium.checked });
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "togglePremium",
        hide: premium.checked,
      });
    });

    verified.addEventListener("change", function () {
      chrome.storage.sync.set({ hideVerified: verified.checked });
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "toggleVerified",
        hide: verified.checked,
      });
    });

    notes.addEventListener("change", function () {
      chrome.storage.sync.set({ hideNotes: notes.checked });
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "toggleNotes",
        hide: notes.checked,
      });
    });

    profile.addEventListener("change", function () {
      chrome.storage.sync.set({ hideProfile: profile.checked });
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "toggleProfile",
        hide: profile.checked,
      });
    });

    more.addEventListener("change", function () {
      chrome.storage.sync.set({ hideMore: more.checked });
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "toggleMore",
        hide: more.checked,
      });
    });
  });
});
