import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MangasService } from '../mangas.service';

export interface MyTableElement {
  name: string;
  score: number;
  chapter: number;
}

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {

  displayedColumns: string[] = ['name', 'score', 'chapter'];
  dataSource: MyTableElement[] = [
    { name: 'Tales of demons and Gods', score: 10, chapter: 245 },
    { name: 'Solo Leveling', score: 8, chapter: 31 }
  ];
  colorControl = new FormControl('primary');
  MyList: FormGroup;

  constructor(formBuilder: FormBuilder, public mangasService: MangasService) {
    this.MyList = formBuilder.group({
      color: this.colorControl,
      chapter: [null, Validators.required]
    });

    this.mangasService.getMangas().subscribe(resp => {
      debugger;
      this.dataSource = resp.mangas;
    });
  }

  ngOnInit() {
  }

}