import {Component, OnInit} from '@angular/core';
import {SocketService} from './integration/services/socket.service';
import {SensorInterface} from './integration/models/sensor.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public temperature = '';
  public sensor = 'Temperatura';
  public sensorList: SensorInterface[] = [];

  constructor(private socketService: SocketService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.socketService.listen('sensor').subscribe((sensor: SensorInterface) => {
      this.temperature = sensor.temperatura;
      this.sensorList.push(sensor);
    });
  }
}
