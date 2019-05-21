import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.scss']
})

export class FlagComponent {
  @Input() code: String
  @Input() size: 'l'
  @Input() dropshadow: Boolean
  @Input() hasBorder: Boolean
  @Input() gradient: ''
  @Input() hasBorderRadius: Boolean
  @Input() customBorderRadius: any
  @Input() className: String

  // finalClassName =  `flag
  // ${this.gradient}
  // size-${this.size}
  // ${this.hasBorder ? 'border' : ''}
  // ${this.dropshadow ? 'dropshadow' : ''}
  // ${this.hasBorderRadius ? 'border-radius' : ''}
  // ${this.className}`.replace(/\s\s+/g, ' ').trim()

  constructor() {}



}
