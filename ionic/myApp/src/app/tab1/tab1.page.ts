import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

@Injectable()
export class Tab1Page implements OnInit {
  ngOnInit(): void {
    this.loadFyle();
  }
  generaly: any;

  constructor(public http: HttpClient) {

  }

  private  loadFyle() {
     this.http.get('../../assets/datos.json').subscribe(data => {
      this.generaly = data;
    });
  }

}
