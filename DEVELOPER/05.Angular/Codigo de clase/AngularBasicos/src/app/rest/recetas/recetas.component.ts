import { Component } from '@angular/core';
import { IMeals } from 'src/app/interfaces/meal.interface';
import { RecetasService } from 'src/app/services/recetas.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent {
  categoriaSeleccionada: string = '';
  recetario: IMeals = {
    meals: []
  };
  mostrarError = false;
 
  constructor(private recetasService: RecetasService) {}
    // Pasos:
    // Servicio: Importar módulo HttpClient y Observable
    // HttpClient implementarlo en el constructor como inyección de dependencia
    // Desarrollar la función getRecetas
    // Componente: Llamar al método getChiste del servicio, suscribirse a los cambios
    // y recibir la información en un json.
    // Una vez recibida, la pasamos a una propiedad del componente que será la que utilicemos en el html para ver los datos


  getRecetas() {
    this.recetasService.getRecetas(this.categoriaSeleccionada).subscribe({
      next: (data: IMeals) => {
        console.log(data);
        this.recetario = data;

        this.mostrarError = false;
      },
      error: (err) => (this.mostrarError = true),
      complete: () => console.log('ok')
    });
  }
}
