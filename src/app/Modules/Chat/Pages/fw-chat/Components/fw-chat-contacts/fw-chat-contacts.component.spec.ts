import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FwChatContactsComponent } from './fw-chat-contacts.component';

describe('FwChatContactsComponent', () => {
  let component: FwChatContactsComponent;
  let fixture: ComponentFixture<FwChatContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FwChatContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FwChatContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
