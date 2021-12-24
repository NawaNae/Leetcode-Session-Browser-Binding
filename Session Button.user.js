// ==UserScript==
// @name         Session Button
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Show session buttons in nav bar
// @author       NawaNawa
// @match        https://leetcode.com/*
// @icon         https://www.google.com/s2/favicons?domain=leetcode.com
// @require      https://nawanae.github.io/Leetcode-Session-Browser-Binding/src/leetCodeApi.js
// @grant        none
// ==/UserScript==

(async function() {
    'use strict';
    console.log(API);
    var callback = async function()
    {
        var nav = document.querySelector("div[class*='navbar-left-container'");
        var reset = document.querySelectorAll("div[class*='nav-item-container']")[1].cloneNode(true);
        var link2 = reset.querySelector("a");
        link2.innerText = "🖋️Session";
        link2.href = "/session/";
        link2.title = "re-select session of browser"
        link2.addEventListener("click", function(e){
            e.preventDefault();
            localStorage.removeItem("session");
            location.href=this.href;
        });
        nav.append(reset);


        var switchBtn = document.querySelectorAll("div[class*='nav-item-container']")[1].cloneNode(true);
        var link = switchBtn.querySelector("a");
        link.href = "#";
        link.innerText = `${API.leetCodeProgress.sessionName}`;
        let sessionStorage = localStorage.getItem("session");
        if(sessionStorage !== 'undefined' && sessionStorage !== null)
            if(API.leetCodeProgress.sessionName!=sessionStorage )
                link.innerText += `➡${sessionStorage}`;

        link.title = "change to browser session"
        switchBtn.addEventListener("click",function(e){
            if(sessionStorage !== 'undefined' && sessionStorage !== null)
            {
                API.changeSessionByName(sessionStorage);
                link.innerText = sessionStorage;
            }
            else
                alert("Please set browser session by 🖋️Session first");

        });
        nav.append(switchBtn);



    }
    var tid = setInterval(()=>{
        var nav = document.querySelector("div[class*='navbar-left-container'");

        if(nav&&API.leetCodeProgress.sessionName)
        {
            clearInterval(tid);
            callback();

        }

    },200);


    // Your code here...
})();