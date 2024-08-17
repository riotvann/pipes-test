import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'canFly'
})

export class CanFly implements PipeTransform {
    transform(value: string,): 'vuela' | 'no vuela' {
        return value ? 'vuela' : 'no vuela';
    }
}