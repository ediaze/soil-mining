import { Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';

import { ProviderSelectorComponent } from '../provider/provider-selector/provider-selector.component';
import { ProviderTranformComponent } from '../provider/provider-tranform/provider-tranform.component';
import { ProviderFileComponent }     from '../provider/provider-file/provider-file.component';
export const routes: Routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
            { path: 'filing-documents', component: ProviderSelectorComponent },
            { path: 'filing-File', component: ProviderFileComponent },
            { path: 'filing-trans', component: ProviderTranformComponent }
        ]
    },

    // Not found
    { path: '**', redirectTo: 'home' }

];
