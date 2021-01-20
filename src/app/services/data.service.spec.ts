import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import Data from '../../assets/user-data.json';
import { EntityType } from '../models';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get data', () => {
    const data = Data;
    expect(service.getData(EntityType.user)).toEqual(data);
  });
});
