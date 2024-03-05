import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponencialStrenght'
})
export class ExponencialStrenghtPipe implements PipeTransform {

  transform(value: number, expoent: number =1): number {
    return Math.pow(value , expoent);
  }
}
