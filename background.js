chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.query({ url: "*://news.ycombinator.com/*" }, (tabs) => {
    tabs.forEach((tab) => {
      injectContentScript(tab.id);
    });
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === "complete" &&
    tab.url.includes("news.ycombinator.com")
  ) {
    injectContentScript(tabId);
  }
    
});

function injectContentScript(tabId) {
  chrome.scripting
    .executeScript({
      target: { tabId: tabId },
      files: ["content.js"],
    })
    .catch((err) => console.error("Script injection failed:", err));
}
