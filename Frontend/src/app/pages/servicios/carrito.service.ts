import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
//Servicio aderido al Carrito, para poder agregar y eliminar productos//
interface Producto {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
}

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private carritoSubject = new BehaviorSubject<Producto[]>([]);
  carrito$ = this.carritoSubject.asObservable();

  agregarProducto(producto: Producto) {
    const carrito = this.carritoSubject.value;
    const productoExistente = carrito.find((p) => p.id === producto.id);

    if (productoExistente) {
      productoExistente.cantidad += 1;
    } else {
      carrito.push({ ...producto, cantidad: 1 });
    }

    this.carritoSubject.next([...carrito]);
  }

  obtenerCarrito(): Producto[] {
    return this.carritoSubject.value;
  }

  eliminarProducto(producto: Producto) {
    const carrito = this.carritoSubject.value.filter((p) => p.id !== producto.id);
    this.carritoSubject.next([...carrito]);
  }
}
