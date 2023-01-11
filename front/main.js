import p5 from "p5";
let x = 0;
const sketch = (p) => {
  p.setup = () => {
    //最初に１回だけ実行される処理
    // rect(x,y,w,h)
    p.createCanvas(480, 240);
    p.background("skyblue");
    p.rectMode(p.CENTER);
    p.rect(p.width / 2, p.height / 2, 150, 100);
  };
  // p.draw = () => {
  //   //そのあと繰り返し実行される処理
  //   p.rect(x, 40, 50, 50);
  //   x++;
  // };
};

new p5(sketch);
