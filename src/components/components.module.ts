import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar';
import { LoginLogoComponent } from './login-logo/login-logo';
import { TabsFooterComponent } from './tabs-footer/tabs-footer';

@NgModule({
	declarations: [NavbarComponent,
    LoginLogoComponent,
    TabsFooterComponent,
    ],
	imports: [],
	exports: [NavbarComponent,
    LoginLogoComponent,
    TabsFooterComponent,
    ]
})
export class ComponentsModule {}
