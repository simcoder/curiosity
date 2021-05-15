import {
  ChangeDetectionStrategy,
  Component,
  Inject
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData {
  imgSrc: string;
}
@Component({
  selector: 'app-enlarge-img-dialog',
  templateUrl: './enlarge-img-dialog.component.html',
  styleUrls: ['./enlarge-img-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnlargeImgDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EnlargeImgDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
