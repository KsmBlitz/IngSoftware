import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-salones',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './salones.component.html',
  styleUrl: './salones.component.css'
})
export class SalonesComponent {

}
