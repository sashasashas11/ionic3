import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestTab2Page } from './test-tab2';
import { ComponentsModule } from "../../components/components.module"


@NgModule({
  declarations: [
    TestTab2Page,
  ],
  imports: [
    IonicPageModule.forChild(TestTab2Page),
    ComponentsModule
  ],
  exports: [
    TestTab2Page
  ]
})
export class TestTab2PageModule {}
