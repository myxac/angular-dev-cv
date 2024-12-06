import { Pipe, PipeTransform } from '@angular/core';

import { CertificationsListInterface } from "../internals";

@Pipe({name: 'sort'})
export class SortPipe implements PipeTransform {
  transform(value?: CertificationsListInterface[], direction: 'asc' | 'desc' = 'asc') {
    if (value) {
      let sorted = [...value];

      if (direction === 'asc') {
        sorted = sorted.sort((a, b) => a.order - b.order);
      } else if (direction === 'desc') {
        sorted = sorted.sort((a, b) => b.order - a.order);
      }
      return sorted;
    }

    return value;
  }
}
