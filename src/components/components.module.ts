import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar';
import { LoginLogoComponent } from './login-logo/login-logo';
@NgModule({
	declarations: [NavbarComponent,
    LoginLogoComponent],
	imports: [],
	exports: [NavbarComponent,
    LoginLogoComponent]
})
export class ComponentsModule {}
