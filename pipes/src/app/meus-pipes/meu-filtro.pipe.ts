import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'meuFiltro'
})
export class MeuFiltroPipe implements PipeTransform {

  transform(value:string[] , argument:string): string[] {
    if(value.length === 0 || argument === undefined){
      return value;
    }

   let filtro:string =  argument.toLocaleLowerCase();

    return value.filter(
      v => v.toLocaleLowerCase().indexOf(filtro) != -1
    );
  }

}
