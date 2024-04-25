
# MariiaUI is an Angular UI Components Library

This library provides a set of reusable UI components for Angular applications. These components are designed to enhance the user experience and accelerate development by providing consistent and customizable UI elements.

## Installation

To install the library, you can use npm or yarn:

```bash
npm install mariia-ui@latest --save
```
or
```bash
yarn add mariia-ui@latest
```

## Usage

1. Import the `MariiaUiModule` into your Angular application module:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MariiaUiModule } from '@mariia-ui';

@NgModule({
  declarations: [
    // your components
  ],
  imports: [
    BrowserModule,
    MariiaUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

2. Use the components in your templates:

```html
<mui-button
	[label]="'Click'"
	[type]="ButtonTypeEnum.Default"
	(onClick)="handleBtnClick($event)"></mui-button>
```

## Documentation and demos

Documentation and example of usage (demos) are presented at official doc Web site: 
[MariiaUIDocs](https://mlinciko.github.io/MariiaUI/)

## Customization

All components support customization through input properties and CSS classes. You can adjust the appearance and behavior of each component to fit your application's design requirements.
More information: [MariiaUIDocs](https://mlinciko.github.io/MariiaUI/)

## Contribution

Contributions are welcome! If you encounter any issues or have suggestions for new features, please open an issue on GitHub. Pull requests are also appreciated.
