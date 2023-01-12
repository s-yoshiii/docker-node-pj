import p5 from "p5";
import "reset-css";
let x = 0;
const sketch = (p) => {
  p.setup = () => {
    //最初に１回だけ実行される処理
    p.createCanvas(480, 240);
    p.background("skyblue");

    p.fill(255, 0, 0, 127);
    p.rect(0, 0, 100, 100);

    p.push();
    // p.translate(10, 10);
    // p.rotate(p.PI / 4);
    // p.rotate(p.radians(30));
    p.scale(2, 0.5);
    p.fill(0, 0, 255, 127);
    p.rect(0, 0, 100, 100);
    p.pop();
  };
  // p.draw = () => {
  //   //そのあと繰り返し実行される処理
  //   p.rect(x, 40, 50, 50);
  //   x++;
  // };
};

let r = 50;
const mouseDraw = (p) => {
  p.setup = () => {
    p.createCanvas(480, 240);
  };
  p.mousePressed = () => {
    r += 10;
    return false;
  };
  p.draw = () => {
    p.noStroke();
    p.background("skyblue");
    if (p.mouseIsPressed) {
      p.fill("pink");
    } else {
      p.fill("white");
    }
    p.ellipse(p.mouseX, p.mouseY, r, r);
  };
  p.keyTyped = () => {
    if (p.key === "u") {
      r += 10;
    }
    return false;
  };
  p.keyPressed = () => {
    if (p.keyCode === p.DOWN_ARROW) {
      r -= 10;
    }
  };
};

new p5(sketch);
new p5(mouseDraw);
