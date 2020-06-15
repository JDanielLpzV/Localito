import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  public ofertas = [];
  public oferta = '';
  ngOnInit() {
    this.dataApi.getAllOfertas().subscribe(ofertas => {
      this.ofertas = ofertas;
    });
    console.log(this.ofertas);

  }

}
