import { ViewModel } from './view-model'
import { OnDestroy } from '@angular/core';
import { ScheduleInitialState } from './schedule/schedule-view-model';
import { ScheduleDetailsInitialState } from './schedule-details/schedule-details-view-model';
import { CostInitialState } from './cost/cost-view-model';
/**
 * ページコンポーネントの共通基底クラス
 * @author nabla2.metamodel.generator
 */
export abstract class BasePage implements OnDestroy {

  /** 表示モデル */
  viewModel:ViewModel

  ngOnDestroy() {}

  ionViewWillEnter() {
    this.viewModel = {
      schedule: ScheduleInitialState(),
      scheduleDetails: ScheduleDetailsInitialState(),
      cost: CostInitialState()
    }
  }
}