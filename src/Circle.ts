import { GRAVITY, DAMPING_FACTOR } from "./constants/constant";

export class Circle {
  x: number;
  y: number;
  radius: number;
  velocityY: number;
  dampening: number;
  color: string;
  gravity: number;
  isOver: boolean;

  constructor(x: number, y: number, radius: number) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.velocityY = 0;
    this.dampening = 0.8;
    this.color = this.generateRandomColor();
    this.gravity = GRAVITY;
    this.isOver = false;
  }

  private generateRandomColor(): string {
    const randomColor =
      "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
    return randomColor;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  updatePosition(canvas: HTMLCanvasElement) {
    // Apply gravity to the circle's vertical velocity
    this.velocityY += this.gravity;

    // Update the circle's vertical position based on the velocity
    this.y += this.velocityY;

    // Collision detection with the bottom of the canvas
    if (this.y + this.radius >= canvas.height) {
      this.y = canvas.height - this.radius;
      this.velocityY *= -DAMPING_FACTOR; // Reverse velocity with damping effect
    }
    if (this.y === 580 && this.velocityY > 0.16 && this.velocityY < 0.17) {
      this.isOver = true;
    }
  }

  isInsideCanvas(canvas: HTMLCanvasElement): boolean {
    // Check if the circle is entirely within the canvas boundaries
    return (
      this.x - this.radius >= 0 &&
      this.x + this.radius <= canvas.width &&
      this.y - this.radius >= 0 &&
      this.y + this.radius <= canvas.height
    );
  }
}
