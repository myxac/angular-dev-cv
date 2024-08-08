import { Component, HostListener } from '@angular/core';

import { PdfGeneratorService } from "../shared/internals";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public isHidden = false;

  private lastScrollTop = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll: number = window.scrollY || document.documentElement.scrollTop;
    if (currentScroll > 300) {
      this.isHidden = currentScroll > this.lastScrollTop;
    } else {
      this.isHidden = false;
    }
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  constructor(private pdfGeneratorService: PdfGeneratorService) {
  }

  public downloadPdf(): void {
    this.pdfGeneratorService.generatePdf('content');
  }
}
