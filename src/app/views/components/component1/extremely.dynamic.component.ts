import { Component, Input, ViewChild, ViewContainerRef, SimpleChanges, AfterViewInit, OnChanges, OnDestroy, ComponentFactory, ComponentRef } from "@angular/core";

@Component({
    "template": '<h1>X is for extreme: {{model.text}}</h1>',
    "selector": 'very-dynamic-component'
})
export class ExtremelyDynamicComponent {
    
    @Input() model : any;


    constructor() 
    {
    
    }  

}