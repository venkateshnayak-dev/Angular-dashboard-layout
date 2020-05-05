import { Component, OnInit, Input } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.css'],
  animations:[
    trigger('changeState',[
      state('state1', style({
        background:'url("../assets/images/Send_message.png")',
        height:'100px',
        width:'100px',
        margin:'auto',
        backgroundSize: 'cover',
        transform: 'scale(1)'
      })),
      state('state1', style({
        background:'url("../assets/images/Send_message.png")',
        height:'65px',
        width:'65px',
        margin:'auto',
        backgroundSize: 'cover',
        marginTop: '-5%',
        transform: 'scale(1)'
      })),
      transition('*=>state1', animate('500ms')),
      transition('*=>state2', animate('200ms'))
    ])
  ]
})
export class AnimateComponent implements OnInit {

  @Input() currentState;

  constructor() { }

  ngOnInit() {
  }

}
