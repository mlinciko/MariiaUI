import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataBindingComponent {
  constructor(private translationService: TranslationService) {}
  title = this.translationService.translate('docs.dataBinding.title');
  description = this.translationService.translate(
    'docs.dataBinding.description'
  );

  creatingSourceTitle = this.translationService.translate(
    'docs.dataBinding.creatingSource.title'
  );
  creatingSourceDescr = this.translationService.translate(
    'docs.dataBinding.creatingSource.description'
  );

  definingApiTitle = this.translationService.translate(
    'docs.dataBinding.definingApi.title'
  );
  definingApiDescr1 = this.translationService.translate(
    'docs.dataBinding.definingApi.description1'
  );
  definingApiDescr2 = this.translationService.translate(
    'docs.dataBinding.definingApi.description2'
  );
  definingApiDescr3 = this.translationService.translate(
    'docs.dataBinding.definingApi.description3'
  );
  definingApiDescr4 = this.translationService.translate(
    'docs.dataBinding.definingApi.description4'
  );
  definingApiDescr5 = this.translationService.translate(
    'docs.dataBinding.definingApi.description5'
  );

  templateTitle = this.translationService.translate(
    'docs.dataBinding.template.title'
  );
  templateDescr = this.translationService.translate(
    'docs.dataBinding.template.description'
  );

  templateCode = `<mui-table
  [dataSource]="source"
  [columns]="columns"></mui-table>`;

  definingApiCode = `http://localhost:3000/api/users?skip=0&take=10&sortKey=name&sortDirection=asc
  `;
  componentCode = `
  import { Component } from '@angular/core';
  import { ColumnTypes, TColumn } from 'mariia-ui';
  
  @Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss'],
  })
  export class DemoComponent {
    source = new MuiTableSource('http://localhost:3000/api/users');
  }`;
}
