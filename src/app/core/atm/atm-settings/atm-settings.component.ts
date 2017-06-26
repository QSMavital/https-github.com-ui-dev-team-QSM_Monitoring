import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {CustomControlGroup} from "../../../config/interfaces/form.interface";
import {FormBuilderService} from "../../../shared/services/form-builder.service";
import {NgRedux, select} from "@angular-redux/store";
import {IStore} from "../../../../store/index";
import {Atm} from "../../../config/atm";
import {ActivatedRoute} from "@angular/router";
import {AtmActions} from "../../../../store/actions/atm-actions";
import {Observable} from "rxjs";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'ui-atm-settings',
  templateUrl: './atm-settings.component.html',
  styleUrls: ['./atm-settings.component.scss']
})

export class AtmSettingsComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  public controlGroups: CustomControlGroup[] = [];
  private atmSettings;
  private latestState;
  private $atm_settings_ref;
  @select(['atm', 'settings']) $atm_settings: Observable<any>;


  constructor(private frmBuilderSrv: FormBuilderService,
              private ngRedux: NgRedux<IStore>,
              private route: ActivatedRoute) {
    this.atmSettings = this.ngRedux.getState().userSettings.atmCustomization['atmSettings'];
    this.ngRedux.dispatch({
      type: AtmActions.ATM_GET_SETTINGS,
      payload: {atmNo: this.route.parent.params['value']['id']}
    });
  }


  ngOnInit() {
    this.createForm();
    this.$atm_settings_ref = this.$atm_settings.subscribe((state) => {
      if (!isNullOrUndefined(state)) {
        this.latestState = state;
        this.setDataToForm(state);
      }
    })
  }

  createForm() {
    this.atmSettings.forEach((config) => {
      if (config.visible) {
        this.controlGroups.push(Atm.Settings[config.field]);
      }
    });
    this.form = this.frmBuilderSrv.createForm(this.controlGroups);
  }

  cancel() {
    this.form.markAsPristine();
    this.setDataToForm(this.latestState);
  }

  setDataToForm(state) {
    for (var prop in state.generalSettings) {
      if (!isNullOrUndefined(this.form.controls['generalSettings']['controls'][prop])) {
        this.form.controls['generalSettings']['controls'][prop].setValue(state.generalSettings[prop]);
      }
    }
    for (var prop in state.disableSettings) {
      if (!isNullOrUndefined(this.form.controls['disableSettings']['controls'][prop])) {
        this.form.controls['disableSettings']['controls'][prop].setValue(state.disableSettings[prop]);
      }
    }
    for (var prop in state.limitationAmountsSettings) {
      if (!isNullOrUndefined(this.form.controls['limitationAmountsSettings']['controls'][prop])) {
        this.form.controls['limitationAmountsSettings']['controls'][prop].setValue(state.limitationAmountsSettings[prop]);
      }
    }
    for (var prop in state.treatmentDeviceSettings) {
      if (!isNullOrUndefined(this.form.controls['treatmentDeviceSettings']['controls'][prop])) {
        this.form.controls['treatmentDeviceSettings']['controls'][prop].setValue(state.treatmentDeviceSettings[prop]);
      }
    }

    state.cassettesSettings.forEach((item, index) => {
      if (!isNullOrUndefined(this.form.controls['cassettesSettings']['controls'][`cassette${index + 1}`].controls['currency'].setValue(item['currencyCode']))){
        this.form.controls['cassettesSettings']['controls'][`cassette${index + 1}`].controls['currency'].setValue(item['currencyCode']);
      }
      if (!isNullOrUndefined(this.form.controls['cassettesSettings']['controls'][`cassette${index + 1}`].controls['denomination'].setValue(item['denomination']))){
        this.form.controls['cassettesSettings']['controls'][`cassette${index + 1}`].controls['denomination'].setValue(item['denomination']);
      }
    });

    state.terminalNearestSettings.forEach((item, index) => {
      if (!isNullOrUndefined(this.form.controls['terminalNearestSettings']['controls'][`nearestSettings${index + 1}`])) {
        this.form.controls['terminalNearestSettings']['controls'][`nearestSettings${index + 1}`].controls['bankNo'].setValue(item['bankNo']);
        this.form.controls['terminalNearestSettings']['controls'][`nearestSettings${index + 1}`].controls['branch'].setValue(item['branch']);
        this.form.controls['terminalNearestSettings']['controls'][`nearestSettings${index + 1}`].controls['address'].setValue(item['address']);
      }

    })
  }

  save() {
    this.form.markAsPristine();
    this.ngRedux.dispatch({
      type: AtmActions.ATM_UPDATE_SETTINGS,
      payload: this.frmBuilderSrv.atmFormToPayload(this.form.getRawValue())
    });
  }


}
