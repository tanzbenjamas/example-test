import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

export class qesModel {
  constructor(
    public id: number,
    public name: number,
    public qe: string,
    public hasprime: boolean
  ) {}
}

@Component({
  selector: 'app-qes1',
  templateUrl: './qes1.component.html',
  styleUrls: ['./qes1.component.css'],
})
export class Qes1Component implements OnInit {
  qes = ['isPrime', 'isFibanacci'];
  qesModel = new qesModel(1, null, '', null);

  submitted = false;

  getCurrentModel() {
    //2 3 5 7 11 13
  if(this.qesModel.qe=='isPrime'){
  if (this.qesModel.name == null)
  return '';
    if (this.qesModel.name <= 1)
            return false;
        if (this.qesModel.name <= 3)
            return true;


        if (this.qesModel.name % 2 == 0 || this.qesModel.name % 3 == 0)
            return false;

        for (let i = 5; i * i <= this.qesModel.name; i = i + 6)
            if (this.qesModel.name % i == 0 || this.qesModel.name % (i + 2) == 0)
                return false;

        return true;
  }
  else{
    return "testResult" +  JSON.stringify(this.qesModel);

  }
  }

  constructor() {}
  clicknumber(value) {
    console.log(value);
  }
  ngOnInit(): void {}
}
