import { Component, Directive } from '@angular/core';
import { ComponentClass } from "./demo.component";

@Component({
  selector: 'my-app',
  template: `<h4>Parent Component</h4>
  <input type="text">
  {{childEvent}}
  <demo-app (childevent)="childEvent=$event"></demo-app>`,
  directives : [ComponentClass]
})
export class AppComponent { 

  public childEvent:String;

}
