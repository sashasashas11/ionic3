import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';


@IonicPage()
@Component({
  selector: 'page-test-tab',
  templateUrl: 'test-tab.html',
})
export class TestTabPage {
  textNotification: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private localNotifications: LocalNotifications) {
    this.textNotification = 'test description'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestTabPage');
  }

  goToMyPage() {
    this.navCtrl.push('TestModPage');
  }

  addNotification(text) {
    console.log(text);

    this.localNotifications.schedule({
      title: 'Test Application',
      text: text,
      at: new Date(new Date().getTime() + 3600),
      color: '005eff',
      led: 'c900ff',
      sound: 'file://sound.mp3'
    });
  }

}
