import { Component, OnInit, ViewChild } from '@angular/core';
import {FormService} from '../../../services/form.service';
import 'rxjs/add/operator/map';
import {MessageService} from '../../../services/message.service';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { DisplayChartComponent } from '../display-chart/display-chart.component';


@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  @ViewChild('simpleForm') formValues;

  model:any={};
  
  flow:Number;
  pressure:Number;
  date:Date=new Date();

  chart:any=[];
  flows=[];
  pressures=[];
  dates=[];

  constructor(private formService:FormService,
    private messageService:MessageService,
    private dialog:MatDialog,
    
    ) { }

  ngOnInit() {
    
  }

  addData(){
    this.formService.addData(this.flow,this.pressure,this.date).subscribe(()=>{
      Number(this.model.flow);
      Number(this.model.pressure);
      this.date=new Date();
      this.messageService.setMessage('DATA-ADDED');
      this.formValues.resetForm();
    });
    
    return false;
   

    
    
  }

  openChart(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="100%";
    this.dialog.open(DisplayChartComponent);

    // added an array : 
    // entryComponents:[DisplayChartComponent] 
    // in app.module.ts
    
  }
  
}

