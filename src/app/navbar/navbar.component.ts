import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { BreakpointObserver } from "@angular/cdk/layout";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  @Output() scrollToSection = new EventEmitter();

  isSmallScreen = this.breakpointObserver.observe("(max-width: 768px)");
  mobileNavVisible = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {}

  emit(section: string) {
    this.scrollToSection.emit(section);
  }
}
