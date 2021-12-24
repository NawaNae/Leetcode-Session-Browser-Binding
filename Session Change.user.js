// ==UserScript==
// @name         Session Change
// @namespace    https://nawanae.github.io/Leetcode-Session-Browser-Binding/
// @version      1.1
// @namespace    https://nawanae.github.io/Leetcode-Session-Browser-Binding/Session Change.user.js
// @updateURL    https://nawanae.github.io/Leetcode-Session-Browser-Binding/Session Change.user.js
// @description  Change/Select browser session at Leetcode.com/session/
// @author       NawaNawa
// @match        https://leetcode.com/session/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var getActiveElement = () => {
    for(var a of document.querySelectorAll("span[class*='session-name']"))
        if(a.innerText.search("Active")!=-1)
            return a;
    };
    var getActiveTitle = () => {
        return getActiveElement().title;
    };
    var delayLastpage = ()=>{setTimeout(()=>{
            history.back();
        },200);}
     var main = () =>
    {
        let sessionStorage = localStorage.getItem("session");
        if(! sessionStorage || sessionStorage=='undefined' )
        {
            alert("select a section ");
            for(let e of document.querySelectorAll("span[class*='session-name']"))e.addEventListener('click',function(e)
            {
                localStorage.setItem("session",this.title);
                delayLastpage();
            });
        }
        else
        {
            document.querySelector(`span[title='${localStorage.getItem("session")}']`).click();
            delayLastpage();
        }
        

    }
    var tid = setInterval(()=>{
        var sessionE = document.querySelector("span[class*='session-name']");
        if(sessionE)
        {
            clearInterval(tid);
            main();

        }

    },200);





    // Your code here...
})();