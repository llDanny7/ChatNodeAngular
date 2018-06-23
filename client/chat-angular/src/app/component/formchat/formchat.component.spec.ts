import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormchatComponent } from './formchat.component';

describe('FormchatComponent', () => {
  let component: FormchatComponent;
  let fixture: ComponentFixture<FormchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
