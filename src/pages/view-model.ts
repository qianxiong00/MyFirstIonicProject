import { ScheduleInitialState, ScheduleViewModel } from './schedule/schedule-view-model';
import { CostViewModel, CostInitialState } from './cost/cost-view-model';
import { ScheduleDetailsViewModel, ScheduleDetailsInitialState } from './schedule-details/schedule-details-view-model';

export class ViewModel {
  schedule: ScheduleViewModel
  schedule_details: ScheduleDetailsViewModel
  cost: CostViewModel
}

/**
 * アプリケーションステータス管理用ユーティリティ
 */
export namespace ViewModel {

  /**
   * アプリケーション初期状態
   */
  const InitialState:ViewModel = {
    schedule: ScheduleInitialState(),
    schedule_details: ScheduleDetailsInitialState(),
    cost: CostInitialState()
  }
}

export function myFunc(model:ViewModel):ViewModel { 
  return model;
}