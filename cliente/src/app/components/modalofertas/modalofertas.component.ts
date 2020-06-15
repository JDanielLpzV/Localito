import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { OfertaInterface } from '../../models/localito';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service'
@Component({
  selector: 'app-modalofertas',
  templateUrl: './modalofertas.component.html',
  styleUrls: ['./modalofertas.component.css'],
  providers: [AuthService]
})
export class ModalofertasComponent implements OnInit {

  constructor(private dataApi: DataApiService, private authService: AuthService) { }
  public userCorreo: string = null;
  @ViewChild('btnClose') btnClose: ElementRef;
  @Input() userUid: string;
  @Input() Correo: string;
  ngOnInit(): void {
    this.getCurrentUser();

  }
  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.userCorreo = auth.email;

      }
    });
  }
  onSaveOferta(ofertaForm: NgForm): void {
    if (ofertaForm.value.Id == null) {
      // New 
      // localitoForm.value.userUid = this.userUid;
      ofertaForm.value.Correo = this.userCorreo;
      this.dataApi.addOfertas(ofertaForm.value);
    } else {
      // Update
      this.dataApi.updateOfertas(ofertaForm.value);
    }
    ofertaForm.resetForm();
    this.btnClose.nativeElement.click();
  }
}
