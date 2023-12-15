import { Circle } from "./Circle";
import { SpawnCircle } from "./SpawnCircle";
import { ShowInstructions } from "./helpers/ShowInstructions";

export default class App {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  circles: Circle[];
  showInstructions: ShowInstructions;

  constructor() {
    this.canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d")!;
    this.circles = [];
    this.showInstructions = new ShowInstructions(this.canvas, this.ctx);

    if (!this.ctx) {
      console.error("Failed to get canvas context");
      return;
    }
    this.showInstructions.display();
    this.canvas.addEventListener("click", (event) => {
      const newCircle = SpawnCircle.spawn(this.canvas, this.circles, event);
      if (newCircle) {
        this.circles.push(newCircle);
      }
      if (this.circles.length === 1) {
        this.animate();
      }
    });
  }

  animate() {
    requestAnimationFrame(() => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      let index = 0;

      while (index < this.circles.length) {
        const circle = this.circles[index];

        if (!circle.isOver) {
          circle.updatePosition(this.canvas);
        }

        if (circle.isInsideCanvas(this.canvas)) {
          circle.draw(this.ctx);
          index++;
        } else {
          this.circles.splice(index, 1);
        }
      }

      if (this.circles.length > 0) {
        this.animate();
      }
    });
  }
}
