import { Component, Input, ViewChild, ViewContainerRef, SimpleChanges, AfterViewInit, OnChanges, OnDestroy, ComponentFactory, ComponentRef, Injector } from "@angular/core";
import { DynamicTypeBuilder } from "../services/type.builder";

@Component({
    "template": '<h1>hello dynamic component <div #dynamicContentPlaceHolder></div></h1>',
    "selector": 'dynamic-component'
})
export class DynamicComponent implements AfterViewInit, OnChanges, OnDestroy {
    
    @Input() pathToComponentImport : string;

    @ViewChild('dynamicContentPlaceHolder', {read: ViewContainerRef}) 
    protected dynamicComponentTarget: ViewContainerRef;
    protected componentRef: ComponentRef<any>;

    constructor(private typeBuilder: DynamicTypeBuilder) 
    {
    
    }  

    protected refreshContent() : void {
        if (this.pathToComponentImport != null && this.pathToComponentImport.indexOf('#') != -1) {
          let [moduleName, exportName] = this.pathToComponentImport.split("#");
          window["System"].import(moduleName)
            .then((module: any) => module[exportName])
            .then((type: any) => {
                this.typeBuilder.createComponentFactoryFromType(type)
                .then((factoryWithInjector: { factory: ComponentFactory<any>, injector: Injector }) => {
                    console.log("factory with injector", factoryWithInjector.factory);
                    // Target will instantiate and inject component (we'll keep reference to it)
                    this.componentRef = this
                        .dynamicComponentTarget
                        .createComponent(factoryWithInjector.factory, null, factoryWithInjector.injector);

                    // let's inject @Inputs to component instance
                });
            });
      }
    }

    ngOnDestroy(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
    }

    ngAfterViewInit(): void {
        this.refreshContent();
    }

}