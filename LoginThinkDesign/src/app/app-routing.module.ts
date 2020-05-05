import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefualtComponent } from './layout/defualt/defualt.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component:DefualtComponent,
  children: [
    {path:'',component: DashboardComponent },
    {path:'posts', component: PostsComponent},
    {path:'home', component: HomeComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
