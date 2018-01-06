import { Routes, RouterModule } from '@angular/router';

import { TasklistComponent } from './components/tasklist/tasklist.component';
import { FormComponent } from './components/form/form.component';

const appRoutes : Routes = [
  {path: 'add', component: FormComponent},
  {path: ':status', component: TasklistComponent},
  {path: '', pathMatch: 'full', redirectTo: 'ALL'}
]

export const routing = RouterModule.forRoot(appRoutes);
