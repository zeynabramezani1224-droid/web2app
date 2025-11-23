import { Routes } from '@angular/router';
import { HomePage } from './+pages/home-page/home-page';
import { Contact } from './+pages/contact/contact';
import { BioPage } from './+pages/bio-page/bio-page';
import { AboutPage } from './+pages/about-page/about-page';
import { AbilitPage } from './+pages/abilit-page/abilit-page';
import { PublicTemplate } from './+pages/+public/public-template/public-template';
import { PrivateTemplate } from './+pages/+private/private-template/private-template';
import * as homePage2 from './+pages/+public/home-page/home-page';
import * as aboutPage2 from './+pages/+public/about-page/about-page';
import * as productPage2 from './+pages/+public/products-page/products-page';
import { ProductPage } from './+pages/+private/product-page/product-page';
import { ContactPage } from './+pages/+public/contact-page/contact-page';
import { LoginPage } from './+pages/+public/login-page/login-page';
import * as loginPage1 from './+pages/login-page/login-page';
import { DashboardPage } from './+pages/+private/dashboard-page/dashboard-page';
import { UsersPage } from './+pages/+private/users-page/users-page';
import { OrderPage } from './+pages/+private/order-page/order-page';

export const routes: Routes = [
    { path: "home", component: HomePage },
    { path: "contact", component: Contact },
    { path: "bio", component: BioPage },
    { path: "about", component: AboutPage },
    { path: "abilities", component: AbilitPage },
    {path:'login1',component:loginPage1.LoginPage},


    {
        path: 'public', component: PublicTemplate, children: [
            { path: 'home2', component: homePage2.HomePage },
            { path: 'about2', component: aboutPage2.AboutPage },
            { path: 'products', component: productPage2.ProductsPage },
            { path: 'contact', component: ContactPage },
            { path: 'login', component: LoginPage },
            { path: '', redirectTo: 'home', pathMatch: 'prefix' },
            { path: '**', redirectTo: 'home' }
        ]
    },

    {
        path: 'private', component: PrivateTemplate, children: [
            { path: 'dashbord', component: DashboardPage },
            { path: 'user', component: UsersPage },
            { path: 'products', component: ProductPage },
            { path: 'order', component: OrderPage },
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: '**', redirectTo: 'home' }
        ]
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
