import {Component, OnInit} from '@angular/core';
import {CustomControlGroup} from "../../../config/interfaces/form.interface";

@Component({
  selector: 'ui-atm-settings',
  templateUrl: './atm-settings.component.html',
  styleUrls: ['./atm-settings.component.scss']
})

export class AtmSettingsComponent implements OnInit {

  private controlGroups: CustomControlGroup[] = [
    {
      title: 'settings',
      name: 'settings',
      controls: [
        {
          name: 'c1',
          label: 'c1',
          type: 'text',
          value: 'a',
          placeholder: 'TexT'
        },
        {
          name: 'c2',
          label: 'c2',
          type: 'text',
          value: 'b'
        },
        {
          name: 'c3',
          label: 'c3',
          type: 'text',
          value: 'b'
        },
        {
          name: 'c4',
          label: 'c4',
          type: 'text',
          value: 'b'
        },
        {
          name: 'c5',
          label: 'c5',
          type: 'text',
          value: 'b'
        },
        {
          name: 'c6',
          label: 'c6',
          type: 'text',
          value: 'b'
        },
        {
          name: 'c7',
          label: 'c7',
          type: 'text',
          value: 'b'
        },
        {
          name: 'c8',
          label: 'c8',
          type: 'text',
          value: 'b'
        },
        {
          name: 'c9',
          label: 'c9',
          type: 'text',
          value: 'b'
        },
        {
          name: 'c10',
          label: 'c10',
          type: 'text',
          value: 'b'
        },
        {
          name: 'c11',
          label: 'c11',
          type: 'text',
          value: 'b'
        },
        {
          name: 'c12',
          label: 'c12',
          type: 'text',
          value: 'b'
        },
        {
          name: 'c13',
          label: 'c13',
          type: 'text',
          value: 'b'
        },
        {
          name: 'c14',
          label: 'c114',
          type: 'text',
          value: 'b'
        },
        {
          name: 'c15',
          label: 'c15',
          type: 'text',
          value: 'b'
        },
        {
          name: 'c16',
          label: 'c16',
          type: 'text',
          value: 'b'
        }
      ]
    },
    {
      title: 'something',
      name: 'something',
      controls: [
        {
          name: 'c201',
          label: 'c201',
          type: 'text',
          value: 'a',
          placeholder: 'TexT'
        },
        {
          name: 'c202',
          label: 'c202',
          type: 'select',
          value: 4,
          options: [
            {label: 'opt1', value: 1},
            {label: 'opt2', value: 2},
            {label: 'opt3', value: 4},
          ]
        },
        {
          name: 'c203',
          label: 'c203',
          type: 'inputGroup',
          inputs: [
            {
              name: 'c2031',
              type: 'text',
              placeholder: 'aa',
              value: 'something here'
            },
            {
              name: 'c2032',
              type: 'select',
              value: 4,
              options: [
                {label: 'opt1', value: 1},
                {label: 'opt2', value: 2},
                {label: 'opt3', value: 4}
              ]
            }
          ]
        },
        {
          name: 'c204',
          label: 'c204',
          type: 'checkbox',
          value: true
        },
        {
          name: 'c205',
          label: 'c205',
          type: 'inputGroup',
          inputs: [
            {
              name: 'c2051',
              type: 'text',
              placeholder: 'aa',
              value: 'something here'
            },
            {
              name: 'c2052',
              type: 'select',
              value: 4,
              options: [
                {label: 'opt1', value: 1},
                {label: 'opt2', value: 2},
                {label: 'opt3', value: 4}
              ]
            }
          ]
        },
      ]
    }
  ];

  constructor() {
  }

  submitForm(e) {
    console.log(e);
  }

  ngOnInit() {
  }

}
