import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShowuserComponent } from './showuser/showuser.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SideMenuComponent } from './sidemenu/sidemenu.component';
import { YogaComponent } from './yoga/yoga.component';
import { BlogComponent } from './blog/blog.component';
import { FitnessComponent } from './fitness/fitness.component';
import { ToddlerComponent } from './toddler/toddler.component';
import { ChildrenComponent } from './children/children.component';
import { AdolescentComponent } from './adolescent/adolescent.component';
import { MadultComponent } from './madult/madult.component';
import { FadultComponent } from './fadult/fadult.component';
import { PregComponent } from './preg/preg.component';
import { ElderageComponent } from './elderage/elderage.component';
import { ExampleComponent } from './example/example.component';

const routes: Routes = [{path:'',component: LoginComponent},
{path:'sidemenu',component: SideMenuComponent},
{path:'login',component: LoginComponent},
{path:'register',component: RegisterComponent},
{path:'showuser',component: ShowuserComponent},
{path:'yoga',component: YogaComponent},
{path:'blog',component: BlogComponent},
{path:'fitness',component:FitnessComponent},
{path:'example',component:ExampleComponent},
{path:'toddler',component:ToddlerComponent},
{path:'children',component:ChildrenComponent},
{path:'adolescent',component:AdolescentComponent},
{path:'madult',component:MadultComponent},
{path:'fadult',component:FadultComponent},
{path:'preg',component:PregComponent},
{path:'elderage',component:ElderageComponent},

{path:'homepage',
children:[{path:'',component: HomepageComponent},
{path:'showuser',canActivate: [AuthGuard],component: ShowuserComponent}]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

