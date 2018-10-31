import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { Homework2Component } from './homework2/homework2.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    TestComponentComponent,
    Homework2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, TestComponentComponent, ServerComponent, Homework2Component]
})
export class AppModule { }
