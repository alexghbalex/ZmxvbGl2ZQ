import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { HttpClient } from '@angular/common/http';
import { catchError, filter, map } from 'rxjs/operators';
import { of, Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface Entity {
  header: string;
  buttons: { name: string, action: string }[];
  properties: string[];
}

@Component({template: ''})
export class BasePageComponent implements OnInit, OnDestroy {
  header: string;
  buttons: { name: string, action: string }[];
  properties: string[];
  data: { [prop: string]: string | number }[];
  actions: { [action: string]: () => void } = {};

  protected readonly entityType: string;
  protected subscriptions$: Subscription[] = [];

  constructor(protected dataService: DataService,
              protected snackBar: MatSnackBar,
              private http: HttpClient) {
    this.getEntityConfig();
  }

  ngOnInit(): void {
    this.data = this.dataService.getData(this.entityType);
  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach(sub => sub.unsubscribe());
  }

  deleteEntity(id: number): void {
    this.data = this.data.filter(entity => entity.id !== id);
  }

  private getEntityConfig(): void {
    const getEntityConfigSub$ = this.http.get(`./assets/entities.json`)
      .pipe(
        map(entities => entities[this.entityType]),
        filter((entity: Entity) => !!entity),
        catchError(e => {
          this.showError(e && e.message);
          return of({header: '', buttons: null, properties: null});
        })
      )
      .subscribe(({header, buttons, properties}) => {
        this.header = header;
        this.buttons = buttons;
        this.properties = properties;

        if (this.buttons && this.actions && this.buttons.length !== Object.keys(this.actions).length) {
          this.showError('Define all actions for the buttons');
        }
      });
    this.subscriptions$.push(getEntityConfigSub$);
  }

  protected showAction(action: string): void {
    this.snackBar.open(action, '', {duration: 1000});
  }

  private showError(error: string = 'Error!'): void {
    this.snackBar.open(error, 'close', {panelClass: 'error'});
  }
}
