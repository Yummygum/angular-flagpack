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
  @Input() code: string;
  @Input() size: 'l';
  @Input() hasDropshadow: boolean;
  @Input() hasBorder: boolean;
  @Input() gradient: '';
  @Input() hasBorderRadius: boolean;
  @Input() customBorderRadius: any;
  @Input() className: string;

  get assetCode(): string {
    return isoToCountryCode(this.code.toUpperCase());
  }

  get src(): string {
    return imageUrl(this.assetCode, this.size.toLowerCase());
  }

}
