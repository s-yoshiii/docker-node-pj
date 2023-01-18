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
    p.background(0, 20);
    const step = 20;
    const size = 5;
    for (let x = 0; x <= p.width; x += step) {
      for (let y = 0; y <= p.height; y += step) {
        p.ellipse(x, y, size, size);
      }
    }
    p.ellipse(p.mouseX, p.mouseY, 20, 20);
  };
};
new p5(sketch);
