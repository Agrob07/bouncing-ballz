import { Circle } from "./Circle";
import { ResetButton } from "./helpers/ResetButton";
import { Tooltip } from "./tooltip/Tooltip";

export class SpawnCircle {
  static maxCircles = 15;
  static resetButton: ResetButton | null = null;
  static tooltip: Tooltip | null = null;

  static spawn(
    canvas: HTMLCanvasElement,
    circles: Circle[],
    event: MouseEvent
  ): Circle | undefined {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    if (circles.length >= SpawnCircle.maxCircles) {
      if (!SpawnCircle.tooltip) {
        SpawnCircle.tooltip = new Tooltip("Maximum circle limit reached!");
      }
      SpawnCircle.tooltip.show(event.clientX, event.clientY);
      setTimeout(() => {
        if (SpawnCircle.tooltip) {
          SpawnCircle.tooltip.hide();
        }
      }, 2000);

      if (!SpawnCircle.resetButton) {
        SpawnCircle.resetButton = new ResetButton(circles);
        const resetButtonContainer = document.getElementById("resetButton");
        if (resetButtonContainer) {
          resetButtonContainer.appendChild(
            SpawnCircle.resetButton.getElement()
          );
        }
      }
      SpawnCircle.resetButton?.show();

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
