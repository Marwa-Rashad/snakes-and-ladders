import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  save(itemName: string, item: string) {
    window.localStorage[`${itemName}`] = item;
  }

  delete(itemName: string) {
    window.localStorage.removeItem(`${itemName}`);
  }

  get(itemName: string): string {
    return window.localStorage[`${itemName}`];
  }

  constructor() { }
}
