import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePioChatComponent } from './home-pio-chat.component';

describe('HomePioChatComponent', () => {
  let component: HomePioChatComponent;
  let fixture: ComponentFixture<HomePioChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePioChatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePioChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
