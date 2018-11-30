import { ViewModel } from './view-model'
import { Store } from '@ngrx/store'
import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs'
/**
 * ページコンポーネントの共通基底クラス
 * @author nabla2.metamodel.generator
 */
export abstract class BasePage implements OnDestroy {

  /** 表示モデル */
  viewModel:ViewModel

  /** 監視中のリアクティブストリームを一括解除するためのサブジェクト */
  protected unload$:Subject<void>

  /**
   * コンストラクタ
   */
  constructor(protected store: Store<{viewModel:ViewModel}>) {
  }

  ngOnDestroy() {}

  /**
   * リアクティブストリームの監視を終了する。
   */
  ionViewDidLeave():void {
    this.unload$.next()
    this.unload$.complete()
  }

  ionViewWillEnter() {
    this.unload$ = new Subject<void>()
    this.store.select('viewModel')
              .takeUntil(this.unload$)
              .subscribe(v => this.viewModel = v)
  }
}