// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Add context menu click handler
chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu tree at install time.
chrome.runtime.onInstalled.addListener(function() {
  // Create a parent item
  chrome.contextMenus.create({"title": "Test parent item", "id": "parent"});
});

// The onClicked callback function.
function onClickHandler(info, tab) {
  if (info.menuItemId == "parent") {
    onepagify();
    console.log("radio item " + info.menuItemId +
                " was clicked.");
  } else {
    console.log("item " + info.menuItemId + " was clicked");
    console.log("info: " + JSON.stringify(info));
    console.log("tab: " + JSON.stringify(tab));
  }
};

function onepagify() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {exec: "onepagify"}, function(response) {
      // console.log(response.done);
    });
  });
}