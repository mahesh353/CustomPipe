import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NamePipe } from './namefilter.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, NamePipe],
  bootstrap: [AppComponent]
})

export class AppModule {
}
