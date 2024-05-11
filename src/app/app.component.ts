import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Livro } from './modelos/livro.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'biblioteca';
  contador = 0;
  livro: Livro = {
    titulo: "COMECE PELO PORQUE",
    linkImagem: "https://m.media-amazon.com/images/I/71M6czhxmTL._SL1500_.jpg"
  }
  
  aoAdicionarContador(){
    this.contador = ++this.contador;
  }
}
