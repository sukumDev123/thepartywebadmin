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
import { UserComponent } from "./components/user/user.component"
import { HistoryComponent } from "./components/user/history/history.component"
import { PartyHandlerComponent } from "./components/user/party-handler/party-handler.component"
import { SignupComponent } from "./components/signup/signup.component"
import { RankComponent } from "./components/rank/rank.component"
import { AdminGuard } from "./guards/admin.guard"

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
    path: "signup",
    component: SignupComponent
  },
  {
    path: "admin",
    component: AdminComponent,

    children: [
      { path: "songBand", component: SongBandComponent },
      { path: "location", component: LocaltionComponent },
      { path: "food", component: FoodComponent },
      { path: "tolist", component: ToListComponent },
      { path: "theme", component: ThemeComponent },
      { path: "rank", component: RankComponent }
    ]
  },
  {
    path: "user",
    component: UserComponent,

    children: [
      { path: "history", component: HistoryComponent },
      { path: "selectparty", component: PartyHandlerComponent }
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
