import { Injectable } from "@angular/core";
import { DynamicTypeBuilder } from "./type.builder";

@Injectable()
export class ServiceExtractor {
    constructor(typeBuilder : DynamicTypeBuilder) {
        if (window["lux"] == null) {
            window["lux"] = {};
            window["lux"].services = {}; 
        } 

        window["lux"].services.DynamicTypeBuilder = typeBuilder;
    }
}