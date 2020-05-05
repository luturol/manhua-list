import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-manga',
  templateUrl: './create-manga.component.html',
  styleUrls: ['./create-manga.component.css']
})
export class CreateMangaComponent implements OnInit {

  states: any[] = [
    { viewValue: "Reading", value: 1 },
    { viewValue: "Completed", value: 2 },
    { viewValue: "Plan to Read", value: 0 },
    { viewValue: "Dropped", value: -1 }
  ];

  createManhua: FormGroup;
  manhuaName = new FormControl(null, [Validators.required]);
  manhuaChapter = new FormControl(null, [Validators.required]);
  manhuaState = new FormControl(null, [Validators.required]);

  constructor(formBuilder: FormBuilder, public dialogRef: MatDialogRef<CreateMangaComponent>) {
    this.createManhua = formBuilder.group({
      manhuaName: this.manhuaName,
      manhuaChapter: this.manhuaChapter,
      manhuaState: this.manhuaState
    });
  }

  ngOnInit() {

  }

  onSubmit(){
    debugger;
    console.log(this.createManhua);
        
    let manga = {
      name: this.createManhua.controls.manhuaName.value,
      chapter: this.createManhua.controls.manhuaChapter.value,
      state: this.createManhua.controls.manhuaState.value
    }

    this.close(manga);
  }

  close(manga: any){
    this.dialogRef.close(manga);
  }
}
