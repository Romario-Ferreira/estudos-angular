import { Pipe } from '@angular/core';

import { MeuFiltroPipe } from './meu-filtro.pipe';

@Pipe({
  pure: false,
  name: 'meuFiltroImpuro'
})
export class MeuFiltroImpuroPipe extends MeuFiltroPipe {


}
