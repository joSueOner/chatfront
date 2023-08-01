import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FwChatFormComponent } from './fw-chat-form.component';

describe('FwChatFormComponent', () => {
  let component: FwChatFormComponent;
  let fixture: ComponentFixture<FwChatFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FwChatFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FwChatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
