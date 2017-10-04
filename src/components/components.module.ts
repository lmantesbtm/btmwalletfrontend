import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar';
import { LoginLogoComponent } from './login-logo/login-logo';
import { TabsFooterComponent } from './tabs-footer/tabs-footer';
import { SidemenuComponent } from './sidemenu/sidemenu';

@NgModule({
	declarations: [NavbarComponent,
    LoginLogoComponent,
    TabsFooterComponent,
    SidemenuComponent],
	imports: [],
	exports: [NavbarComponent,
    LoginLogoComponent,
    TabsFooterComponent,
    SidemenuComponent]
})
export class ComponentsModule {}
