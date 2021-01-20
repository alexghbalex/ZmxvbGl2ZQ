export enum EntityType {
  user = 'user',
  passport = 'passport',
  ticket = 'ticket'
}

export interface Entity {
  header: string;
  buttons: { name: string, action: string }[];
  properties: string[];
}

export interface EntityData {
  id: number;
}

export interface UserData extends EntityData {
  first_name: string;
  age: number;
  city: string;
}
