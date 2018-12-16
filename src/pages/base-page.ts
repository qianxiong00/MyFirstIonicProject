import { OnDestroy } from '@angular/core';
import { ScheduleInitialState } from './schedule/schedule-view-model';
import { ScheduleDetailsInitialState } from './schedule-details/schedule-details-view-model';
/**
 * ページコンポーネントの共通基底クラス
 * @author nabla2.metamodel.generator
 */
export abstract class BasePage implements OnDestroy {

  /** 表示モデル */
  viewModel:any

  ngOnDestroy() {}

  ionViewWillEnter() {
    this.viewModel = {
      schedule: ScheduleInitialState(),
      scheduleDetails: ScheduleDetailsInitialState()
    }
  }
}