import { Component, OnInit } from '@angular/core';
import { ReservasService } from '../servicios_Usuarioreserva/reservas.service';

@Component({
  selector: 'app-buscar-reserva',
  templateUrl: './buscar-reserva.component.html',
  styleUrls: ['./buscar-reserva.component.css']
})
export class BuscarReservaComponent implements OnInit {
  reservas: any[] = [];

  constructor(private reservasService: ReservasService) {}

  ngOnInit(): void {
    this.reservasService.obtenerReservas().subscribe((data) => {
      this.reservas = data;
    });
  }
}
