import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : "JsonToArray"
})

export class JsonToArray implements PipeTransform{
    transform(object: any = []) {
        return Object.values(object);
    }
}