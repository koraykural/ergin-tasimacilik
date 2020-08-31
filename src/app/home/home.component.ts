import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { BreakpointObserver } from "@angular/cdk/layout";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  @Output() scrollToSection = new EventEmitter();
  isSmallScreen = this.breakpointObserver.observe("(max-width: 768px)");

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {}
}
