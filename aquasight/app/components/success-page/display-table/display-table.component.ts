import { Component, OnInit, ViewChild } from '@angular/core';
import {FormService} from '../../../services/form.service';
import {Form} from '../../../models/form';
import { MessageService } from 'src/app/services/message.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-display-table',
  templateUrl: './display-table.component.html',
  styleUrls: ['./display-table.component.css']
})
export class DisplayTableComponent implements OnInit {
  
  public isCollapsed = true;  

  form:Form[]=[];
  listData:MatTableDataSource<any>;
  displayedColumns:string[]=['date','flow','pressure'];
  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;


  constructor(private formService:FormService,
    private messageService:MessageService,
    ) {
      
     }

     
  ngOnInit() {
    
     this.getData();
     this.messageService.getMessage().subscribe((data) =>{
       this.getData();
      })
     
  }

  getData(){
    this.formService.getData().subscribe((data) => {
      this.form=data;
      this.listData=new MatTableDataSource(this.form);
      this.listData.sort=this.sort;
      this.listData.paginator=this.paginator;
  });
 
}

}
