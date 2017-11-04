import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'highligh'
})


export class HighlightSearch implements PipeTransform {

    transform(text: string, [search]): string {
        return search ? text.replace(new RegExp(search, 'i'), `<span class="highlight">${search}</span>`) : text;
      }
    
}