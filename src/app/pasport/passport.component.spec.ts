import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Passport } from './passport.component';

describe('Passport', () => {
  let component: Passport;
  let fixture: ComponentFixture<Passport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Passport],
    }).compileComponents();

    fixture = TestBed.createComponent(Passport);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
