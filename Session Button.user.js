// ==UserScript==
// @name         Session Button
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       NawaNawa
// @match        https://leetcode.com/*
// @icon         https://www.google.com/s2/favicons?domain=leetcode.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
     var callback = () =>
    {
    var nav = document.querySelector("div[class*='navbar-left-container'");
    var switchBtn = document.querySelectorAll("div[class*='nav-item-container']")[1].cloneNode(true);
    var link = switchBtn.querySelector("a");
    link.href = "/session/";
    link.innerText = "🔃Session";
    link.title = "change to browser session"
    nav.append(switchBtn);
    var reset = document.querySelectorAll("div[class*='nav-item-container']")[1].cloneNode(true);
    link = reset.querySelector("a");
    link.innerText = "🖋️Session";
    link.href = "/session/";
    link.title = "re-select session of browser"
    link.addEventListener("click", function(e){
e.preventDefault();
        localStorage.removeItem("session");
        location.href=this.href;
    });
    nav.append(reset)

    }
    var tid = setInterval(()=>{
        var nav = document.querySelector("div[class*='navbar-left-container'");
        if(nav)
        {
            clearInterval(tid);
            callback();

        }

    },200);


    // Your code here...
})();