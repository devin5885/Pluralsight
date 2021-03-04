import { NgModule } from '@angular/core';
import { AccountService } from './account.service';
import { AuthService } from './auth-service.component';
import { ProjectService } from './project.service';

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [
    AuthService,
    AccountService,
    ProjectService
    ],
})
export class CoreModule { }
