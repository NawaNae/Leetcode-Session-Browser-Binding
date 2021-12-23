var LeetCodeApi = LeetCodeApi || {};
var API = LeetCodeApi; 
API.fetchLeetCodeProgress = async function () {
    console.log("Fetch LeetCode Data");
  
    let response = await fetch("https://leetcode.com/api/progress/all/", {
      headers: {
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest",
      },
      referrer: "https://leetcode.com/problemset/all/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "GET",
      mode: "cors",
      credentials: "include",
    });
  
    let leetCodeProgress = await response.json();
  
    if (leetCodeProgress.sessionName === "") {
      leetCodeProgress.sessionName = "Anonymous Session";
    }
  
    console.log(leetCodeProgress);
    return leetCodeProgress;
  }
  
  API.loadProgressData= async function () {
    API.leetCodeProgress = API.leetCodeProgress || {};
    API.leetCodeProgress.loading = true;

  
    try {
      latestProgress = await API.fetchLeetCodeProgress();
      API.leetCodeProgress = { ...latestProgress, loading: false };
      return API.leetCodeProgress;
  
    } catch (error) {
      console.error(error);
    }
  }
 API.changeSession = async function changeSession(sessionId) {
    try {
        let response = await fetch("https://leetcode.com/session/", {
          headers: {
            accept: "application/json, text/javascript, */*; q=0.01",
            "accept-language": "en-US,en;q=0.9,bn;q=0.8",
            "cache-control": "no-cache",
            "content-type": "application/json",
            pragma: "no-cache",
            "sec-ch-ua":
              '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest",
          },
          referrer: "https://leetcode.com/problemset/all/",
          referrerPolicy: "strict-origin-when-cross-origin",
          body: `{"func":"activate","target":${sessionId}}`,
          method: "PUT",
          mode: "cors",
          credentials: "include",
        });

        let data = await response.json();

        console.log("Change Session:");
        console.log(data);
      } catch (error) {
        console.error(`Error: ${error}`);
      }
  }
  API.changeSessionByName = async function changeSessionByName(name) {
      if(name===undefined) {console.error("please provide session name, anonymous = '' ");return 0;}
      name = name || "Anonymous Session";
      var sessionobj;
      var leetCodeProgress = API.leetCodeProgress;
      if(!leetCodeProgress)
      {    
          window.leetCodeProgress = leetCodeProgress = await API.fetchLeetCodeProgress();
      }
      if (leetCodeProgress&&leetCodeProgress.sessionList)
      {

        if(!(sessionobj=leetCodeProgress.sessionList.find((e)=>e.name==name)))
        {    console.error(`fail to load session called : ${name}`); return ;}
        console.log(`change to ${sessionobj.name}`);
        return await API.changeSession(sessionobj.id);
      }
      console.error("fail to chage session");
  }
  if(!API.leetCodeProgress)
    API.loadProgressData();