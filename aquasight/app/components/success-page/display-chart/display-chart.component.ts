import { Component, OnInit } from '@angular/core';
import {FormService} from '../../../services/form.service';
import {Form} from '../../../models/form';
import {Chart} from 'chart.js';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-display-chart',
  templateUrl: './display-chart.component.html',
  styleUrls: ['./display-chart.component.css']
})
export class DisplayChartComponent implements OnInit {
  
  form:Form[];
  chart:any=[];
  flow=[];
  pressure=[];
  date=[];

  constructor(private formService:FormService,
    private router:Router,
    public dialogRef:MatDialogRef<DisplayChartComponent>
    ) { }

  ngOnInit() {

    this.formService.getChart().subscribe((res :Form[]) =>{
      res.forEach(y =>{
        this.flow.push(y.flow);
        this.pressure.push(y.pressure);
        this.date.push(y.date);
      });
      this.chart=new Chart('canvas',{
        type:'bar',
        // type:'line'
        data:{
          labels:this.date,
          datasets:[{
            data:this.flow,
            backgroundColor:'#e74c3c',
            fill:false
          },
          {
            data:this.pressure,
            // for line ::: borderColor:'#ffcc00',
            backgroundColor:'#27ae60',
            fill:false
          }
        
        ]

        },
        options:{
          legend:{
            display:false
          },
          scales:{
            xAxes:[{
              display:true
            }],
            yAxes:[{
              display:true
            }]
          }
        }
      });
    });

  }

  onClose(){
    this.dialogRef.close();
  }



  
}
