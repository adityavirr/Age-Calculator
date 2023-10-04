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
    this.years = 0;
    this.months = 0;
    this.days = 0;
  }

  birthdate: string = '';
  years: number = 0;
  months: number = 0;
  days: number = 0;

  calculateAge() {
    if (this.birthdate) {
      const birthdateDate = new Date(this.birthdate);
      const today = new Date();
  
      const ageInMilliseconds = today.getTime() - birthdateDate.getTime();
      const ageDate = new Date(ageInMilliseconds);
  
      this.years = ageDate.getFullYear() - 1970;
      this.months = ageDate.getMonth();
      this.days = ageDate.getDate() - 1;
  
    } else {
      this.birthdate = '';
      this.years = 0;
      this.months = 0;
      this.days = 0;
    }
  }
}
