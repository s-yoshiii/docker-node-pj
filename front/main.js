import p5 from "p5";
import "reset-css";
let x = 0;
const sketch = (p) => {
  p.setup = () => {
    //最初に１回だけ実行される処理
    p.createCanvas(p.windowWidth, p.windowHeight);
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

new p5(sketch);
