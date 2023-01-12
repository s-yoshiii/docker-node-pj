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

const randomDraw = (p) => {
  let x, y, z;
  p.setup = () => {
    p.createCanvas(480, 240);
    p.noStroke();
    p.background("skyblue");
  };
  p.draw = () => {
    x = p.random(p.width);
    y = p.random(p.height);
    if (p.random() > 0.9) {
      z = p.random(50, 80);
    } else {
      z = p.random(10, 30);
    }
    p.fill(255, 255, 255, p.random(30, 250));
    p.ellipse(x, y, z, z);
    if (p.frameCount > 200) {
      p.noLoop();
    }
  };
};

const angleDraw = (p) => {
  let angle = 0,
    x = 0,
    y = 0,
    r = 50,
    isDraw = true;
  p.setup = () => {
    p.createCanvas(480, 240);
    p.background("skyblue");
    p.noStroke();
  };
  p.draw = () => {
    p.push();
    p.translate(p.width / 2, p.height / 2);
    x = p.sin(p.radians(angle)) * r;
    y = p.cos(p.radians(angle)) * r;
    p.ellipse(x, y, 10, 10);
    p.pop();
    angle += 2;
    r += 0.1;
  };
  p.mousePressed = () => {
    if (isDraw) {
      p.noLoop();
    } else {
      p.loop();
    }
    isDraw = !isDraw;
  };
};

new p5(sketch);
new p5(mouseDraw);
new p5(randomDraw);
new p5(angleDraw);
