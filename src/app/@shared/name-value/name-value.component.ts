import { Component, ElementRef, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-name-value',
  templateUrl: './name-value.component.html',
  styleUrls: ['./name-value.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class NameValueComponent {
  constructor(
    private readonly _elementRef: ElementRef,
    private readonly _renderer: Renderer2
  ) {

  }

  ngAfterViewInit() {
    

  }

}
