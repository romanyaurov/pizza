import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { TitleComponent } from './components/title/title.component';
import { CoolInputDirective } from './directives/cool-input.directive';
import { IsChickenDirective } from './directives/is-chicken.directive';
import { ChickenDescriptionPipe } from './pipes/chicken-description.pipe';
import { WordUpperPipe } from './pipes/word-upper.pipe';
import { RouterModule } from '@angular/router';
import { PopupComponent } from './components/popup/popup.component';


@NgModule({
  declarations: [
    // Components
    ProductCardComponent,
    TitleComponent,
    PopupComponent,
    // Directives
    CoolInputDirective,
    IsChickenDirective,
    // Pipes
    ChickenDescriptionPipe,
    WordUpperPipe,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    // Components
    ProductCardComponent,
    TitleComponent,
    PopupComponent,
    // Directives
    CoolInputDirective,
    IsChickenDirective,
    // Pipes
    ChickenDescriptionPipe,
    WordUpperPipe
  ]
})
export class SharedModule { }
