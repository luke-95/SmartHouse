import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DevicesComponent } from '../devices/devices.component';
import { Device } from '../models/Device';
import { DeviceType } from '../models/DeviceType';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent {
  @Input() devices: Array<Device>;
  cols = 2;

  constructor (private breakpointObserver: BreakpointObserver,)
  {
  }

  ngOnInit()
  {
    this.initDevices()
  }

  initDevices()
  {
  }


  isSmallScreen$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Small])
  .pipe(
    map(result => result.matches),
  )

  maxCardWidth$: Observable<string> = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Small])
  .pipe(
    map(result => 'width: '.concat(result.matches ? '450px' : '150px').concat(';')),
  )

  isExtraSmallScreen$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.XSmall])
  .pipe(
    map(result => result.matches),
  )


  
}