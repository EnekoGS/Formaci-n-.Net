import { Component } from '@angular/core';
import { IGiphy } from 'src/app/interfaces/giphy.interface';
import { deportesService } from 'src/app/services/giphy.service';



@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent {
  deportesSeleccionado: string = '';
  datos: IGiphy = {
    data : []
  };
  
  mostrarError = false;

  constructor(private deportesService: deportesService)  {}
  
  getDeportes() {
    this.deportesService.getDeportes(this.deportesSeleccionado).subscribe({
      next: (data: IGiphy) => {
        console.log(data);
        this.datos = data;

        this.mostrarError = false;
      },
      error: (err) => (this.mostrarError = true),
      complete: () => console.log('ok')
    })
  }
  
}
