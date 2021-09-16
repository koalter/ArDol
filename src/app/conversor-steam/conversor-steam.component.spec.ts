import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorSteamComponent } from './conversor-steam.component';

describe('ConversorSteamComponent', () => {
  let component: ConversorSteamComponent;
  let fixture: ComponentFixture<ConversorSteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversorSteamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversorSteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
