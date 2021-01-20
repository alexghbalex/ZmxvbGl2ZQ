import { Injectable } from '@angular/core';
import { EntityData, EntityType, UserData } from '../models';
import Data from '../../assets/user-data.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly USERDATA: UserData[];

  constructor() {
    this.USERDATA = Data;
  }

  getData(type: EntityType): EntityData[] {
    switch (type) {
      case EntityType.user:
        return this.USERDATA;
      default:
        return [];
    }
  }
}
