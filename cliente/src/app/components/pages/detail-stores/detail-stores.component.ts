import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { LocalitoInterface, OfertaInterface } from '../../../models/localito';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail-stores',
  templateUrl: './detail-stores.component.html',
  styleUrls: ['./detail-stores.component.css']
})
export class DetailStoresComponent implements OnInit {

  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }
  public localito: LocalitoInterface = {};
  public oferta: OfertaInterface = {};
  ngOnInit() {
    const idLocalito = this.route.snapshot.params['idlocalito'];
    this.getDetalles(idLocalito)
  }
  getDetalles(idLocalito: string): void {
    this.dataApi.getLocalito(idLocalito).subscribe(localito => {
      this.localito = localito;
    });
  }

}
