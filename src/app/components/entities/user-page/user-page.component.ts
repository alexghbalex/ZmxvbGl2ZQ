import { Component, OnDestroy, OnInit } from '@angular/core';
import { BasePageComponent } from '../../base-page/base-page.component';

@Component({
  selector: 'app-user-page',
  templateUrl: '../../base-page/base-page.component.html',
  styleUrls: ['../../base-page/base-page.component.scss', './user-page.component.scss']
})
export class UserPageComponent extends BasePageComponent implements OnInit, OnDestroy {
  entityType = 'user';

  ngOnInit(): void {
    this.actions = {
      createNew: this.createNew.bind(this),
      export: this.export.bind(this)
    };
    super.ngOnInit();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  createNew(): void {
    // todo: create action
    this.showAction('Create new');
  }

  export(): void {
    // todo: create action
    this.showAction('Export');
  }
}
