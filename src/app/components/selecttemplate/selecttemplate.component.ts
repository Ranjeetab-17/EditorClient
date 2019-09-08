import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, keyframes, query, stagger, animateChild, state } from '@angular/animations';

@Component({
  selector: 'app-selecttemplate',
  templateUrl: './selecttemplate.component.html',
  styleUrls: ['./selecttemplate.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
          ]))]), { optional: true }),
      ])
    ]),
  ]
})
export class SelecttemplateComponent implements OnInit {
  mydata: any = [1, 2, 3, 4, 5, 6, 7]
  constructor() { }

  ngOnInit() {
  }

}
