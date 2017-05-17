import { NgModule, AfterViewInit, OnChanges, OnDestroy, SimpleChanges } from "@angular/core";
import { DynamicComponent } from "./components/dynamic.component";
import { DynamicTypeBuilder } from "./services/type.builder";
import { ServiceExtractor } from "./services/service.extractor";

@NgModule({
    declarations: [
        DynamicComponent
    ],
    providers: [
        DynamicTypeBuilder,
        ServiceExtractor
    ],
    exports: [ DynamicComponent]
})
export class DynamicModule {

}