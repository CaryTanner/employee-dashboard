import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Employee } from '../../service/employee.schema';

@Component({
  selector: 'app-link-button',
  imports: [RouterModule],
  templateUrl: './link-button.html',
  styleUrl: './link-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkButton {
  link = input.required<string>();
  routerState = input<Employee | undefined>();
  ariaLabelText = input<string>();
}
