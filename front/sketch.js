import p5 from "p5";
import "reset-css";

const sketch = (p) => {
  p.setup = () => {
    // 描画領域のセットアップ
    let canvas = p.createCanvas(600, 200);
    canvas.parent("sketch");
    p.background(0);
    p.noStroke();
    p.fill(255);

    const step = 20;
    for (let x = 0; x <= p.width; x += step) {
      for (let y = 0; y <= p.height; y += step) {
        // const size = p.random(0, 15);
        let size;
        if (p.random() < 0.95) {
          size = p.random(0, 10);
        } else {
          size = step;
        }
        p.ellipse(x, y, size, size);
      }
    }
  };
};
new p5(sketch);
