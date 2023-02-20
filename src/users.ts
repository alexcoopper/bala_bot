export class Users {
    private userList: any[];
  
    constructor() {
      // Set up the list of eligible users
      this.userList = [
        { username: 'Bob', chatId: '123' },
        { username: 'Alice', chatId: '456' },
        { username: 'Charlie', chatId: '789' },
      ];
    }
  
    public getUserByIndex(index: number): any {
      // Get the user object for the user at the given index
      return this.userList[index];
    }
  }