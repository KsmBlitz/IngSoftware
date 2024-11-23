import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios_Usuarioreserva/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuario: any = {};

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.obtenerUsuario().subscribe((data) => {
      this.usuario = data;
    });
  }
}
