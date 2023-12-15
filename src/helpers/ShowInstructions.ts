export class ShowInstructions {
  private ctx: CanvasRenderingContext2D;
  private canvas: HTMLCanvasElement;
  private isDisplayed: boolean;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.isDisplayed = true;
  }

  display() {
    if (this.isDisplayed) {
      this.ctx.fillStyle = "#ffffff";
      this.ctx.font = "20px Arial";
      this.ctx.textAlign = "center";
      this.ctx.fillText(
        "Click to start the bouncing animation",
        this.canvas.width / 2,
        this.canvas.height / 2
      );
    }
  }

  hide() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.isDisplayed = false;
  }

  show() {
    this.isDisplayed = true;
    this.display();
  }
}
