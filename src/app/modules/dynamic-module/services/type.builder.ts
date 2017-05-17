import { Component, ComponentFactory, NgModule, Input, Injectable, CompilerFactory, Injector } from '@angular/core';
import { JitCompiler } from '@angular/compiler';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

export interface IHaveDynamicData { 
    model: any;
}

@Injectable()
export class DynamicTypeBuilder {

    protected _compiler : any;
    protected _compilerFactory : any;    
         // wee need Dynamic component builder
    constructor(private injector : Injector) {
        const compilerFactory : CompilerFactory = platformBrowserDynamic().injector.get(CompilerFactory);
        this._compilerFactory = compilerFactory;
        this._compiler = compilerFactory.createCompiler([]);
    }
    
  // this object is singleton - so we can use this as a cache
    private _cacheOfFactories: {[templateKey: string]: ComponentFactory<IHaveDynamicData>} = {};
  
    public createComponentFactoryFromType(type: any) : Promise<{ factory: ComponentFactory<any>, injector: Injector }> {
        let module = this.createComponentModule(type);
        return new Promise((resolve) => {
            this._compiler
                .compileModuleAndAllComponentsAsync(module)
                .then((moduleWithFactories : any) =>
                {
                    console.log(moduleWithFactories);
                    const moduleRef = moduleWithFactories.ngModuleFactory.create(this.injector);
                    let _ = window["_"];

                    let factory = _.find(moduleWithFactories.componentFactories, { selector: 'custom-editor' });
                    resolve({ factory, injector: moduleRef.injector });
                });
        });
    }
  
    protected createComponentModule (componentType: any) {
        @NgModule({
        imports: [
            componentType
        ],
        exports: [
            componentType
        ],
        declarations: [
            
        ],
        })
        class RuntimeComponentModule
        {
        }
        // a module for just this Type
        return RuntimeComponentModule;
    }
}