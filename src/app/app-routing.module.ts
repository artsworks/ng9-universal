import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
  },
  {
    path: "profile",
    loadChildren: () =>
      import("./profile/profile.module").then(m => m.ProfileModule)
  },
  {
    path: "lost",
    loadChildren: () => import("./lost/lost.module").then(m => m.LostModule)
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  { path: 'lost', loadChildren: () => import('./lost/lost.module').then(m => m.LostModule) },
  {
    path: "**",
    redirectTo: "/lost",
    pathMatch: "full"
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
