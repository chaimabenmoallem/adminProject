import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { Chart, registerables } from 'chart.js'
import { ChartData } from 'src/app/pages/dashboard/ChartData';

Chart.register(...registerables)
@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit{

  chartData: ChartData;

  constructor(private dashboardService : DashboardService){
    this.chartData = {} as ChartData;
  }

  ngOnInit(): void {
    this.dashboardService.getChartData().subscribe(data => {
        this.chartData = data;
        this.initializeChart();
    });
}

initializeChart() {
  let myChart = new Chart("mychart", {
    type: this.chartData.type= 'bar',
    
      data: {
          labels: this.chartData.labels,
          datasets: this.chartData.datasets
      },
      options: {
        maintainAspectRatio:false,
              plugins:{
                legend:{
                 
                  reverse:true,
                  labels:{
                    color:'black'
                  }
                }
              }
              ,
                    scales: {
                      x: {
                        stacked:true,
                        ticks: {
                          color: 'black'
                        }
                      },
              
                      y: {
                        stacked:true,
                        beginAtZero: true,
                        suggestedMax: 25,
                        ticks: {
                          color: 'black'
                        }
              
                      }
                    }
                  }
      }
    );
  }
 

  //   this.dashboardService.getAllChartData().subscribe((data) => {
  //     if (data && data.length > 0) {
  //         this.chartData = data[0];  
  //         this.drawChart();
  //     }
  // });
  
  }
  

  // drawChart() {
  //   var myChart = new Chart("mychart", {
  //     type: 'bar',
  //     data: this.chartData,
  //     options: {
  //       maintainAspectRatio:false,
  //             plugins:{
  //               legend:{
                 
  //                 reverse:true,
  //                 labels:{
  //                   color:'black'
  //                 }
  //               }
  //             }
  //             ,
  //                   scales: {
  //                     x: {
  //                       stacked:true,
  //                       ticks: {
  //                         color: 'black'
  //                       }
  //                     },
              
  //                     y: {
  //                       stacked:true,
  //                       beginAtZero: true,
  //                       suggestedMax: 25,
  //                       ticks: {
  //                         color: 'black'
  //                       }
              
  //                     }
  //                   }
  //                 }
  //     }
  //   );
  // }}


  //   var myChart = new Chart("mychart", {
  //     type: 'bar',
  //     data: {
  //       labels: ['chaima', 'olfa', 'Yosra'],
  //       datasets: [{
  //         label: '# of Votes',
  //         borderColor: [ 'rgba(255, 99, 132, 0.2)',
  //         'rgba(255, 159, 64, 0.2)',
  //         'rgba(255, 205, 86, 0.2)'
  //         ],
  //         data: [12, 19, 3],
  //         borderWidth: 3,
  //         backgroundColor: ['rgba(255, 99, 132, 0.2)',
  //         'rgba(255, 159, 64, 0.2)',
  //         'rgba(255, 205, 86, 0.2)'],
          
  //       },
  //       { 
  //         label: '# of Votes',
  //         borderColor: ['rgba(75, 192, 192, 0.2)',
  //         'rgba(54, 162, 235, 0.2)',
  //         'rgba(153, 102, 255, 0.2)'
  //         ],
  //         data: [14, 9, 23],
  //         backgroundColor: ['rgba(75, 192, 192, 0.2)',
  //         'rgba(54, 162, 235, 0.2)',
  //         'rgba(153, 102, 255, 0.2)']
  //       },
        
  //       ]
  //     },
  //     options: {
  //       maintainAspectRatio:false,
  //       plugins:{
  //         legend:{
           
  //           reverse:true,
  //           labels:{
  //             color:'black'
  //           }
  //         }
  //       }
  //       ,
  //       scales: {
  //         x: {
  //           stacked:true,
  //           ticks: {
  //             color: 'black'
  //           }
  //         },
  
  //         y: {
  //           stacked:true,
  //           beginAtZero: true,
  //           suggestedMax: 25,
  //           ticks: {
  //             color: 'black'
  //           }
  
  //         }
  //       }
  //     }
  //   })
  
   


