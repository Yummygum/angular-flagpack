# Angular Flag Pack

> A project made by Yummygum

## Installation

```bash
npm install angular-flag-pack -S
```

## Declare module
```js
import { FlagComponent } from 'angular-flag-pack'

@NgModule({
  ...
  declarations: [
    FlagComponent
  ],
  imports: [
    BrowserModule, // is required
  ],
  ...
})
```

Use in your template:
```html
 <flag
  code="nl"
  size="m"
  gradient="top-down"
  [hasDropshadow]="true"
  [hasBorder]="true"
  [hasBorderRadius]="true">
</flag>
```

## Available component options

| key   | value   | required | default | format |
|-------|-------|------|------|------|
| country code |  String | true | none | see all codes |
| size |  String | false | l | 's', 'm' or 'l' |
| className |  String | false | - | - |
| hasDropshadow |  boolean | false | false | - |
| hasBorder |  boolean | false | true | - |
| hasBorderRadius | boolean | false | true | - |
| customBorderRadius |  String | false | - | - |
| gradient |  String | false | '' | 'top-down', 'real-linear' or 'real-circular' |

