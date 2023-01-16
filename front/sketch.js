import p5 from "p5";
import "reset-css";

const sketch = (p) => {
  p.setup = () => {
    // 描画領域のセットアップ
    let canvas = p.createCanvas(200, 200);
    canvas.parent("sketch");
    p.background(0);
    p.noStroke();
    p.fill(255);
  };
};
new p5(sketch);
