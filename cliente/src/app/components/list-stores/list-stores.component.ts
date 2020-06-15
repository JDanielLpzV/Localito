import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { LocalitoInterface } from '../../models/localito';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-list-stores',
  templateUrl: './list-stores.component.html',
  styleUrls: ['./list-stores.component.css'],
  providers: [AuthService]
})
export class ListStoresComponent implements OnInit {
  constructor(private dataApi: DataApiService, private authService: AuthService) { }
  public userCorreo: string = null;
  // public isAdmin: any = null;
  private localito: LocalitoInterface = {}
  private localitos: LocalitoInterface[];

  ngOnInit(): void {
    this.getListLocalitos();
    this.getCurrentUser();

  }
  getListLocalitos() {
    this.dataApi.getAllLocalitos().subscribe(localitos => {
      this.localitos = localitos;
    });
  }
  onDeleteLocalito(idLocalito: string) {
    const confirmacion = confirm("¿Estas seguro de eliminar el registro?");
    if (confirmacion) {
      this.dataApi.deleteLocalitos(idLocalito);
    }

  }
  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.userCorreo = auth.email;

      }
    })
  }

  onPreUpdateLocalito(localito: LocalitoInterface) {
    this.dataApi.selectedLocalito = Object.assign({}, localito);
  }
}
