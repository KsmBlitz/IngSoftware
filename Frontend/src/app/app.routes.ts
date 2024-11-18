import { Routes } from '@angular/router';

// Importa los componentes de las páginas
import { HomeComponent } from './pages/home/home.component';
import { SalonesComponent } from './pages/salones/salones.component';
import { BanqueteriaComponent } from './pages/banqueteria/banqueteria.component';
import { EntretenimientoComponent } from './pages/entretenimiento/entretenimiento.component';
import { BuscarReservaComponent } from './pages/buscar-reserva/buscar-reserva.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },  // Ruta para Home
  { path: 'salones', component: SalonesComponent },
  { path: 'banqueteria', component: BanqueteriaComponent },
  { path: 'entretenimiento', component: EntretenimientoComponent },
  { path: 'buscar-reserva', component: BuscarReservaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: '**', redirectTo: '' }  // Redirigir a Home si la ruta no existe
];
