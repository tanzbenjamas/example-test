import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Question2Service } from '../question2.service';

@Component({
  selector: 'app-qes2',
  templateUrl: './qes2.component.html',
  styleUrls: ['./qes2.component.css'],
})
export class Qes2Component implements OnInit {
  displayedColumns: string[] = ['position'];
  dataSource;
  textSearch: string = '';

  constructor(
    private qesService: Question2Service
  ) {
    this.qesService.getRest_Api().subscribe((q2) => {
      console.log(q2[0]);
      this.dataSource = q2;
    });
  }
  applyFilter(event: KeyboardEvent) {
    this.filtersearch(event);
  }
  filtersearch(event){
    var filterValue = event.target.value;
    this.qesService.getRest_Api().subscribe((heroes) => (this.dataSource = heroes.filter((Hero) => Hero.indexOf(filterValue) != -1)));
  }

  ngOnInit(): void {
    this.qesService.getRest_Api().subscribe((q2) => {
      console.log(q2);
    });
  }
}
