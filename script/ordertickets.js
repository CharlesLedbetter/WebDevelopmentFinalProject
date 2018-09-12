/*********************************************************************
** Assignment: Final Project
** Author: Charles Ledbetter
** Date: 11/19/2017
** Description: script for order.html
*********************************************************************/
//simulates form submission with asynchronous message
function delayNextPageLoad() {
  window.setTimeout(LoadNextPage, 5000);
  var popup = document.createElement("div");
  popup.setAttribute("id", "signedup");
  popup.style.border = "5px solid #333";
  popup.style.position = "fixed";
  popup.style.top = "25%";
  popup.style.left = "15%";
  popup.style.zIndex = "99";
  popup.style.width = "70%";
  popup.style.height = "40%";
  popup.style.boxShadow = "7px 7px 4px #300f";
  popup.style.background = "#d9e4f4";
  popup.style.background = -"webkit-linear-gradient(#ccfff5, #d9e4f4)";
  /* For Safari 5.1 to 6.0 */
  popup.style.background = "-o-linear-gradient(#ccfff5, #d9e4f4)";
  /* For Opera 11.1 to 12.0 */
  popup.style.background = -"moz-linear-gradient(#ccfff5, #d9e4f4)";
  /* For Firefox 3.6 to 15 */
  popup.style.background = "linear-gradient(#ccfff5, #d9e4f4)";
  /* Standard syntax */
  popup.style.textAlign = "center";
  popup.style.paddingTop = "2em";
  popup.style.fontSize = "4em";
  popup.textContent = "Your tickets are on the way. We can't wait to see you!";
  document.getElementById("formBacked").appendChild(popup);
  event.preventDefault();
}

function LoadNextPage() {
  window.location.href="other.html";
}

document.getElementById("submitForm").addEventListener("click",delayNextPageLoad);
