import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalComponent } from './page/global/global.component';
import { HeroComponent } from './page/global/hero/hero.component';
import { GalleryComponent } from './page/global/gallery/gallery.component';
import { BottomComponent } from './page/global/bottom/bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalComponent,
    HeroComponent,
    GalleryComponent,
    BottomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
