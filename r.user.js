// ==UserScript==
// @name        R for Reddit
// @namespace   https://github.com/rayzru/r-for-reddit
// @match    	http://*reddit.com/*
// @match	https://*reddit.com/*
// @version     0.0.1
// @description A simple Hello World user script
// @run-at      document-start
// @grant       none

// lifted from RES: https://github.com/honestbleeps/Reddit-Enhancement-Suite.git
var head = document.getElementsByTagName("head")[0];
var subredditStyleSheet = head.querySelector('link[title=applied_subreddit_stylesheet]');
if (!subredditStyleSheet) subredditStyleSheet = head.querySelector('style[title=applied_subreddit_stylesheet]');
if (!subredditStyleSheet) subredditStyleSheet = head.querySelector('style[data-apng-original-href]'); // apng extension fix (see #1076)
if (subredditStyleSheet) {
	subredditStyleSheet.parentNode.removeChild(subredditStyleSheet);
}