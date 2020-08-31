import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "ErginTasimacilik";

  scrollToSection(section: string) {
    document
      .getElementById(section)
      .scrollIntoView({ behavior: "smooth", block: "center" });
  }
}
