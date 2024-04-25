import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './modules/shared/components/main/main.component';

const routes: Routes = [
  {
    path: 'demos',
    loadChildren: () =>
      import('./modules/demos/demos.module').then(m => m.DemosModule),
  },
  {
    path: 'docs',
    loadChildren: () =>
      import('./modules/docs/docs.module').then(m => m.DocsModule),
  },
  {
    path: '',
    component: MainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
