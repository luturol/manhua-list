import { Component, OnInit } from '@angular/core';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons/';
import { faSignOutAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CreateMangaComponent } from '../create-manga/create-manga.component';
import { Observable } from 'rxjs';
import { MangasService } from '../mangas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faGithub = faGithubAlt;
  faSignOUt = faSignOutAlt;
  faPlusCircle = faPlusCircle;
  loading: boolean = false;
  
  constructor(private router: Router, private dialog: MatDialog, private mangaService: MangasService) { }

  ngOnInit() {
  }

  public logout() {
    localStorage.removeItem("token");
    this.router.navigate(['/login']);
  }

  public addManhua(){    
    let manhua;
    
    this.openDialog().subscribe(result => {
      debugger;
      manhua = result;
      if(manhua && manhua.name != null && manhua.chapter != null && manhua.state != null)
      {
        this.loading = true;
        this.mangaService.addManhua(manhua).subscribe(res =>{
          this.loading = false;
          console.log(res)     ;            
        },
          err => {
            this.loading = false;
            console.log(err);
          });
      }
        
    })
  }

  private openDialog(): Observable<any> {
    const dialogRef = this.dialog.open(CreateMangaComponent, {
      width: '460px'
    });

    return dialogRef.afterClosed();
  }
}
