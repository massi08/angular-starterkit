import {NgModule} from '@angular/core';
import {MainRoutingModule} from './main-routing.module';
import {SharedModule} from '../shared/shared.module';
import {MainComponent} from '../../pages/main/main.component';


@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    SharedModule,
    MainRoutingModule
  ]
})
export class MainModule {
}
