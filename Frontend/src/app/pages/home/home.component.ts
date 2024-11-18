import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Cambiado a 'styleUrls'
})
export class HomeComponent {
  constructor(private router: Router) {}

  // Método para navegación
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
