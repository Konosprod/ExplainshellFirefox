chrome.contextMenus.create({
    id: "explain-search",
    title: "See on ExplainShell",
    contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
    if(info.menuItemId == "explain-search") {
        searchJisho(info.selectionText);
    }
});

function searchJisho(data) {
    browser.tabs.create({url:'http://www.explainshell.com/explain?cmd='+data});
}
