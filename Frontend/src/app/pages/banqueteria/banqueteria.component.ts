import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-banqueteria',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './banqueteria.component.html',
  styleUrl: './banqueteria.component.css'
})
export class BanqueteriaComponent {

}
