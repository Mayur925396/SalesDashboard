import { Component, HostListener } from '@angular/core';
import { Color, colorSets } from '@swimlane/ngx-charts';
import { APICallsService } from '../apicalls.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  dailySalesData: any[] | any;
  colorScheme: Color|any;
  monthlyRevenueData: any[] = [];
  topSellingProducts: any[] = [];
  displayedColumns: string[] = ['name', 'quantity', 'revenue'];
  isLoading = true;
  view: any = [375,250];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Day';
  yAxisLabel: string = 'Sales';
  timeline: boolean = true;




  constructor(private api:APICallsService) {
    this.colorScheme = colorSets.find(s => s.name === 'cool') || {
      name: 'custom',
      selectable: true,
      group: 'Custom Group',
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };
   
   
  }
  

  ngOnInit(): void {
    this.getTopSellingProducts();
    this.getMonthlyRevenueBreakdown();
    this.getData()
    setTimeout(()=>{
      this.isLoading=false
    },1000)
  
  }





  getMonthlyRevenueBreakdown(){
    this.api.getMonthlyRevenueBreakdown().subscribe({
      
        next:(res:any)=>{
          console.log(res);
          this.monthlyRevenueData=res;
        },
        error:(err:any)=>{
          console.log(err);
        }
       
    })
  }



  getTopSellingProducts() {
    this.api.getTopSellingProductList().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.topSellingProducts=res;
      },
      error:(err:any)=>{
        console.log(err);
      }
     })
  }

  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }


  getData(){
   
      this.api.getDatafromfireBase().subscribe({
        next:(res:any)=>{
          console.log(res);
          this.dailySalesData=res;
        },
        error:(err:any)=>{
          console.log(err);
        }
       })

  }

}
