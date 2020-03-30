import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  buttonText: string = "NICE";

  constructor(public dialogRef: MatDialogRef<NotificationComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { 
    this.buttonText = data.error ? "That's bad" : "NICE";
  }

  ngOnInit() {
  }

  onClose() {
    this.dialogRef.close();
  }
}
