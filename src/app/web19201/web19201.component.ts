import { Component, OnInit } from '@angular/core';
import { PhlService } from '../services/phl.service';

@Component({
  selector: 'app-web19201',
  templateUrl: './web19201.component.html',
  styleUrls: ['./web19201.component.scss']
})
export class Web19201Component implements OnInit {
  public phlFinData1: any = null;

  constructor(
    private phlService: PhlService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.phlService.getFinData1().subscribe(data => this.phlFinData1 = data);
  }
}
