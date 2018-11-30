import { Component } from '@angular/core';
import { BasePage } from '../base-page';
import { Store } from '@ngrx/store'
import { ViewModel } from '../view-model';

@Component({
  selector: 'page-cost',
  templateUrl: 'cost.html'
})
export class CostPage extends BasePage {

  constructor(
    public store: Store<{viewModel:ViewModel}>) {
    super(store)
  }

}
