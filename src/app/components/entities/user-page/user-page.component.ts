import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BasePageComponent } from '../../base-page/base-page.component';
import { EntityType } from '../../../models';

@Component({
  selector: 'app-user-page',
  templateUrl: '../../base-page/base-page.component.html',
  styleUrls: ['../../base-page/base-page.component.scss', './user-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPageComponent extends BasePageComponent implements OnInit {
  entityType = EntityType.user;

  ngOnInit(): void {
    this.actions = {
      createNew: this.createNew.bind(this),
      export: this.export.bind(this)
    };
    super.ngOnInit();
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
