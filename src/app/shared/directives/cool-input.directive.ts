import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[coolInput]'
})
export class CoolInputDirective implements OnInit {

  @Input() coolInputDefaultBgColor: string = 'transparent';
  @Input() coolInputFocusBgColor: string = '#FFC5CB';

  constructor(
    private el: ElementRef,
    private rend: Renderer2
  ) { }

  private _backgroundColor: string = '';
  @HostBinding('style.backgroundColor')
  get getBgColor() {
    return this._backgroundColor;
  }

  private _isOnFocus: boolean = false;
  @HostBinding('class.isOnFocus')
  get getIsOnFocus() {
    return this._isOnFocus;
  }

  @HostListener('focus')
  onFocus() {
    this._isOnFocus = true;
    this.changeElemBgColor(this.coolInputFocusBgColor);
  }

  @HostListener('blur')
  onBlur() {
    this._isOnFocus = false;
    this.changeElemBgColor(this.coolInputDefaultBgColor);
  }

  @HostListener('click', ['$event', '$event.target'])
  onClick(event: Event, target: HTMLElement) {
    console.log(event);
    console.log(target);
  }

  ngOnInit() {
    // this.el.nativeElement.style.backgroundColor = '#FFC5CB';
    // this.rend.setStyle(this.el.nativeElement, 'background-color', '#FFC5CB');
    this.changeElemBgColor(this.coolInputDefaultBgColor);
    this.rend.setStyle(this.el.nativeElement, 'transition', 'background-color .3s');
    // this.rend.setStyle(this.el.nativeElement, 'margin-bottom', '8px');
    this.rend.setAttribute(
      this.el.nativeElement,
      'placeholder',
      this.el.nativeElement.getAttribute('placeholder') + ' *'
    );
    // const text = this.rend.createElement('span');
    // this.rend.setProperty(text, 'innerText', '* Обязательно для заполнения');
    // this.rend.setStyle(text, 'color', 'red');
    // this.rend.insertBefore(this.el.nativeElement.parentElement, text, this.rend.nextSibling(this.el.nativeElement))

  }

  private changeElemBgColor(color: string): void {
    this._backgroundColor = color;
  }

}
