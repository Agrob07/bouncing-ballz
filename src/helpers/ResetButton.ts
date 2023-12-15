import { Circle } from "../Circle";

export class ResetButton {
  private button: HTMLButtonElement;

  constructor(circles: Circle[]) {
    this.button = document.createElement("button");
    this.button.textContent = "Reset";
    this.button.classList.add("reset-button");
    this.button.addEventListener("click", () => {
      circles.length = 0;
      this.hide();
    });
    this.hide();
  }

  public show() {
    this.button.style.visibility = "visible";
  }

  public hide() {
    this.button.style.visibility = "hidden";
  }

  public getElement(): HTMLButtonElement {
    return this.button;
  }
}
