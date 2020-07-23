import { Component, OnInit, Input } from '@angular/core';
import { isoToCountryCode, imageUrl } from 'flagpack-core';
// declare var require: any
// const { isoToCountryCode, imageUrl } =  require('flagpack-core');

@Component({
  selector: 'lib-angular-flagpack',
  templateUrl: './angular-flagpack.template.html',
  styleUrls: ['./angular-flagpack.style.scss']
})
export class AngularFlagpackComponent {
  @Input() code = '528';
  @Input() size = 'm';
  @Input() hasDropShadow = false;
  @Input() hasBorder = true;
  @Input() hasBorderRadius = true;
  @Input() gradient: string;
  @Input() className: string;

  get assetCode(): string {
    return isoToCountryCode(this.code.toUpperCase());
  }

  get src(): string {
    const x = imageUrl(this.assetCode, this.size.toLowerCase());
    return x.default;
  }

}
