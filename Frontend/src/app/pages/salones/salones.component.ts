import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

@Component({
  selector: 'app-salones',
  templateUrl: './salones.component.html',
  styleUrls: ['./salones.component.scss'],
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
})
export class SalonesComponent {
  services: Service[] = [
    { id: 1, name: 'Salón Castillo', description: 'Viña del Mar, Valparaíso', price: 150, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8nqO4-bsCTtasrVlJxUsxQ85a5_NSLziz0g&s', category: 'Grande' },
    { id: 2, name: 'Queen Mary', description: 'Viña del Mar, Valparaíso', price: 300, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF-oXD2BJBEA2w-zgzFFBueYOl7JBWoBEaGA&s', category: 'Mediano' },
    { id: 3, name: 'Salón Esmeralda', description: 'Club Hípico, Santiago', price: 200, image: 'https://image-tc.galaxy.tf/wijpeg-6g1qabb8fle0whipem12v1orv/salon-manquehue-result_standard.jpg?crop=99%2C0%2C1603%2C1202', category: 'Mediano-Junior' },
  ];

  filters: string[] = ['Todos', 'Grande', 'Mediano', 'Mediano-Junior'];
  activeFilter: string = 'Todos';
  filteredServices: Service[] = [...this.services];
  selectedService: Service | null = null;

  applyFilter(filter: string) {
    this.activeFilter = filter;
    this.filteredServices = filter === 'Todos' ? this.services : this.services.filter(service => service.category === filter);
  }

  openModal(service: Service) {
    this.selectedService = service;
  }

  closeModal(event: Event) {
    this.selectedService = null;
  }

  addToCart(service: Service) {
    console.log('Añadido al carrito:', service);
  }
}


