import {Component, ViewChild} from '@angular/core';
import {GridComponent, VirtualScrollService} from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [VirtualScrollService]
})
export class AppComponent {
  private longData: Array<{name: string}>;
  private shortData: Array<{name: string}>;
  private noData:Array<{name: string}>;

  @ViewChild('grid', {static: false})
  public grid: GridComponent;

  constructor() {
    this.noData = new Array<{name: string}>();
    this.shortData = new Array<{name: string}>();
    this.longData = new Array<{name: string}>();
    for (let index=0; index < 2; index++) {
      this.shortData.push({name: 'short ' + index});
    }

    for (let index=0; index < 2000; index++) {
      this.longData.push({name: 'long ' + index});
    }
  }

  setData(data: { name: string }[]) {
    if (this.grid) {
      this.grid.dataSource = JSON.parse(JSON.stringify(data));
      this.grid.refresh();
    }
  }
}
