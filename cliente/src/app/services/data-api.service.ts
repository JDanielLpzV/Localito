import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { LocalitoInterface, OfertaInterface } from '../models/localito';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  private ofertas: Observable<OfertaInterface[]>;
  private ofertasCollection: AngularFirestoreCollection<OfertaInterface>;
  private oferta: Observable<OfertaInterface>;
  private ofertaDoc: AngularFirestoreDocument<OfertaInterface>;
  private localitosCollection: AngularFirestoreCollection<LocalitoInterface>;
  private localitos: Observable<LocalitoInterface[]>;
  private localitoDoc: AngularFirestoreDocument<LocalitoInterface>;
  private localito: Observable<LocalitoInterface>;
  public selectedLocalito: LocalitoInterface = { Id: null };
  public selectedOferta: OfertaInterface = { Id: null };

  constructor(private afs: AngularFirestore) {

    this.ofertasCollection = afs.collection<OfertaInterface>('ofertas')
    this.ofertas = this.ofertasCollection.valueChanges();
    this.ngOnInit(afs);
  }

  ngOnInit(afs2: AngularFirestore) {
    this.localitosCollection = afs2.collection<LocalitoInterface>('localitos')
    this.localitos = this.ofertasCollection.valueChanges();
  }
  addLocalitos(localito: LocalitoInterface): void {
    this.localitosCollection.add(localito);
  }

  getAllLocalitos() {
    return this.localitos = this.localitosCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as LocalitoInterface;
          data.Id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getLocalito(idLocalito: string) {
    this.localitoDoc = this.afs.doc<LocalitoInterface>(`localitos/${idLocalito}`);
    return this.localito = this.localitoDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists == false) {
        return null;
      } else {
        const data = action.payload.data() as LocalitoInterface;
        data.Id = action.payload.id;
        return data;
      }
    }));
  }
  updateLocalitos(localito: LocalitoInterface): void {
    let idLocalito = localito.Id;
    this.localitoDoc = this.afs.doc<LocalitoInterface>(`localitos/${idLocalito}`);
    this.localitoDoc.update(localito);
  }
  deleteLocalitos(idLocalito: string): void {
    this.localitoDoc = this.afs.doc<LocalitoInterface>(`localitos/${idLocalito}`);
    this.localitoDoc.delete();
  }

  //OFERTAS*************************************************
  addOfertas(oferta: OfertaInterface): void {
    this.ofertasCollection.add(oferta);
  }

  getAllOfertas() {
    return this.ofertas = this.ofertasCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as OfertaInterface;
          data.Id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getOferta(idOferta: string) {
    this.ofertaDoc = this.afs.doc<OfertaInterface>(`ofertas/${idOferta}`);
    return this.oferta = this.ofertaDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists == false) {
        return null;
      } else {
        const data = action.payload.data() as OfertaInterface;
        data.Id = action.payload.id;
        return data;
      }
    }));
  }
  getOfertas() {
    return this.ofertas = this.ofertasCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as OfertaInterface;
          data.Id = action.payload.doc.id;
          return data;
        });
      }));
  }
  updateOfertas(oferta: OfertaInterface): void {
    let idOferta = oferta.Id;
    this.ofertaDoc = this.afs.doc<OfertaInterface>(`ofertas/${idOferta}`);
    this.ofertaDoc.update(oferta);
  }
  deleteOfertas(idOferta: string): void {
    this.ofertaDoc = this.afs.doc<OfertaInterface>(`ofertas/${idOferta}`);
    this.ofertaDoc.delete();
  }
}
