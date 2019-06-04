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
  questions: any = new Array();;
  coddep: any;
  listdep: Array<Departamento> = new Array();
  listmunicipio: Array<Municipio> = new Array();
  municipio: any;
  show: any = false;
  showpregunta: any;
  votacion: any;
  dataQuestion: any = [{ "vva": "", "vnu": "", "tnm": "", "tot": "" }];
  sino: any = [{ "cga": "", "dga": "", "vga": "" }]

  constructor(public http: HttpClient) {
    this.loadFyle();
  }

  private loadFyle() {
    this.http.get('../../assets/consulta.json').subscribe(data => {
      this.file = data;
      this.loadDepartment();
    });
    this.http.get('../../assets/questions.json').subscribe(data => {
      this.questions = data;
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
    this.listmunicipio = new Array();
    for (let dep of this.file) {
      if (this.coddep == dep.codigo_departamento) {
        this.listmunicipio.push(new Municipio(dep.codigo_municipio, dep.municipio, dep.censo));
      }
    }
  }

  private loadQuestions() {
    for (let dep of this.file) {
      if (this.coddep == dep.codigo_departamento && this.municipio == dep.codigo_municipio) {
        this.votacion = dep.votacion;
      }
    }
  }
  private loadquestioninterface(cod: String) {
    for (let q of this.questions) {
      if (cod == q.cpr) {
        this.showpregunta = q.pregunta;
      }
    }
    try {
      for (let re of this.votacion) {
        if (re.gen.cpr == cod) {
          this.dataQuestion = re.gen;
          this.sino = re.vot;
        }
      }
    } catch (e) {
      alert("porfavor seleccione municipio");
    }
  }
}