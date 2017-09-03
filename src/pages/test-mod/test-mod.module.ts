import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestModPage } from './test-mod';
import {ComponentsModule} from "../../components/components.module"

@NgModule({
  declarations: [
    TestModPage,
  ],
  imports: [
    IonicPageModule.forChild(TestModPage),
    ComponentsModule
  ],
  exports: [
    TestModPage
  ]
})
export class TestModPageModule {}
