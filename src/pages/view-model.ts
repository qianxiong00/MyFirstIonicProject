import { ScheduleInitialState, ScheduleViewModel } from './schedule/schedule-view-model';

export class ViewModel {
  schedule: ScheduleViewModel
}

/**
 * アプリケーションステータス管理用ユーティリティ
 */
export namespace ViewModel {

  /**
   * アプリケーション初期状態
   */
  const InitialState:ViewModel = {
    schedule: ScheduleInitialState
  }
}