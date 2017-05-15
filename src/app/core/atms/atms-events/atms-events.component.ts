import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-atms-events',
  templateUrl: './atms-events.component.html',
  styleUrls: ['./atms-events.component.scss']
})
export class AtmsEventsComponent implements OnInit {

  private controlGroups = [
    {
      title:'settings',
      name:'settings',
      controls:[
        {
          name:'c1',
          type:'text',
          value:'a',
          placeholder:'TexT'
        },
        {
          name:'c2',
          type:'text',
          value:'b'
        },
        {
          name:'c3',
          type:'text',
          value:'b'
        },
        {
          name:'c4',
          type:'text',
          value:'b'
        },
        {
          name:'c5',
          type:'text',
          value:'b'
        }
      ]
    },
    {
      title:'something',
      name:'something',
      controls:[
        {
          name:'c11',
          type:'text',
          value:'a',
          placeholder:'TexT'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  submitForm(e) {
    console.log(e);
  }

}
