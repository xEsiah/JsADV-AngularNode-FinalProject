import { Routes } from '@angular/router';
import { DestinationComponent } from './destination/destination.component';
import { FriendComponent } from './friend/friend.component';
import { ProfilComponent } from './profil/profil.component';
import { AuthComponent } from './auth/auth.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: 'destinations',
    component: DestinationComponent,
    canActivate: [authGuard],
  },
  { path: '', children: [] },
  { path: 'friends', component: FriendComponent, canActivate: [authGuard] },
  { path: 'profil', component: ProfilComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '' },
];
