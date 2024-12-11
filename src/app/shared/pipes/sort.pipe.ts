import { Pipe, PipeTransform } from '@angular/core';

import { CertificationsListInterface } from '../internals';

@Pipe({
  name: 'sort',
  standalone: true,
})
export class SortPipe implements PipeTransform {
  transform(
    value?: CertificationsListInterface[],
    direction: 'asc' | 'desc' = 'asc'
  ) {
    if (!value) {
      return value;
    }
    const sorted = [...value];
    sorted.sort((a, b) => {
      if (direction === 'asc') {
        return a > b ? 1 : -1;
      } else {
        return a > b ? -1 : 1;
      }
    });

    return sorted;
  }
}
