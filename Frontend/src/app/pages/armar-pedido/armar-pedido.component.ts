import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Importar FormsModule
import { CommonModule } from '@angular/common';  // Importar CommonModule desde @angular/common

@Component({
  selector: 'app-armar-pedido',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, NgClass, FormsModule, CommonModule],  // Corregir imports
  templateUrl: './armar-pedido.component.html',
  styleUrls: ['./armar-pedido.component.css']
})
export class ArmarPedidoComponent {
  currentStep: number = 1;
  selectedSalonType: string | null = null;
  numPeople: number = 0;
  location: string = '';
  filterPeople: number | null = null;
  filterPrice: number | null = null;
  filterAvailability: boolean = false;

  salons = [
    { name: 'Salón A', capacity: 50, price: 500, available: true },
    { name: 'Salón B', capacity: 100, price: 800, available: false },
    { name: 'Salón C', capacity: 30, price: 300, available: true },
  ];

  filteredSalons = this.salons;

  // Método para seleccionar el tipo de salón (propio o arrendado)
  selectSalonType(type: string) {
    this.selectedSalonType = type;
    this.currentStep = 2; // Avanza al siguiente paso
  }

  // Método para enviar el formulario de salón propio
  submitForm() {
    this.currentStep = 3; // Avanza al paso 3 (Confirmar pedido)
  }

  // Método para seleccionar un salón arrendado
  selectSalon(salon: any) {
    console.log(`Seleccionado el salón: ${salon.name}`);
    this.currentStep = 3; // Avanza al paso 3 (Confirmar pedido)
  }

  // Aplica los filtros de salón arrendado
  applyFilters() {
    this.filteredSalons = this.salons.filter(salon => {
      return (
        (this.filterPeople ? salon.capacity >= this.filterPeople : true) &&
        (this.filterPrice ? salon.price <= this.filterPrice : true) &&
        (this.filterAvailability ? salon.available : true)
      );
    });
  }

  // Detecta los cambios en los filtros y los aplica
  ngOnChanges() {
    this.applyFilters();
  }
}
