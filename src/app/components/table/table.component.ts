import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnDestroy {
  @Input() data: { [prop: string]: string | number }[];
  @Input() properties: string[];
  @Input() entityType: string;
  @Output() deleteEntity: EventEmitter<number> = new EventEmitter<number>();

  private dialogSub$: Subscription;

  constructor(private dialog: MatDialog) {
  }

  ngOnDestroy(): void {
    if (this.dialogSub$) {
      this.dialogSub$.unsubscribe();
    }
  }

  delete(id: number): void {
    this.dialogSub$ = this.dialog.open(DeleteDialogComponent, {data: {entityType: this.entityType, id}})
      .afterClosed().subscribe(result => result && this.deleteEntity.emit(id));
  }
}
