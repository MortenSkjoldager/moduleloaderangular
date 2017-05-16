import { NgModule, AfterViewInit, OnChanges, OnDestroy, SimpleChanges } from "@angular/core";
import { DynamicComponent } from "./components/dynamic.component";
import { DynamicTypeBuilder } from "./services/type.builder";

@NgModule({
    declarations: [
        DynamicComponent
    ],
    providers: [
        DynamicTypeBuilder
    ],
    exports: [ DynamicComponent]
})
export class DynamicModule {

}