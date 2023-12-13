import { Circle } from "../Circle";

export class ResetButton {
  private button: HTMLButtonElement;

  constructor(circles: Circle[]) {
    this.button = document.createElement("button");
    this.button.textContent = "Reset";
    this.button.style.padding = "10px";
    this.button.style.backgroundColor = "#3498db";
    this.button.style.color = "#ffffff";
    this.button.style.border = "none";
    this.button.style.borderRadius = "5px";
    this.button.style.cursor = "pointer";
    this.button.addEventListener("click", () => {
      circles.length = 0;
      this.hide();
    });
    this.hide();
  }

  public show() {
    this.button.style.display = "block";
  }

  public hide() {
    this.button.style.display = "none";
  }

  public getElement(): HTMLButtonElement {
    return this.button;
  }
}
