import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CarritoService } from '../../pages/servicios/carrito.service';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
}

@Component({
  selector: 'app-carrito',
  standalone: true,
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
  imports: [CommonModule, NavbarComponent, FooterComponent],
})
export class CarritoComponent implements OnInit {
  carrito: Producto[] = [];

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    // Al agregar un dispositivo al carrito este inicia
    this.carrito = this.carritoService.obtenerCarrito();

    // Suscripción a cambios en el carrito
    this.carritoService.carrito$.subscribe((carrito: Producto[]) => {
      this.carrito = carrito;
    });
  }

  eliminarDelCarrito(producto: Producto) {
    this.carritoService.eliminarProducto(producto);
  }

  calcularTotal(): number {
    return this.carrito.reduce(
      (total: number, producto: Producto) =>
        total + producto.precio * producto.cantidad,
      0
    );
  }
}
