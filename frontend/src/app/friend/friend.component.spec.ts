import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendComponent } from './friend.component';

describe('Friend', () => {
  let component: FriendComponent;
  let fixture: ComponentFixture<FriendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FriendComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FriendComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
