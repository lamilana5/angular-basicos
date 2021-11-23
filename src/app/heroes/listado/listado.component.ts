import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor'];

  heroeBorrado: string = '';

  mostrarBorrado () {
    return this.heroes.length != 0
  }
  borrarHeroe(){

     this.heroeBorrado = this.heroes.pop() || '';
    
  }

}
