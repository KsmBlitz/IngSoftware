import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Asegúrate de importar RouterModule
import { routes } from './app.routes';  // Importa tus rutas

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,],  // Importa RouterModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';
}
