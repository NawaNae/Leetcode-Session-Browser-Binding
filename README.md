Leecode Session Browser Binding
---
## Introduction
This project consists of 3 tampermonkey scripts, for the sack of providing leetcode session switch easier in different browser by click one button.
In short, ``` Different Browser Different Leetcode Session ```
<br>
You can use different pratice session in different client (notebook, PC)
## Requirement
Tampermonkey should be installed in your browser
## Installation
1. import 3 js scripts into your tempermonkey
2. switch on these scripts
## Set up 
For frist time please set default session by clicking [🖋️Session] button on navigation bar of leetcode.

## Usage
There are two button on your leetcode navigation bar will be added after installed the scripts
### 1. BrowserSessionName ( Set Leetcode Session to Browser Setting )
This button will show leetcode session now, if session is not equal to your browser setting then it will show [session now➡BrowserSessionName]
After click this button it will set the leetcode session to browser session, selected by [🖋️Session], and redirect the page.
### 2. 🖋️Session ( Set Browser Leetcode Session)
Redirect to session selection page, and select one as the session of this browser.
After select, [BrowserSessionName] will set to your selection every time.

### 3. by BrowserSessionName ( Force submit code by browser Session)
'''only show in problem solving pages'''
Click then change to browser session and submit code


## Change Log
### 1.0
*  Set session/Select browser session by one click
### 1.1
*   Show Session name on nav bar
*   Force submit code by browser session (if the session chagne when you writting code)
### 1.1.1
*   Update location provided
  