import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-test-tab',
  templateUrl: 'test-tab.html',
})
export class TestTabPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestTabPage');
  }

  goToMyPage() {
    this.navCtrl.push('TestModPage');
  }

}
