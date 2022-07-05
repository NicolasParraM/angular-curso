import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

    heroes: string[] = ['Spiderman', 'Jhon Wick', 'DeadPool', 'Flash', 'MoonKnight'];
    heroeBorrado: string = '';

    borrarHeroe() {
      this.heroeBorrado = this.heroes.shift() || "";

    }

  }
