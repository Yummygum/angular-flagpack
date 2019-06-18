# Angular Flag Pack

> A project made by Yummygum

## Installation

```bash
npm install Angular-flag-pack
```

## Install module
```js

```

Use in your template:
```html
 <app-flag 
  code="nl"
  size="m"
  gradient="top-down" 
  [dropshadow]="true"
  [hasBorder]="true" 
  [hasBorderRadius]="true" 
  class="customClass">
</app-flag>
```

## Available component options

| key   | value   | required | default | format |
|-------|-------|------|------|------|
| country code |  String | true | none | see all codes |
| size |  String | false | l | 's', 'm' or 'l' |
| className |  String | false | - | - |
| dropshadow |  boolean | false | false | - |
| hasBorder |  boolean | false | true | - |
| hasBorderRadius | boolean | false | true | - |
| customBorderRadius |  String | false | - | - |
| gradient |  String | false | '' | 'top-down', 'real-linear' or 'real-circular' |



## Build Dist

```bash
# install dependencies
npm install

# build for prod
npm run build
```