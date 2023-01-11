import p5 from "p5";
let x = 0;
const sketch = (p) => {
  p.setup = () => {
    //最初に１回だけ実行される処理
    p.createCanvas(480, 240);
  };
  p.draw = () => {
    //そのあと繰り返し実行される処理
    p.background(0);
    p.rect(x, 40, 50, 50);
    x++;
  };
};

new p5(sketch);
