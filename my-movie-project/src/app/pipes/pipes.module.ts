import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safe.pipe';
import { SearchPipe } from './filter.pipe';



@NgModule({
  declarations: [SafePipe, SearchPipe],
  imports: [
    CommonModule
  ],
  exports:[
    SafePipe,
    SearchPipe
  ]
})
export class PipesModule { }
