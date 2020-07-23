# Angular Flag Pack

> A project made by Yummygum

## Installation

```bash
npm install angular-flagpack -S
```

## Declare module
```js
import { AngularFlagpackModule } from 'angular-flagpack';

@NgModule({
  ...
  imports: [
    AngularFlagpackModule // add it here.
  ],
  ...
})
```

Use in your template:
```html
<lib-angular-flagpack
  code="nl"
  size="m"
  gradient="top-down"
  [hasDropShadow]="true"
  [hasBorder]="true"
  [hasBorderRadius]="true">
</lib-angular-flagpack>
```

Or use with defaults
```html
<lib-angular-flagpack code="528"></lib-angular-flagpack>
```

## Available component options

| key   | value   | required | default | format |
|-------|-------|------|------|------|
| country code |  String | true | none | see all codes |
| size |  String | false | l | 's', 'm' or 'l' |
| className |  String | false | - | - |
| hasDropShadow |  boolean | false | false | - |
| hasBorder |  boolean | false | true | - |
| hasBorderRadius | boolean | false | true | - |
| gradient |  String | false | '' | 'top-down', 'real-linear' or 'real-circular' |

