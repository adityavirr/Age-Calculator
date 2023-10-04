import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-age-calculator',
  templateUrl: './age-calculator.component.html',
  styleUrls: ['./age-calculator.component.css']
})
export class AgeCalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.birthdate = '';
    this.age = 0;
  }

  birthdate!: string;
  age!: number;

  calculateAge() {
    if (this.birthdate) {
      const birthdateDate = new Date(this.birthdate);
      const today = new Date();

      const ageInMilliseconds = today.getTime() - birthdateDate.getTime();
      const ageDate = new Date(ageInMilliseconds);

      this.age = Math.abs(ageDate.getUTCFullYear() - 1970);
    } else {
      this.age = 0;
    }
  }

}



