import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({ providedIn: 'root' })
export class NavbarService {
  private toggleStatus = new BehaviorSubject(null);
  currentToggleStatus = this.toggleStatus.asObservable();

  constructor() {}

  toggleStatusNavbar(status: any): void {
    this.toggleStatus.next(status);
  }
}