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

    const size = 5;
    p.ellipse(50, 50, size, size);
    p.ellipse(100, 50, size, size);
    p.ellipse(150, 50, size, size);
    p.ellipse(50, 100, size, size);
    p.ellipse(100, 100, size, size);
    p.ellipse(150, 100, size, size);
    p.ellipse(50, 150, size, size);
    p.ellipse(100, 150, size, size);
    p.ellipse(150, 150, size, size);
  };
};
new p5(sketch);
