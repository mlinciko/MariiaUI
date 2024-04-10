import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TRow } from '../../components/table/table';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  updateFilters$: Subject<TRow[]> = new Subject();
}
