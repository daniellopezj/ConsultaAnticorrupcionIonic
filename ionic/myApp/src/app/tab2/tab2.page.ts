import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departamento } from 'src/app/Class/Departamento';
import { Municipio } from 'src/app/Class/Municipio';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

@Injectable()
export class Tab2Page {
  file: any;
  coddep: any;
  listdep: Array<Departamento> = new Array();
  listmunicipio: Array<Municipio> = new Array();
  municipio: any;
  constructor(public http: HttpClient) {
    this.loadFyle();
  }

  private loadFyle() {
    this.http.get('../../assets/consulta.json').subscribe(data => {
      this.file = data;
      this.loadDepartment();
    });
  }

  private loadDepartment() {
    let aux = this.file.departamento;
    for (let dep of this.file) {
      if (aux != dep.departamento) {
        this.listdep.push(new Departamento(dep.codigo_departamento, dep.departamento));
        aux = dep.departamento;
      }
    }
  }

  private loadMunicipio() {
    this.listmunicipio= new Array();
    console.log(this.coddep);
    for(let dep of this.file){
      if(this.coddep == dep.codigo_departamento){
        this.listmunicipio.push(new Municipio(dep.codigo_municipio, dep.municipio,dep.censo));
      }
    }
  }
}