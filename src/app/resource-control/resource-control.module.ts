import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceControlComponent } from './resource-control.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button'
import {MatSliderModule} from '@angular/material/slider';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

@NgModule({
  declarations: [
    ResourceControlComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgxSliderModule
  ],
  exports: [ResourceControlComponent]
})
export class ResourceControlModule { }
