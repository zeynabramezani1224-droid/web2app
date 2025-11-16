import { Routes } from '@angular/router';
import { HomePage } from './+pages/home-page/home-page';
import { Contact } from './+pages/contact/contact';
import { BioPage } from './+pages/bio-page/bio-page';
import { AboutPage } from './+pages/about-page/about-page';
import { AbilitPage } from './+pages/abilit-page/abilit-page';

export const routes: Routes = [
    { path: "home", component: HomePage },
    { path: "contact", component: Contact },
    { path: "bio", component: BioPage },
    { path: "about", component: AboutPage },
    { path: "abilities", component: AbilitPage },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
