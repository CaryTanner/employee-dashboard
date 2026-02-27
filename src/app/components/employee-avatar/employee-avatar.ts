import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-employee-avatar',
  imports: [],
  templateUrl: './employee-avatar.html',
  styleUrl: './employee-avatar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeAvatar {
  employeeName = input<string>();
  hideOnMobile = input<boolean>(false);
  initials = computed(() => {
    const employeeName = this.employeeName();
    if (!employeeName) {
      return '--';
    }
    const initials = employeeName
      .split(' ')
      .map((name: string) => name?.charAt(0)?.toUpperCase())
      .join('');
    return initials;
  });
}
