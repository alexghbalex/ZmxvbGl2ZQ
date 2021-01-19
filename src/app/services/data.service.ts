import { Injectable } from '@angular/core';

export interface UserData {
  id: number;
  first_name: string;
  age: number;
  city: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly USERDATA: UserData[] = [
    {id: 1, first_name: 'Masha', age: 20, city: 'Tel Aviv'},
    {id: 2, first_name: 'Dasha', age: 21, city: 'Ramat Gan'},
    {id: 3, first_name: 'Snejana', age: 22, city: 'Metula'},
    {id: 4, first_name: 'Vera', age: 23, city: 'Bnei Brak'},
    {id: 5, first_name: 'Nadya', age: 24, city: 'Dimona'}
  ];

  getData(type: string): any[] {
    switch (type) {
      case 'user':
        return this.USERDATA;
      default:
        return [];
    }
  }
}
