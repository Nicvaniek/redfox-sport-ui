import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FriendlyDatePipe } from './pipes/friendly-date.pipe';
import { NbIconModule, NbUserModule, NbActionsModule, NbContextMenuModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';



@NgModule({
  declarations: [HeaderComponent, FriendlyDatePipe],
  imports: [
    CommonModule,
    NbEvaIconsModule,
    NbIconModule,
    NbUserModule,
    NbActionsModule,
    NbContextMenuModule,
  ],
  exports: [HeaderComponent, FriendlyDatePipe]
})
export class CoreModule { }
