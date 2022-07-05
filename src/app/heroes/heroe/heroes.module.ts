import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe.component';
import { ListadoComponent } from '../listado/listado.component';
import { CommonModule } from '@angular/common';



@NgModule({
    declarations: [
      HeroeComponent,
      ListadoComponent,
    ],
    exports: [
      ListadoComponent
    ],
    imports: [
      CommonModule /* ofrece directivas como el NgFor, NgIf, etc... */
    ]
})
export class heroesModule {

}
