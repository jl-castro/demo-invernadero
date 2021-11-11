import { Component, OnInit } from '@angular/core';
import { SocketService } from './integration/services/socket.service';
import { SensorInterface } from './integration/models/sensor.interface';
import { DemoService } from './integration/services/demo.service';
import { User } from './integration/models/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public temperature = '';
  public sensor = 'Temperatura';
  public sensorList: SensorInterface[] = [];
  public data: User[] = [];
  constructor(
    private socketService: SocketService,
    private demoService: DemoService
  ) {
    // this.demoService.getData().subscribe((res) => (this.data = [...res]));
  }

  ngOnInit(): void {
    // @ts-ignore
    // this.socketService.listen('sensor').subscribe((sensor: SensorInterface) => {
    //   this.temperature = sensor.temperatura;
    //   this.sensorList.push(sensor);
    // });
  }
}
