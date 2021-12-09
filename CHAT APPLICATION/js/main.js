var data=
    {
        "message":{
            "profile1":["personal",["in","hi","06:40 AM"],["out","hello","06:41 AM"],["in","How are you?","06:42 AM"],["out","I am fine. See you soon.","06:40 AM"],["in","yes yes. i hope so.","06:40 AM"]],
            "profile2":["personal",["in","hello sir i will not be able to come to office due to my physical condition.","09:42 AM"],["out","Ok ok no problem.","10:41 AM"]],
            "profile3":["personal",["out","What is the status about the project?","10:41 AM"]],
            "profile4":["personal",["in","Hello, dipak How are you?","06:40 AM"],["out","Yes yes I am fine. you?","06:41 AM"],["in","Good","06:42 AM"]],
            "profile5":["personal",["in","Are you free?","06:40 AM"],["out","Yes yes","06:41 AM"],["in","lets go for shopping","06:42 AM"]],
            "profile6":["personal",["in","Are you in the meeting?","06:40 AM"],["out","No madam","06:41 AM"],["in","ok","06:42 AM"]],
            "profile7":["group",["group_in","Tomorrow is WFH for all.","02:36 PM","profile6"],["group_out","Work from home is boring.","02:37 PM","myprofile"]],
            "profile8":["personal",["in","hello sir i will not be able to come to office due to my physical condition.","09:42 AM"],["out","Contact with HR","10:41 AM"]]
        }
    };
var users={
    "x":[],"profile1":["Arpan Das"],"profile2":["Ananya Samanta"],"profile3":["Mamata Shee"],"profile4":["Subhendu Saha"],"profile5":["Sayani Paul"],"profile6":["Sonal Kaushol"],"profile7":["The Walkover Group"],"profile8":["Shreya Mondal"]
};
  function display_message(user)
  {
      for(let i=1;i<9;i++){
        document.getElementById("profile"+i).style.background = "rgb(23, 23, 23)";
      }
      document.getElementById(user).style.background = "rgb(68, 68, 68)";
      nav_content=`<img class="nav_image" src="./pic/`+user+`.jpg"><font class="nav_name">`+users[user][0]+`</font>`;
      document.getElementById('nav_left').innerHTML = nav_content;
      var message_length=data["message"][user].length;
      var display=``;
      if(data["message"][user][0]=="personal")
      {
        for(let i=1;i<message_length;i++)
        
            display+=`<div class="`+data["message"][user][i][0]+`">`+data["message"][user][i][1]+`<br><div class="time">`+data["message"][user][i][2]+`</div></div>`;
      }
      else
      {
        for(let i=1;i<message_length;i++)
            if(data["message"][user][i][0]=="group_out")
            {
                display+=`<div class="`+data["message"][user][i][0]+`">`+data["message"][user][i][1]+`<img height="30px" width="35px" class="group_chat_pic" src="./pic/`+data["message"][user][i][3]+`.jpg">`+`<br><div class="time">`+data["message"][user][i][2]+`</div></div>`;
            }
            else
            {
                display+=`<div class="`+data["message"][user][i][0]+`"><img height="30px" width="35px" class="group_chat_pic" src="./pic/`+data["message"][user][i][3]+`.jpg">`+data["message"][user][i][1]+`<br><div class="time">`+data["message"][user][i][2]+`</div></div>`;
            }
      }  
      document.getElementById('message').innerHTML = display;
  }
  function var1() {
    let menu_content = `<div class="nav">
            <a class="group_name btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            <font color="white">Walkover Inc.</font></a>
        </div>
        <div class="input-group mb-3">
            <input type="text" class="form-control search" placeholder="Search for members and c..." aria-label="Username" aria-describedby="basic-addon1" style="background-color: rgb(68, 68, 68);border-color: rgb(128,126,126);border-color: rgb(128, 126, 126);">
            <span class="input-group-text search-btn" id="basic-addon1" style="background-color: rgb(68, 68, 68); border-color: rgb(128,126,126);color: rgb(128,126,126);">+</span>
        </div>`; 
    for (let i = 1; i < 9; i++) {
        menu_content =menu_content + `<div class="profile" id="profile`+i+`" onclick="display_message('profile`+i+`');">
        <img class="image" src="./pic/profile`+i+`.jpg">
        `+users[`profile`+i][0]+`
        </div>`;
    }
    document.getElementById('menu').innerHTML = menu_content;
    display_message("profile1");
}
window.onload = var1;