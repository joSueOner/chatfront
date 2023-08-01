import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FwHomePage } from './fw-home.page';

describe('FwHomePage', () => {
  let component: FwHomePage;
  let fixture: ComponentFixture<FwHomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FwHomePage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FwHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
