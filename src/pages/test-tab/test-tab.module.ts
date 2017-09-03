import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestTabPage } from './test-tab';
import { ComponentsModule } from "../../components/components.module"

@NgModule({
  declarations: [
    TestTabPage,
  ],
  imports: [
    IonicPageModule.forChild(TestTabPage),
    ComponentsModule
  ],
  exports: [
    TestTabPage
  ]
})
export class TestTabPageModule {}
