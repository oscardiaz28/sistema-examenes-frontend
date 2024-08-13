import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';


@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    FloatLabelModule,
    ButtonModule,
    CalendarModule,
    InputSwitchModule,
    InputTextModule,
    MessagesModule
  ],
  exports: [
    BrowserAnimationsModule,
    FloatLabelModule,
    ButtonModule,
    CalendarModule,
    InputSwitchModule,
    InputTextModule,
    MessagesModule
  ]
})

export class ComponentModule { }
