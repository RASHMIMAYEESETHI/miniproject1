console.log("Does this work?");
function openFn(){
  x = document.getElementById("para");
  x.className = "open";
}
function closeFn(){
  x = document.getElementById("para");
  x.className = "close";
}
function showPic(picture){
  document.getElementById('center').style.backgroundImage = "url(" + picture.src +")";
  document.getElementById('caption').innerHTML = picture.alt;
  document.getElementById('center').innerHTML = "";
}
function goBack(){
  document.getElementById('center').style.backgroundImage = "url('')";
  document.getElementById('center').innerHTML = "Preview <br><br> Hover mouse over a product to enlarge it here"
  document.getElementById('caption').innerHTML = "Product name will appear here";
}
