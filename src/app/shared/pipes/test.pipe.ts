import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test',
  standalone: true
})
export class TestPipe implements PipeTransform {

  transform(value: any): string {
    console.log("test pipe", value);
    return value ? value.toUpperCase() : 'empty'
  }

}
