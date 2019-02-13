import { Component } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
    selector : 'demo-app',
    template : `<h4>Child Component</h4>
    <input type="text" #input (keyup)="onChange(input.value)">`,
    outputs : ['childevent']
    
})

export class ComponentClass{

    childevent = new EventEmitter<String>();

    onChange(value:String){
            this.childevent.emit(value);
    }

};