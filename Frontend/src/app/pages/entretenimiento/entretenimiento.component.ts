import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-entretenimiento',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './entretenimiento.component.html',
  styleUrl: './entretenimiento.component.css'
})
export class EntretenimientoComponent {

}
