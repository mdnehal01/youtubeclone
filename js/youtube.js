function openNav() {
  document.getElementById("mySidenav-sm").style.width = "0px";
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("bars").innerHTML='<span class="material-symbols-outlined" style="margin-top: 4px; margin-left: 4px; font-size: 30px;" onclick="closeNav()"> close </span>';
  }
  
function closeNav() {
    document.getElementById("bars").innerHTML='<span class="material-symbols-outlined" style="margin-top: 4px; margin-left: 4px; font-size: 30px;" onclick="openNav()"> menu </span>';
    document.getElementById("mySidenav-sm").style.width = "80px";
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("main").style.marginLeft= "80px";
    
  }



