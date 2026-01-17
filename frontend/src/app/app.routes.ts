import { Routes } from '@angular/router';
import { DestinationComponent } from './destination/destination.component';
import { FriendComponent } from './friend/friend.component';
import { ProfilComponent } from './profil/profil.component';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
  { path: '', children: [] },
  { path: 'authentification', component: AuthComponent },
  { path: 'destinations', component: DestinationComponent },
  { path: 'friends', component: FriendComponent },
  { path: 'profil', component: ProfilComponent },
  { path: '**', redirectTo: '' },
];
