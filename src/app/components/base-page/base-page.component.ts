import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Entity, EntityData, EntityType } from '../../models';
import Entities from '../../../assets/entities.json';

@Component({template: ''})
export class BasePageComponent implements OnInit {
  header: string;
  buttons: { name: string, action: string }[];
  properties: string[];
  data: EntityData[];
  actions: { [action: string]: () => void } = {};

  protected readonly entityType: EntityType;

  constructor(protected dataService: DataService, protected snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.getEntityConfig();
    this.data = this.dataService.getData(this.entityType);
  }

  deleteEntity(id: number): void {
    this.data = this.data.filter(entity => entity.id !== id);
  }

  private getEntityConfig(): void {
    const entity: Entity = Entities[this.entityType];

    if (entity) {
      this.header = entity.header;
      this.buttons = entity.buttons;
      this.properties = entity.properties;
    } else {
      this.showError('The entity type is invalid');
    }

    if (this.buttons && this.actions && this.buttons.length !== Object.keys(this.actions).length) {
      this.showError('Define all actions for the buttons');
    }
  }

  protected showAction(action: string): void {
    this.snackBar.open(action, '', {duration: 1000});
  }

  private showError(error: string = 'Error!'): void {
    this.snackBar.open(error, 'close', {panelClass: 'error'});
  }
}
