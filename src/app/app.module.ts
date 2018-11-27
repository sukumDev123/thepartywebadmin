import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"
import { HttpClientModule } from "@angular/common/http"
import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { SigninComponent } from "./components/signin/signin.component"
import { SongBandComponent } from "./components/song-band/song-band.component"
import { LocaltionComponent } from "./components/localtion/localtion.component"
import { FoodComponent } from "./components/food/food.component"
import { AdminComponent } from "./components/admin/admin.component"
import { FormsModule } from "@angular/forms"
import { ToListComponent } from "./components/to-list/to-list.component"
import { StoreModule } from "@ngrx/store"
import { reducer } from "./store";
import { HandlerMsgComponent } from './components/handler-msg/handler-msg.component';
import { ThemeComponent } from './components/theme/theme.component'
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SongBandComponent,
    LocaltionComponent,
    FoodComponent,
    AdminComponent,
    ToListComponent,
    HandlerMsgComponent,
    ThemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
