import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./layout/main/main.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      // { path: '', pathMatch: 'full', redirectTo },
      // {
      //   path: '',
      //   component: FaxActivityComponent,
      //   canActivate: [AuthGuard, RoleGuard],
      //   children: [{ path: ':id', component: FaxPreviewComponent }],
      //   data: {
      //     expectedRoles: ['user', 'admin'],
      //   },
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
