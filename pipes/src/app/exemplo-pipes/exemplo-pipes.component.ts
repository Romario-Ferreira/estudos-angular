import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-pipes',
  templateUrl: './exemplo-pipes.component.html',
  styleUrls: ['./exemplo-pipes.component.scss']
})
export class ExemploPipesComponent {

  forca: number = 1;
  expoent: number = 1;

  livros: string[] = ['Java', 'Angular'];
  filtro:string =''

  livro: any = {
    titulo: 'Dungeons & Dragons - Player\'s Handbook - Livro Do Jogador Edição',
    dataPublicacao: new Date(2019,9,1),
    valor : 279.09
  }

  salvarLivro(livro: string): void{
    this.livros.push(livro);
  }

}
