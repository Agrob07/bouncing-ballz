import { Circle } from "./Circle";
import { ResetButton } from "./helpers/ResetButton";

export class SpawnCircle {
  static maxCircles = 15;
  static resetButton: ResetButton | null = null;

  static spawn(
    canvas: HTMLCanvasElement,
    circles: Circle[],
    event: MouseEvent
  ): Circle | undefined {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    if (circles.length >= SpawnCircle.maxCircles) {
      alert("Maximum circle limit reached!");
      if (!SpawnCircle.resetButton) {
        SpawnCircle.resetButton = new ResetButton(circles);
        document.body.appendChild(SpawnCircle.resetButton.getElement());
      }
      SpawnCircle.resetButton.show();
      return undefined;
    }

    const circle = new Circle(mouseX, mouseY, 20);

    return circle;
  }

  static isCircleWithinCanvas(
    canvas: HTMLCanvasElement,
    circle: Circle
  ): boolean {
    return (
      circle.x - circle.radius > 0 &&
      circle.x + circle.radius < canvas.width &&
      circle.y - circle.radius > 0 &&
      circle.y + circle.radius < canvas.height
    );
  }
}
