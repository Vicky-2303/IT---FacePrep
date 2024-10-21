
function A(){
 var a=document.querySelector(".dropdown");
 var b=a.value;// obj.value is used to read the dropdown value properties.
 /*document.querySelector("#output").textContent=b; to print in the web what we have read in the dropdown box */
 if(b=="books"){
   alert("Page doesn't exist");
 }
 else if(b=="mobiles"){
   location.replace("mobiles.html");//to re-direct to the pages.
 }
 else if(b=="computer"){
   location.replace("computer.html");
 }
 else if(b=="clothing"){
  alert("Page doesn't exist");
 }
 else if(b=="all"){
  location.replace("home.html");
 }
 else if(b=="beauty"){
  alert("Page doesn't exist");
 }
 else{
   location.replace("watches.html");
 }
}