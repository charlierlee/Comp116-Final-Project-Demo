/***************************************
 *
 *      background.js
 *      by Gregory Pickart
 *      May 3, 2018
 *
 *      Script that runs in the background of the Comp116 Final Project 
 *      demonstration chrome extension. Injects the file 'inject.js' into 
 *      every active webpage on the browser. 
 * 
 ***************************************/

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
        if (changeInfo.status == 'complete' && tab.active) {
                chrome.tabs.executeScript(tab.ib, {
                        file: 'inject.js'
                });
        }
})