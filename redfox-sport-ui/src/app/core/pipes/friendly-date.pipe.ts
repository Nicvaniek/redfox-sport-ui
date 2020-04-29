import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'friendlyDate'
})
export class FriendlyDatePipe implements PipeTransform {
  private readonly TODAY = 'Today';
  private readonly YESTERDAY = 'Yesterday';
  private readonly TOMORROW = 'Tomorrow';

  private today = new Date();

  transform(value: Date): string {
    if (this.isToday(value)) {
      return this.TODAY;
    }
    if (this.isTomorrow(value)) {
      return this.TOMORROW;
    }
    if (this.isYesterday(value)) {
      return this.YESTERDAY;
    }
    return new DatePipe('en-US').transform(value, 'EEEE, MMMM d');
  }

  private isToday(incomingDate: Date): boolean {
    return this.today.getDate() === incomingDate.getDate()
    && this.today.getMonth() === incomingDate.getMonth()
    && this.today.getFullYear() === incomingDate.getFullYear();
  }

  private isTomorrow(incomingDate: Date) {
    const tomorrow = new Date(this.today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.getDate() === incomingDate.getDate()
    && tomorrow.getMonth() === incomingDate.getMonth()
    && tomorrow.getFullYear() === incomingDate.getFullYear();
  }

  private isYesterday(incomingDate: Date) {
    const yesterday = new Date(this.today);
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday.getDate() === incomingDate.getDate()
    && yesterday.getMonth() === incomingDate.getMonth()
    && yesterday.getFullYear() === incomingDate.getFullYear();
  }

}
