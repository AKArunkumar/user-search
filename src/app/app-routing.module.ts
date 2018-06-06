import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchBarComponent } from './compenets/search-bar/search-bar.component';
import { UserComponent } from './compenets/user/user.component';

const appRoutes: Routes = [
    { path: '', redirectTo:'/home', pathMatch: 'full' },
    { path: 'home', component: SearchBarComponent },
    { path: ':name', component: UserComponent}
]

@NgModule( {
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
} )
export class AppRoutingModule {

}
