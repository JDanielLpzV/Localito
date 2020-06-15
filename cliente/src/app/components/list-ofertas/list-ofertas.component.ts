import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';

import { OfertaInterface } from '../../models/localito';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-list-ofertas',
  templateUrl: './list-ofertas.component.html',
  styleUrls: ['./list-ofertas.component.css'],
  providers: [AuthService]
})
export class ListOfertasComponent implements OnInit {

  constructor(private dataApi: DataApiService, private authService: AuthService) { }
  public userCorreo: string = null;
  private oferta: OfertaInterface = {}
  private ofertas: OfertaInterface[];
  ngOnInit(): void {
    this.getListOfertas();
    this.getCurrentUser();
  }
  getListOfertas() {
    this.dataApi.getAllOfertas().subscribe(ofertas => {
      this.ofertas = ofertas;
    });
  }
  onDeleteOferta(idOferta: string) {
    const confirmacion = confirm("¿Estas seguro de eliminar la oferta?");
    if (confirmacion) {
      this.dataApi.deleteOfertas(idOferta);
    }

  }
  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.userCorreo = auth.email;

      }
    })
  }

  onPreUpdateOferta(oferta: OfertaInterface) {
    this.dataApi.selectedOferta = Object.assign({}, oferta);
  }

}
