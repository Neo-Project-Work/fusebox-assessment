import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PanicHistoryComponent } from './panic-history/panic-history.component';
import { SendPanicComponent } from './send-panic/send-panic.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'panic/history', component: PanicHistoryComponent },
  { path: 'panic/send', component: SendPanicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
