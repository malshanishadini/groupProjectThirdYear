import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';


import {InterfaceComponent} from './interface/interface.component';
import {BotComponent} from './bot/bot.component';
import {ForumComponent} from './forum/forum.component';
import {GiveServiceComponent} from './give-service/give-service.component';
import {ContactUsComponent} from './interface/contact-us/contact-us.component';
import {PrivacyPolicyComponent} from './interface/privacy-policy/privacy-policy.component';
import {AuthGuard} from './auth/auth.guard';
import {SelectUserTypeComponent} from './interface/select-user-type/select-user-type.component';
import {NannyComponent} from './interface/select-user-type/nanny/nanny.component';
import {NannySignupComponent} from './auth/nanny/nanny-signup/nanny-signup.component';
import {NannyLoginComponent} from "./auth/nanny/nanny-login/nanny-login.component";
import {CsignupComponent} from "./auth/customer/csignup/csignup.component";
import {CloginComponent} from "./auth/customer/clogin/clogin.component";
import {LoginAsComponent} from "./interface/select-user-type/login-as/login-as.component";
import {SignupAsComponent} from "./interface/select-user-type/signup-as/signup-as.component";
// import {BlogComponent} from "./blog/blog.component";
import {NprofileComponent} from "./interface/nprofile/nprofile.component";
import {NannyTableComponent} from "./interface/nanny-table/nanny-table.component";
import {ProfileComponent} from "./interface/profile/profile.component";
import {EditProfilesComponent} from "./interface/edit-profiles/edit-profiles.component";

//admin

import {AdminDashboardComponent} from "./admin/admin-dashboard/admin-dashboard.component";
import {CaretakersComponent} from "./admin/caretakers/caretakers.component";
import {MaterialDashboardComponent} from "./admin/material-dashboard/material-dashboard.component";



//blog
import {PostHomepageComponent} from './posts/post-homepage/post-homepage.component';
import {NavbarComponent} from "./shared/navbar/navbar.component";
import { AdminloginComponent } from './auth/adminlogin/adminlogin.component';

const routes: Routes = [
  {path: '', component: InterfaceComponent},
  {path: 'bot', component: BotComponent},
  {path: 'forum', component: ForumComponent},
  {path: 'give-service', component: GiveServiceComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: 'select-user', component: SelectUserTypeComponent},
  {path: 'nanny', component: NannyComponent},
  {path: 'nsignup', component: NannySignupComponent},
  {path: 'nlogin', component: NannyLoginComponent},
  {path: 'csignup', component: CsignupComponent},
  {path: 'clogin', component: CloginComponent},
  {path: 'loginas', component: LoginAsComponent},
  {path: 'signupas', component: SignupAsComponent},
  // {path: 'blog', component: BlogComponent},
  {path: 'ntable', component: NannyTableComponent},
  {path: 'ntable/nprofile/:id', component: NprofileComponent},
  {path: 'profile/:id', component: ProfileComponent},
  {path: 'edit-profile', component: EditProfilesComponent},


  //routes for admin
  {path: 'adminlogin', component: AdminloginComponent},
  {path: 'admindash', component: AdminDashboardComponent},
  { path: 'caretakers', component:CaretakersComponent},
  { path: 'dash', component:MaterialDashboardComponent},
  

  // routes for blog
  {path: 'homeblog', component:PostHomepageComponent},
  {path: 'showblog', component: NavbarComponent},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
