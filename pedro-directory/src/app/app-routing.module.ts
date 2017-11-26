import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { DirectoryComponent } from './directory/directory.component'
import { HomeComponent } from './home/home.component'

const APP_ROUTES : Routes = [
  {path:'directory/:ninja',
  component: DirectoryComponent},
  {path:'directory',
  component: DirectoryComponent},
  {path:'',
  component: HomeComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
