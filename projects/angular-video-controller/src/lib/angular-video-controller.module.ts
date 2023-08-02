import { NgModule } from '@angular/core';
import { VideoControllerComponent } from './video-controller/video-controller.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [VideoControllerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [VideoControllerComponent],
})
export class AngularVideoControllerModule {}
