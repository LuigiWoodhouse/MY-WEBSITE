//<<<<<<MODULES>>>>>>//
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';



//<<<<<< COMPONENTS>>>>>>//
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { VideoComponent } from './video/video.component';
import { ImageComponent } from './image/image.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { CarouselComponent } from './layouts/carousel/carousel.component';
import { ContactMeComponent } from './contact-me/contact-me.component';


//<<<<<< MATERIAL>>>>>>//
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';



// External libraries
import { NgParticlesModule } from "ng-particles";
import { NgxCaptchaModule } from 'ngx-captcha';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './navbar/navbar.component';





@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FooterComponent,
    CarouselComponent,
    AboutComponent,
    PortfolioComponent,
    VideoComponent,
    ImageComponent,
    ContactMeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    FlexLayoutModule,
    MatTabsModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    NgParticlesModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      preventDuplicates: true,
      progressAnimation: 'increasing',
      progressBar: true,
      positionClass: 'toast-top-right',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
