import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FwLayoutPage } from './fw-layout.page';

describe('FwLayoutPage', () => {
  let component: FwLayoutPage;
  let fixture: ComponentFixture<FwLayoutPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FwLayoutPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FwLayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
