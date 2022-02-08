import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoadingService } from "@portfolio/feature-task-management";
import { finalize, Observable } from "rxjs";

@Injectable()
export class UiInterceptor implements HttpInterceptor {
    constructor(private loadingService: LoadingService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loadingService.show();

        return next.handle(req)
            .pipe(
                finalize(() => this.loadingService.hide())
            )
    }
}