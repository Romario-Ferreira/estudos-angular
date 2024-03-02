import { Directive, ElementRef, Renderer2, HostListener, Input, HostBinding} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

 @HostBinding('style.backgroundColor') highlight: string ='';
 @Input() backgroundColor: string ='';
 @Input() defaultColor: string = 'yellow';

  constructor(
    //private _elementRef: ElementRef,
    //private _renderer: Renderer2
  ) {}

    @HostListener('mouseenter') onMouseEnter(){
      //this.highlight(this.color || 'red');
      this.highlight = (this.backgroundColor=='') ? this.defaultColor: this.backgroundColor;
    }

    @HostListener('mouseleave') onMouseLeave(){
      this.highlight = '';
      //this.highlight('');

    }


  //  private highlight(color: string){
  //     this._renderer.setStyle(
  //       this._elementRef.nativeElement,
  //       'background-color',
  //       color
  //     );
  //   }


}
