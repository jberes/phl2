import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxGridModule } from 'igniteui-angular';
import { Web19201Component } from './web19201.component';

describe('Web19201Component', () => {
  let component: Web19201Component;
  let fixture: ComponentFixture<Web19201Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Web19201Component ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxGridModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Web19201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
