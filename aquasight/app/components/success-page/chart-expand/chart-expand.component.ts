import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/services/form.service';
import {Chart} from 'chart.js';
import { Form } from '../../../models/form';
@Component({
  selector: 'app-chart-expand',
  templateUrl: './chart-expand.component.html',
  styleUrls: ['./chart-expand.component.css']
})
export class ChartExpandComponent implements OnInit {

  form:Form[];
  chart:any=[];
  flow=[];
  pressure=[];
  date=[];

  constructor(private formService:FormService) { }

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

}
