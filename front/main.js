import p5 from "p5";
import "reset-css";
let x = 0;
const sketch = (p) => {
  p.setup = () => {
    //最初に１回だけ実行される処理
    let canvas = p.createCanvas(480, 240);
    canvas.parent("sketch");
    p.background("skyblue");

    p.fill(255, 0, 0, 127);
    p.rect(0, 0, 100, 100);

    p.push();
    p.scale(2, 0.5);
    p.fill(0, 0, 255, 127);
    p.rect(0, 0, 100, 100);
    p.pop();
  };
};

const mouseDraw = (p) => {
  let r = 50;
  p.setup = () => {
    let canvas = p.createCanvas(480, 240);
    canvas.parent("mouseDraw");
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
    let canvas = p.createCanvas(480, 240);
    canvas.parent("randomDraw");
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
    button,
    isDraw = true;
  p.setup = () => {
    let canvas = p.createCanvas(480, 240);
    canvas.parent("angleDraw");
    p.background("skyblue");
    p.noStroke();
    button = p.createButton("Stop");
    button.position(10, 10);
    button.parent("angleDraw");
    button.mousePressed(() => {
      if (isDraw) {
        p.noLoop();
      } else {
        p.loop();
      }
      isDraw = !isDraw;
    });
  };
  p.draw = () => {
    p.push();
    p.translate(p.width / 2, p.height / 2);
    x = p.cos(p.radians(angle)) * r;
    y = p.sin(p.radians(angle)) * r;
    p.ellipse(x, y, 10, 10);
    p.pop();
    angle += 2;
    r += 0.1;
  };
};

new p5(sketch);
new p5(mouseDraw);
new p5(randomDraw);
new p5(angleDraw);
