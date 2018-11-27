import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { SigninComponent } from "./components/signin/signin.component"
import { AdminComponent } from "./components/admin/admin.component"
import { SongBandComponent } from "./components/song-band/song-band.component"
import { FoodComponent } from "./components/food/food.component"
import { LocaltionComponent } from "./components/localtion/localtion.component"
import { ToListComponent } from "./components/to-list/to-list.component"
import { ThemeComponent } from "./components/theme/theme.component"

const routes: Routes = [
  {
    path: "signin",
    component: SigninComponent
  },
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "songBand", component: SongBandComponent },
      { path: "location", component: LocaltionComponent },
      { path: "food", component: FoodComponent },
      { path: "tolist", component: ToListComponent },
      { path: "theme", component: ThemeComponent }
    ]
  },
  {
    path: "**",
    redirectTo: "signin"
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
