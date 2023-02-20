import { Users } from './users';

export class Scheduler {
  private schedule: string[];

  constructor() {
    // Set up the schedule to select a user each day
    this.schedule = ['Bob', 'Alice', 'Charlie'];
  }

  public start(users: Users, onDutyCallback: (user: any) => void): void {
    // Determine the index of the user who is on duty today
    const index = this.getIndexForToday();

    // Get the user object for the user on duty today
    const user = users.getUserByIndex(index);

    // Call the onDutyCallback with the user object
    onDutyCallback(user);
  }

  private getIndexForToday(): number {
    // Get today's date
    const today = new Date();

    // Calculate the number of days since the first day of the schedule
    const start = new Date('2022-01-01');
    const diff = Math.floor((today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));

    // Determine the index of the user on duty today
    const index = diff % this.schedule.length;

    return index;
  }
}