// ==UserScript==
// @name        R for Reddit
// @namespace   https://www.reddit.com/
// @description A simple Hello World user script
// @match       http://*.reddit.com/*
// @version     1.0.0
// @grant       none

// lifted from RES: https://github.com/honestbleeps/Reddit-Enhancement-Suite.git
var head = document.getElementsByTagName("head")[0];
var subredditStyleSheet = head.querySelector('link[title=applied_subreddit_stylesheet]');
if (!subredditStyleSheet) subredditStyleSheet = head.querySelector('style[title=applied_subreddit_stylesheet]');
if (!subredditStyleSheet) subredditStyleSheet = head.querySelector('style[data-apng-original-href]'); // apng extension fix (see #1076)
if (subredditStyleSheet) {
	subredditStyleSheet.parentNode.removeChild(subredditStyleSheet);
}