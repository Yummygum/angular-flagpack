import { Component, Input } from '@angular/core';

// This fixes the build that breaks.
declare var require: any
const { isoToCountryCode } =  require('flag-pack-core');

@Component({
  selector: 'flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.scss']
})
export class FlagComponent {
  @Input() code: String = '';
  @Input() size: String = 'l';
  @Input() dropshadow: Boolean = false;
  @Input() hasBorder: Boolean = true;
  @Input() gradient: String = '';
  @Input() hasBorderRadius: Boolean = true;
  @Input() customBorderRadius: any;
  @Input() className: String = '';

  get assetCode(): String {
    return isoToCountryCode(this.code.toUpperCase());
  }

  constructor() {}
}
