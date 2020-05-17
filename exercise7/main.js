let red = 100;
let green = 100;
let blue = 100;

const up = 38;
const down = 40;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
  let key = e.keyCode;
  switch (key) {
    case (up):
      console.log("up");
      document.body.style.backgroundColor = `rgb(${red <= 255 ? red++ : red}, 
            ${green <= 255 ? green++ : green}, 
            ${blue <= 255 ? blue++ : blue})`;
      break;
    case (down):
      console.log("down")
      document.body.style.backgroundColor = `rgb(${red >= 0 ? red-- : red}, 
            ${green >= 0 ? green-- : green}, 
            ${blue >= 0 ? blue-- : blue})`;
      break;
  }


  // const changeColor = (e) => {
  //     let key = e.keyCode;
  //     if (key == up && red <= 255) {
  //       red += 5;
  //       green += 5;
  //       blue += 5;
  //     } else if (key == down && red >= 0) {
  //       {
  //         red -= 5;
  //         green -= 5;
  //         blue -= 5;
  //       }
  //     }

}

window.addEventListener('keydown', changeColor)