import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}} <dynamic-component pathToComponentImport="ucommerce-extension-module#ExtensionsModule"></dynamic-component><!--<custom-component></custom-component>--></h1>`,
})
export class AppComponent  { name = 'Angular'; }
