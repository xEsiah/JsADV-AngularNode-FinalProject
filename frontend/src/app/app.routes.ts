import { Routes } from '@angular/router';
import { DestinationComponent } from './destination/destination.component';
import { FriendComponent } from './friend/friend.component';
import { ProfilComponent } from './profil/profil.component';

export const routes: Routes = [
  { path: 'destinations', component: DestinationComponent },
  { path: 'friends', component: FriendComponent },
  { path: 'profil', component: ProfilComponent },
];
