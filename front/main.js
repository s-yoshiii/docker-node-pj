import p5 from "p5";
import "reset-css";
let x = 0;
const sketch = (p) => {
  p.setup = () => {
    //最初に１回だけ実行される処理
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background("skyblue");

    // 長方形
    p.rectMode(p.LEFT);
    p.noFill();
    p.rect(p.width / 2, p.height / 2, 150, 100);
    const c = p.color("pink");
    // 円
    p.fill(c);
    p.ellipse(p.width / 2, p.height / 2, 100, 100);

    // 線
    p.stroke("blue");
    p.strokeWeight(5);
    p.line(0, 0, p.width / 2, p.height / 2);
    // テキスト
    p.textAlign(p.LEFT, p.TOP);
    p.noStroke();
    p.textSize(32);
    p.textFont("impact");
    p.textStyle(p.ITALIC);
    p.text("Hello World", 100, 100);
  };
  // p.draw = () => {
  //   //そのあと繰り返し実行される処理
  //   p.rect(x, 40, 50, 50);
  //   x++;
  // };
};

new p5(sketch);
