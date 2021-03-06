import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {ScrollFxDirective} from "./scroll-fx.directive";
import {NavComponent} from "./nav/nav.component";
import {ContactFormComponent} from "./contact-form/contact-form.component";
import {InputLabelComponent} from "./input-label/input-label.component";
import {CheckboxComponent} from "./checkbox/checkbox.component";
import {ImagesLoadedDirective} from "./images-loaded.directive";
import {LoadingScreenComponent} from "./loading-screen/loading-screen.component";
import {ProgressBarComponent} from "./progress-bar/progress-bar.component";
import {DataSheetComponent} from "./data-sheet/data-sheet.component";
import {SpectralDiagramComponent} from "./spectral-diagram/spectral-diagram.component";
import {SpeakerSvgFrontalComponent} from "./speaker-svg-frontal/speaker-svg-frontal.component";
import {HorizontalLabelComponent} from "./horizontal-label/horizontal-label.component";
import {VerticalLabelComponent} from "./vertical-label/vertical-label.component";
import {SpeakerSvgTopComponent} from "./speaker-svg-top/speaker-svg-top.component";
import {SpeakerSvgSideComponent} from "./speaker-svg-side/speaker-svg-side.component";
import {SectionDirective} from "./section.directive";
import {ImprintComponent} from "./imprint/imprint.component";
import {NotificationsComponent} from './notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollFxDirective,
    NavComponent,
    ContactFormComponent,
    InputLabelComponent,
    CheckboxComponent,
    ImagesLoadedDirective,
    LoadingScreenComponent,
    ProgressBarComponent,
    DataSheetComponent,
    SpectralDiagramComponent,
    SpeakerSvgFrontalComponent,
    HorizontalLabelComponent,
    VerticalLabelComponent,
    SpeakerSvgTopComponent,
    SpeakerSvgSideComponent,
    SectionDirective,
    ImprintComponent,
    NotificationsComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
