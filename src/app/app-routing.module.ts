import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { SigninComponent } from "./components/signin/signin.component"
import { AdminComponent } from "./components/admin/admin.component"
import { SongBandComponent } from "./components/song-band/song-band.component"
import { FoodComponent } from "./components/food/food.component"
import { LocaltionComponent } from "./components/localtion/localtion.component"
import { ToListComponent } from "./components/to-list/to-list.component"
import { ThemeComponent } from "./components/theme/theme.component"
import { HomeComponent } from "./components/home/home.component"
import { SelectedPartyComponent } from "./components/selected-party/selected-party.component"
import { UserGuard } from "./guards/user.guard"
import { NotSignGuard } from "./guards/not-sign.guard"

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "selectedParty",
    component: SelectedPartyComponent
  },
  {
    path: "signin",
    component: SigninComponent,
    canActivate: [NotSignGuard]
  },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [UserGuard],
    children: [
      { path: "songBand", component: SongBandComponent },
      { path: "location", component: LocaltionComponent },
      { path: "food", component: FoodComponent },
      { path: "tolist", component: ToListComponent },
      { path: "theme", component: ThemeComponent }
    ]
  },
  {
    path: "admin",
    redirectTo: "/admin/tolist",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "signin",
    pathMatch: "full"
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
