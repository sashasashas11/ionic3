import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  tab1Root: any;
  tab2Root: any;

  constructor(public navCtrl: NavController, private localNotifications: LocalNotifications) {
    this.tab1Root = 'TestTab2Page';
    this.tab2Root = 'TestTabPage';



  }
}
