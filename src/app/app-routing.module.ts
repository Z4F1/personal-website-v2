import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { PhotographyComponent } from './pages/photography/photography.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  {
    path: "",
    children: [
        {
            path: "",
            component: HomeComponent
        },
        {
            path: "about",
            component: AboutComponent
        },
        {
            path: "photo",
            component: PhotographyComponent
        },
        {
            path: "projects",
            component: ProjectsComponent
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
