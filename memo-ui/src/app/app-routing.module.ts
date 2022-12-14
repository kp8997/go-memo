import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
// import { HomeComponent } from './pages/home/home.component';
import { TopicsComponent } from './pages/topics/topics.component';
import { SigninComponent } from './pages/auth/signin/signin.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { TopicDetailComponent } from './pages/topic-detail/topic-detail.component';
import { AuthGuardService } from './services/auth-guard.service';
import { CurrentComponent } from './pages/auth/current/current.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/topic',
    pathMatch: 'full',
  },
  {
    path: 'topic',
    component: TopicsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'topic/:id',
    component: TopicDetailComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'signin',
        component: SigninComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
      {
        path: 'current',
        component: CurrentComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
