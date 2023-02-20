import { User } from "./types/users";

  
export const users: User[] = [
    { name: 'Льоша/Ліза', id: 0 },
    { name: 'Діма/Аня', id: 1 },
  ];
 

const startDay = new Date("2023-02-17"); 

export function getCurrentDuty(): User {
    const today = new Date();
    const timeDiff = Math.abs(today.getTime() - startDay.getTime());
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  
    // Calculate the index of the person on duty
    const index = daysDiff % 2;
  
    // Return the ID of the person on duty
    return users[index];
  }