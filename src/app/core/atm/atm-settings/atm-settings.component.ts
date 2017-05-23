import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {CustomControlGroup} from "../../../config/interfaces/form.interface";
import {FormBuilderService} from "../../../shared/services/form-builder.service";
import {NgRedux} from "@angular-redux/store";
import {IStore} from "../../../../store/index";
import {Atm} from "../../../config/atm";

@Component({
  selector: 'ui-atm-settings',
  templateUrl: './atm-settings.component.html',
  styleUrls: ['./atm-settings.component.scss']
})

export class AtmSettingsComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  public controlGroups: CustomControlGroup[] = [];
  private atmSettings;

  private old = [
    {
      title: 'settings',
      name: 'settings',
      controls: [
        {
          name: 'c1',
          label: 'ATM Number',
          type: 'text'
        },
        {
          name: 'c2',
          label: 'ATM Number',
          type: 'text'
        },
        {
          name: 'c3',
          label: 'ATM Number',
          type: 'text'
        },
        {
          name: 'c4',
          type: 'select',
          label: 'ATM Number',
          value: 4,
          options: [
            {label: 'opt1', value: 1},
            {label: 'opt2', value: 2},
            {label: 'NCR', value: 4}
          ]
        },
        {
          name: 'c5',
          label: 'ATM Number',
          type: 'text'
        },
        {
          name: 'c6',
          label: 'ATM Number',
          type: 'text'
        },
        {
          name: 'c7',
          label: 'ATM Number',
          type: 'text'
        },
        {
          name: 'c8',
          type: 'select',
          label: 'ATM Number',
          value: 4,
          options: [
            {label: 'opt1', value: 1},
            {label: 'opt2', value: 2},
            {label: 'NCR', value: 4}
          ]
        },
        {
          name: 'c9',
          type: 'select',
          label: 'ATM Number',
          value: 4,
          options: [
            {label: 'opt1', value: 1},
            {label: 'opt2', value: 2},
            {label: 'NCR', value: 4}
          ]
        },
        {
          name: 'c10',
          label: 'ATM Number',
          type: 'text'
        },
        {
          name: 'c11',
          type: 'select',
          label: 'ATM Number',
          value: 4,
          options: [
            {label: 'opt1', value: 1},
            {label: 'opt2', value: 2},
            {label: 'NCR', value: 4}
          ]
        },
        {
          name: 'c12',
          type: 'select',
          label: 'ATM Number',
          value: 4,
          options: [
            {label: 'opt1', value: 1},
            {label: 'opt2', value: 2},
            {label: 'NCR', value: 4}
          ]
        },
        {
          name: 'c13', type: 'select',
          label: 'ATM Number',
          value: 4,
          options: [
            {label: 'opt1', value: 1},
            {label: 'opt2', value: 2},
            {label: 'NCR', value: 4}
          ]
        },
        {
          name: 'c14',
          type: 'select',
          label: 'ATM Number',
          value: 4,
          options: [
            {label: 'opt1', value: 1},
            {label: 'opt2', value: 2},
            {label: 'NCR', value: 4}
          ]
        },
        {
          name: 'c15',
          label: 'ATM Number',
          type: 'text'
        },
        {
          name: 'c16',
          label: 'ATM Number',
          type: 'text'
        }
      ]
    },
{
  title: 'settings',
  name: 'settings2',
  controls: [
    {
      name: 'c201',
      label: 'ATM Number',
      type: 'inputGroup',
      inputs: [
        {
          name: 'c2011',
          type: 'select',
          value: 4,
          options: [
            {label: 'opt1', value: 1},
            {label: 'opt2', value: 2},
            {label: '', value: 4}
            ]
        }, {
        name: 'c2012',
        type: 'select',
        value: 4,
        options: [
          {label: 'opt1', value: 1},
          {label: 'opt2', value: 2},
          {label: '', value: 4}
          ]
      }
        ]
    },
    {
      name: 'c202',
      label: 'ATM Number',
      type: 'inputGroup',
      inputs: [
        {
          name: 'c2021',
          type: 'select',
          value: 4,
          options: [
            {label: 'opt1', value: 1},
            {label: 'opt2', value: 2},
            {label: '', value: 4}
            ]
        },
        {
          name: 'c2022',
          type: 'select',
          value: 4,
          options: [
            {label: 'opt1', value: 1},
            {label: 'opt2', value: 2},
            {label: '', value: 4}
            ]
        }
        ]
    },
    {
      name: 'c203',
      label: 'ATM Number',
      type: 'inputGroup',
      inputs: [
        {
          name: 'c2031',
          type: 'select',
          value: 4,
          options: [
            {label: 'opt1', value: 1},
            {label: 'opt2', value: 2},
            {label: '', value: 4}
            ]
        }, {
        name: 'c2032',
        type: 'select',
        value: 4,
        options: [
          {label: 'opt1', value: 1},
          {label: 'opt2', value: 2},
          {label: '', value: 4}
          ]
      }
        ]
    },
    {
      name: 'c204',
      label: 'ATM Number',
      type: 'inputGroup',
      inputs: [
        {
          name: 'c2041',
          type: 'select',
          value: 4,
          options: [
            {label: 'opt1', value: 1},
            {label: 'opt2', value: 2},
            {label: '', value: 4}
            ]
        }, {
        name: 'c2042',
        type: 'select',
        value: 4,
        options: [
          {label: 'opt1', value: 1},
          {label: 'opt2', value: 2},
          {label: '', value: 4}
          ]
      }
        ]
    }
    ]
},
{
  title: 'settings',
    name: 'settings3',
  controls: [
  {
    name: 'c301',
    type: 'inputGroup',
    inputs: [
      {
        name: 'c3011',
        type: 'select',
        value: 4,
        options: [
          {label: 'opt1', value: 1},
          {label: 'opt2', value: 2},
          {label: '', value: 4}
        ]
      }, {
        name: 'c3012-Branch',
        type: 'text',
        placeholder: 'Branch'
      },
      {
        name: 'c3013-Address',
        type: 'text',
        placeholder: 'Address'
      }
    ]
  },
  {
    name: 'c302',
    type: 'inputGroup',
    inputs: [
      {
        name: 'c3021',
        type: 'select',
        value: 4,
        options: [
          {label: 'opt1', value: 1},
          {label: 'opt2', value: 2},
          {label: '', value: 4}
        ]
      }, {
        name: 'c3022-Branch',
        type: 'text',
        placeholder: 'Branch'
      },
      {
        name: 'c3023-Address',
        type: 'text',
        placeholder: 'Address'
      }
    ]
  },
  {
    name: 'c303',
    type: 'inputGroup',
    inputs: [
      {
        name: 'c3031',
        type: 'select',
        value: 4,
        options: [
          {label: 'opt1', value: 1},
          {label: 'opt2', value: 2},
          {label: '', value: 4}
        ]
      }, {
        name: 'c3032-Branch',
        type: 'text',
        placeholder: 'Branch'
      },
      {
        name: 'c3033-Address',
        type: 'text',
        placeholder: 'Address'
      }
    ]
  }
]
},
{
  title: 'settings',
    name: 'settings4',
  controls: [
  {
    name: 'c401',
    label: 'ATM Number',
    type: 'text'
  },
  {
    name: 'c402',
    label: 'ATM Number',
    type: 'text'
  },
  {
    name: 'c403',
    label: 'ATM Number',
    type: 'text'
  },
  {
    name: 'c404',
    label: 'ATM Number',
    type: 'text'
  }
]
},
{
  title: 'settings',
    name: 'settings5',
  controls: [
  {
    name: 'c501',
    label: 'ATM Number',
    type: 'checkbox',
    value: true
  },
  {
    name: 'c502',
    label: 'ATM Number',
    type: 'checkbox',
    value: true
  },
  {
    name: 'c503',
    label: 'ATM Number',
    type: 'checkbox',
    value: false
  },
]
},
{
  title: 'settings',
    name: 'settings5',
  controls: [
  {
    name: 'c501',
    label: 'ATM Number',
    type: 'checkbox',
    value: true
  },
  {
    name: 'c502',
    label: 'ATM Number',
    type: 'checkbox',
    value: true
  },
  {
    name: 'c503',
    label: 'ATM Number',
    type: 'checkbox',
    value: false
  },
]
},
{
  title: 'settings',
    name: 'settings5',
  controls: [
  {
    name: 'c501',
    label: 'ATM Number',
    type: 'checkbox',
    value: true
  },
  {
    name: 'c502',
    label: 'ATM Number',
    type: 'checkbox',
    value: true
  },
  {
    name: 'c503',
    label: 'ATM Number',
    type: 'checkbox',
    value: false
  },
]
},
{
  title: 'settings',
    name: 'settings5',
  controls: [
  {
    name: 'c501',
    label: 'ATM Number',
    type: 'checkbox',
    value: true
  },
  {
    name: 'c502',
    label: 'ATM Number',
    type: 'checkbox',
    value: true
  },
  {
    name: 'c503',
    label: 'ATM Number',
    type: 'checkbox',
    value: false
  },
]
},
{
  title: 'settings',
    name: 'settings',
  controls: [
  {
    name: 'c1',
    label: 'ATM Number',
    type: 'text'
  },
  {
    name: 'c2',
    label: 'ATM Number',
    type: 'text'
  },
  {
    name: 'c3',
    label: 'ATM Number',
    type: 'text'
  },
  {
    name: 'c4',
    type: 'select',
    label: 'ATM Number',
    value: 4,
    options: [
      {label: 'opt1', value: 1},
      {label: 'opt2', value: 2},
      {label: 'NCR', value: 4}
    ]
  },
  {
    name: 'c5',
    label: 'ATM Number',
    type: 'text'
  },
  {
    name: 'c6',
    label: 'ATM Number',
    type: 'text'
  },
  {
    name: 'c7',
    label: 'ATM Number',
    type: 'text'
  },
  {
    name: 'c8',
    type: 'select',
    label: 'ATM Number',
    value: 4,
    options: [
      {label: 'opt1', value: 1},
      {label: 'opt2', value: 2},
      {label: 'NCR', value: 4}
    ]
  },
  {
    name: 'c9',
    type: 'select',
    label: 'ATM Number',
    value: 4,
    options: [
      {label: 'opt1', value: 1},
      {label: 'opt2', value: 2},
      {label: 'NCR', value: 4}
    ]
  },
  {
    name: 'c10',
    label: 'ATM Number',
    type: 'text'
  },
  {
    name: 'c11',
    type: 'select',
    label: 'ATM Number',
    value: 4,
    options: [
      {label: 'opt1', value: 1},
      {label: 'opt2', value: 2},
      {label: 'NCR', value: 4}
    ]
  },
  {
    name: 'c12',
    type: 'select',
    label: 'ATM Number',
    value: 4,
    options: [
      {label: 'opt1', value: 1},
      {label: 'opt2', value: 2},
      {label: 'NCR', value: 4}
    ]
  },
  {
    name: 'c13', type: 'select',
    label: 'ATM Number',
    value: 4,
    options: [
      {label: 'opt1', value: 1},
      {label: 'opt2', value: 2},
      {label: 'NCR', value: 4}
    ]
  },
  {
    name: 'c14',
    type: 'select',
    label: 'ATM Number',
    value: 4,
    options: [
      {label: 'opt1', value: 1},
      {label: 'opt2', value: 2},
      {label: 'NCR', value: 4}
    ]
  },
  {
    name: 'c15',
    label: 'ATM Number',
    type: 'text'
  },
  {
    name: 'c16',
    label: 'ATM Number',
    type: 'text'
  }
]
}
];
  constructor(private frmBuilderSrv: FormBuilderService,private ngRedux: NgRedux<IStore>) {

    this.atmSettings = this.ngRedux.getState().userSettings.atmCustomization['atmSettings'];

  }

  ngOnInit() {
    this.atmSettings.forEach((config)=>{
      if(config.visible){
        this.controlGroups.push(Atm.Settings[config.field]);
      }
    });
    this.form = this.frmBuilderSrv.createForm(this.controlGroups);
  }

  save(){
    console.log('form data:', this.form.getRawValue());
    this.form.markAsPristine();
  }

}
