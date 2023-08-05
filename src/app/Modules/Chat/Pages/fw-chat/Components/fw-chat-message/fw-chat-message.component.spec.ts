import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FwChatMessageComponent } from './fw-chat-message.component';

describe('FwChatMessageComponent', () => {
  let component: FwChatMessageComponent;
  let fixture: ComponentFixture<FwChatMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FwChatMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FwChatMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
