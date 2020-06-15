import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  public localitos = [];
  public localito = '';
  ngOnInit() {
    this.dataApi.getAllLocalitos().subscribe(localitos => {
      this.localitos = localitos;
    });
  }

}
