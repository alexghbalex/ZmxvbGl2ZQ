import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasePageComponent } from './base-page.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EntityType } from '../../models';
import Entities from '../../../assets/entities.json';

describe('BasePageComponent', () => {
  let component: BasePageComponent;
  let fixture: ComponentFixture<BasePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasePageComponent],
      imports: [MatSnackBarModule, HttpClientTestingModule, NoopAnimationsModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasePageComponent);
    component = fixture.componentInstance;
    // @ts-ignore: protected readonly
    component.entityType = EntityType.user;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get entity config', () => {
    component.ngOnInit();
    expect(component.header).toEqual(Entities.user.header);
    expect(component.buttons).toEqual(Entities.user.buttons);
    expect(component.properties).toEqual(Entities.user.properties);
  });
});
