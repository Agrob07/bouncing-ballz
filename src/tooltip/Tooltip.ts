export class Tooltip {
  private tooltip: HTMLDivElement;

  constructor(message: string) {
    this.tooltip = document.createElement("div");
    this.tooltip.textContent = message;
    this.tooltip.style.position = "absolute";
    this.tooltip.style.backgroundColor = "#000";
    this.tooltip.style.color = "#fff";
    this.tooltip.style.padding = "5px";
    this.tooltip.style.borderRadius = "5px";
    this.tooltip.style.zIndex = "9999";
    this.hide();
    document.body.appendChild(this.tooltip);
  }

  public show(x: number, y: number) {
    this.tooltip.style.left = `${x}px`;
    this.tooltip.style.top = `${y}px`;
    this.tooltip.style.display = "block";
  }

  public hide() {
    this.tooltip.style.display = "none";
  }

  public getElement(): HTMLDivElement {
    return this.tooltip;
  }
}
