import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-buscar-reserva',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './buscar-reserva.component.html',
  styleUrl: './buscar-reserva.component.css'
})
export class BuscarReservaComponent {

}
