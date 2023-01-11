import p5 from "p5";
let x = 0;
const sketch = (p) => {
  p.setup = () => {
    //最初に１回だけ実行される処理
    p.createCanvas(480, 480);
    p.background("skyblue");
    p.rectMode(p.LEFT);
    p.noFill();
    p.rect(p.width / 2, p.height / 2, 150, 100);
    const c = p.color("pink");
    p.fill(c);
    p.ellipse(p.width / 2, p.height / 2, 100, 100);
    p.stroke("blue");
    p.strokeWeight(5);
    p.line(0, 0, p.width / 2, p.height / 2);
  };
  // p.draw = () => {
  //   //そのあと繰り返し実行される処理
  //   p.rect(x, 40, 50, 50);
  //   x++;
  // };
};

new p5(sketch);
