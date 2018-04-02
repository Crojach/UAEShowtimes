import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FilterPipe',
})
export class FilterPipe implements PipeTransform {
    transform(value: any, input: string) {
        console.log(input)
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el: any) {
                if(el.title){
                    return el.title.toLowerCase().indexOf(input) > -1;
                }else{
                    return el.offer.title.toLowerCase().indexOf(input) > -1;  
                }
            })
        }
        return value;
    }
}