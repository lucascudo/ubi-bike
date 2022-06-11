
import { Component, OnInit } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';
import { MobileUser } from 'src/app/core/interfaces/mobile-user.interface';
import { MobileUsersService } from './mobile-users.service';


@Component({
  selector: 'app-mobile-users',
  templateUrl: './mobile-users.component.html',
  styleUrls: ['./mobile-users.component.scss'],
})
export class MobileUsersComponent implements OnInit {
  mobileUsers: MobileUser[];

  constructor(private mobileUsersService: MobileUsersService) {}

  ngOnInit(): void {
    this.mobileUsersService.getMobileUsers().subscribe((mu) => this.mobileUsers = <MobileUser[]> mu);
  }

  getStores(mobileUser: MobileUser): string {
    return mobileUser.stores.join(', ');
  }
}
