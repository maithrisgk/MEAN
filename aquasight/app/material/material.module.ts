import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from "@angular/material";
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatTableModule,
    Material.MatSortModule,
    Material.MatPaginatorModule,
    Material.MatDialogModule
  
  ],
  exports:[
    Material.MatTableModule,
    Material.MatSortModule,
    Material.MatPaginatorModule,
    Material.MatDialogModule
  ]
})
export class MaterialModule { }
