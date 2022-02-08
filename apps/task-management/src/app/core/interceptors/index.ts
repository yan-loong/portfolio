import { HTTP_INTERCEPTORS } from "@angular/common/http"
import { Provider } from "@angular/core"
import { UiInterceptor } from "./ui.interceptor"

export const httpInterceptorProviders: Array<Provider> = [
    { provide: HTTP_INTERCEPTORS, useClass: UiInterceptor, multi: true }
]