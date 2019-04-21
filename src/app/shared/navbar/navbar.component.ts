import { Component, OnInit } from '@angular/core';
import * as fromFontAwesome from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as fromUnitsAction from 'src/app/core/units.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  fontAwesome = fromFontAwesome;
  unitsSystem: string;

  constructor( private _store: Store<AppState> ) {
    _store.select('unitsSystem').subscribe( units => {
      if ( units ===  fromUnitsAction.METRIC ) {
        this.unitsSystem = `To ${fromUnitsAction.units.IMPERIAL.name}`;
      } else {
        this.unitsSystem = `To ${fromUnitsAction.units.METRIC.name}`;
      }
    });
  }

  ngOnInit() {
  }

  toggleUnitsSystem() {
    const action = new fromUnitsAction.ToggleAction();
    this._store.dispatch(action);
  }

}
