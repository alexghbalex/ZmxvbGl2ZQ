import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserPageComponent } from './user-page.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SafeHtmlPipe } from '../../../services/safe-html.pipe';
import Entities from '../../../../assets/entities.json';

describe('UserPageComponent', () => {
  let component: UserPageComponent;
  let fixture: ComponentFixture<UserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserPageComponent, SafeHtmlPipe],
      imports: [MatSnackBarModule, HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have valid header', () => {
    const header = fixture.nativeElement.querySelector('.header');
    expect(header.innerHTML.replaceAll('"', '\'')).toEqual(Entities.user.header);
  });

  it('should have valid count of the buttons', () => {
    const buttons = fixture.nativeElement.querySelectorAll('button');
    expect(buttons.length).toEqual(Entities.user.buttons.length);
  });

  it('should have all defined actions', () => {
    Entities.user.buttons.forEach(button => expect(typeof component[button.action]).toEqual('function'));
  });
});
