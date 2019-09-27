import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'urgent',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../urgent/urgent.module').then(m => m.UrgentPageModule)
          }
        ]
      },
      {
        path: 'later',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../later/later.module').then(m => m.LaterPageModule)
          }
        ]
      },
      {
        path: 'done',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../done/done.module').then(m => m.DonePageModule)
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../settings/settings.module').then(m => m.SettingsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/urgent',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/urgent',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
