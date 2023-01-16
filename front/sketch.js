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
    for (let x = 50; x <= 150; x += 50) {
      for (let y = 50; y <= 150; y += 50) {
        p.ellipse(x, y, size, size);
      }
    }
  };
};
new p5(sketch);
