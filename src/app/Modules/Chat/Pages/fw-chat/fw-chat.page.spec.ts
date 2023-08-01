import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FwChatPage } from './fw-chat.page';

describe('FwChatPage', () => {
  let component: FwChatPage;
  let fixture: ComponentFixture<FwChatPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FwChatPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FwChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
