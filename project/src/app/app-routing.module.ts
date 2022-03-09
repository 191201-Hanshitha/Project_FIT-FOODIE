import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShowuserComponent } from './showuser/showuser.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [{path:'',component: LoginComponent},
{path:'hrhomepage',
children:[{path:'',component: HomepageComponent},
{path:'register',canActivate: [AuthGuard],component: RegisterComponent},
{path:'showuser',canActivate: [AuthGuard],component: ShowuserComponent}]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
