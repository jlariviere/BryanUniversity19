/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. */

// body.onkeypress = () => {
//     if (e.metaKey) {
//       e.preventDefault();
//     }
//     drawNumberToCanvas(e.keyCode);
  
//     // Main e.keyCode display
//     document.querySelector('.keycode-display').innerHTML = e.keyCode;}

const page = document.getElementById("page")


const buttons = ()=> {
  let q = event.key;
  document.getElementsById("output").innerHTML = "The pressed key was: " + q;
}
page.addEventListener("onkeydown",buttons)