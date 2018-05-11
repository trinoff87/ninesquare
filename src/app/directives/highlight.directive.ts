import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {


  constructor(private elementRef: ElementRef, private renderer: Renderer2 ) { }

  @Input('appHighlight') plan = '';

  ngOnInit(): void {
      if (this.plan === 'paid') {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
        this.renderer.setStyle(this.elementRef.nativeElement, 'font-weight', 'bold');
      }
  }
}
