import { Component, Input } from '@angular/core';
import { isoToCountryCode } from 'flagpack-core';
import { imageUrl } from 'flagpack-core/types';

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
    return imageUrl(this.assetCode, this.size);
  }

}
