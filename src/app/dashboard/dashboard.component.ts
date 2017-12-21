import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
    this.single = this.data;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }


  multi: any[]=[];
  single: any[] =[];

  view: any[] = [250, 100];
  tooltipdisabled = true;
  // options
  showXAxis = false;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = false;
  yAxisLabel = 'Population';
  
  colorScheme = {
    domain: ['#1E8449', '#3449EE', '#FFC300', '#AAAAAA']
  };

  onSelect(event) {
    console.log(event);
    
 }

 data = [
    {
      "name": "Germany",
      "value": 40632
    },
    {
      "name": "United States",
      "value": 49737
    },
    {
      "name": "France",
      "value": 36745
    },
    {
      "name": "United Kingdom",
      "value": 36240
    },
    {
      "name": "Spain",
      "value": 33000
    },
    {
      "name": "Italy",
      "value": 35800
    }
  ];
}
