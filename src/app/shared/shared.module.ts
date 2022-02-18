import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BaseModule } from './base/base.module';
import { ImportModule } from './import/import.module';


@NgModule({
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //
    BaseModule,
    ImportModule
  ]
})
export class SharedModule { }
