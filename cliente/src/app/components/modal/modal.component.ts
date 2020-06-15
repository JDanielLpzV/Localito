import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { LocalitoInterface } from '../../models/localito';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ListStoresComponent } from '../list-stores/list-stores.component';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [AuthService]
})
export class ModalComponent implements OnInit {
  public hijo: ListStoresComponent;
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
    })
  }
  onSaveLocalito(localitoForm: NgForm): void {
    if (localitoForm.value.Id == null) {
      // New 
      // localitoForm.value.userUid = this.userUid;
      localitoForm.value.Correo = this.userCorreo;
      this.dataApi.addLocalitos(localitoForm.value);
    } else {
      // Update
      this.dataApi.updateLocalitos(localitoForm.value);
    }
    localitoForm.resetForm();
    this.btnClose.nativeElement.click();
  }
}
