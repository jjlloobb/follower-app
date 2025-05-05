import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler {
    handleError(err: any): void {
        alert("An unexpected error ocurred.");
        console.log(err);
    }
}