import {ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {GridComponent, VirtualScrollService} from '@syncfusion/ej2-angular-grids';
import {MediaMatcher} from '@angular/cdk/layout';
import {interval} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('grid', {static: false})
  public grid: GridComponent;

  mobileQuery: MediaQueryList;
  _mobileQueryListener: () => void;

  entities: Array<{ name: string }>;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.entities = new Array<{ name: string }>();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

   setData(length: number): void {
    this.entities = [];
    this.grid.dataSource = this.entities;
    console.log(JSON.parse(JSON.stringify(this.entities)));
    this.grid.refresh();
    setTimeout(()=> {
      if (length > 0) {
        for (let index = 0; index < length; index++) {
          this.entities.push({name: index.toString()});
        }
        this.grid.dataSource = this.entities;
        this.grid.refresh();
        console.log(JSON.parse(JSON.stringify(this.entities)));
      }
    }, 2000);
  }
}
