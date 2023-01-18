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
    p.colorMode(p.HSB, 360, 100, 100);
    for (let x = 0; x <= p.width; x += step) {
      for (let y = 0; y <= p.height; y += step) {
        const size = p.random(0, 15);
        const h = p.random(200, 320);
        const s = 100;
        const b = size * 5;
        p.fill(h, s, b);
        p.ellipse(x, y, size, size);
      }
    }
  };
};
new p5(sketch);
