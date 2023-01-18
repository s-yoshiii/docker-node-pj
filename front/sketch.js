import p5 from "p5";
import "reset-css";

const sketch = (p) => {
  p.setup = () => {
    // 描画領域のセットアップ
    let canvas = p.createCanvas(600, 200);
    canvas.parent("sketch");
    p.noStroke();
    p.fill(255);
    p.colorMode(p.HSB, 360, 100, 100, 255);
  };
  p.draw = () => {
    p.background(0);
    const step = 20;
    for (let x = 0; x <= p.width; x += step) {
      for (let y = 0; y <= p.height; y += step) {
        const d = p.dist(x, y, p.mouseX, p.mouseY);
        // const size = d / 10;
        const size = p.map(p.sin(d * 0.05), -1, 1, 0, 10);
        p.fill(p.map(p.sin(d * 0.05), -1, 1, 60, 320), 100, 100);
        p.ellipse(x, y, size, size);
      }
    }
    p.ellipse(p.mouseX, p.mouseY, 20, 20);
  };
};
new p5(sketch);
