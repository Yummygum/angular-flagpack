import { Component, Input } from '@angular/core';

// This fixes the build that breaks.
declare var require: any
const { isoToCountryCode } =  require('flagpack-core');

@Component({
  selector: 'flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.scss']
})
export class FlagComponent {
  @Input() code: String;
  @Input() size: 'l';
  @Input() dropshadow: Boolean;
  @Input() hasBorder: Boolean;
  @Input() gradient: '';
  @Input() hasBorderRadius: Boolean;
  @Input() customBorderRadius: any;
  @Input() className: String;

  get assetCode(): String {
    return isoToCountryCode(this.code.toUpperCase());
  }

  constructor() {}
}
