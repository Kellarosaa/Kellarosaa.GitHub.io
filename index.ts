interface Button {
  label: string;
  link: string;
}

class Menu {
  private isOpen: boolean;
  private buttons: Button[];

  constructor() {
    this.isOpen = false;
    this.buttons = [];
  }

  public openMenu(): void {
    this.isOpen = true;
  }

  public addButton(label: string, link: string): void {
    const button: Button = {
      label,
      link,
    };
    this.buttons.push(button);
  }

  public renderMenu(): void {
    if (!this.isOpen) {
      console.log("Menu is closed");
      return;
    }

    for (const button of this.buttons) {
      console.log(`Button: ${button.label}`);
      console.log(`Link: ${button.link}`);
    }
  }
}

// Usage
const menu = new Menu();
menu.openMenu();
menu.addButton("Button 1", "https://example.com/button1");
menu.addButton("Button 2", "https://example.com/button2");
menu.addButton("Button 3", "https://example.com/button3");
menu.renderMenu();
