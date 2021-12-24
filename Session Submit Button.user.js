// ==UserScript==
// @name         Session Submit Button
// @namespace    https://nawanae.github.io/Leetcode-Session-Browser-Binding/
// @version      1.1
// @namespace    https://nawanae.github.io/Leetcode-Session-Browser-Binding/Session Submit Button.user.js
// @updateURL    https://nawanae.github.io/Leetcode-Session-Browser-Binding/Session Submit Button.user.js
// @description  Force Submit Code by Browser Session
// @author       NawaNawa
// @match        https://leetcode.com/problems/*/
// @icon         https://www.google.com/s2/favicons?domain=leetcode.com
// @require      https://nawanae.github.io/Leetcode-Session-Browser-Binding/src/leetCodeApi.js
// @grant        none
// ==/UserScript==

(async function() {
    'use strict';
    console.log(API);
    var callback = async function()
    {
        var orisubmitBtn = document.querySelector("button[data-cy='submit-code-btn']");
console.log(orisubmitBtn)
        let sessionStorage = localStorage.getItem("session");
        if(!orisubmitBtn || !sessionStorage || sessionStorage == 'undefined')return ;
        var btnContainer = orisubmitBtn.parentNode;
        var submitBtn = orisubmitBtn.cloneNode(true);

        
        submitBtn=submitBtn.cloneNode(true);
        submitBtn.innerText = `by ${sessionStorage}`;
        submitBtn.onclick = async function(e)
        {
            await API.changeSessionByName(sessionStorage);
            orisubmitBtn.click();
        };
        btnContainer.append(submitBtn);


    }
    var tid = setInterval(()=>{
        var orisubmitBtn = document.querySelector("button[data-cy='submit-code-btn']");

        if(orisubmitBtn)
        {
            clearInterval(tid);
            callback();

        }

    },200);


    // Your code here...
})();