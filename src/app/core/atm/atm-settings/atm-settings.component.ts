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
