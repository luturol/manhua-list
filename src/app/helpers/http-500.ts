
import { Injectable, NgModule } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators/';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse,
} from '@angular/common/http';
import { NotificationComponent } from '../notification/notification.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class Http500 implements HttpInterceptor {
    constructor(private notification: NotificationComponent, private dialog: MatDialog) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            map((event: HttpEvent<any>) => {
                debugger;
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                debugger;
                console.log(error);
                if (error.status === 404) {
                    const dialogRef = this.dialog.open(NotificationComponent, {
                        width: '460px',
                        data: "Server not found. Please enter in contact in my github profile or open an issue to fix this problem"
                    });

                    dialogRef.afterClosed();
                }
                return throwError(error);
            }));
 }
}

