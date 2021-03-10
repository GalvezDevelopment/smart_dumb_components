import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
  private users = [
    { name: 'John', age: 28, career: 'Angular Developer' },
    { name: 'Peter', age: 25, career: 'ReactJS Developer' },
    { name: 'Carolina', age: 25, career: 'UX/UI Designer' },
    { name: 'George', age: 28, career: 'Graphic Designer' },
    { name: 'Brandon', age: 25, career: 'Graphic Designer' },
    { name: 'Kent', age: 25, career: 'Graphic Designer' },
    { name: 'Aden', age: 28, career: 'UX/UI Designer' },
    { name: 'Andy', age: 25, career: 'Business Analyst' },
    { name: 'Irving', age: 25, career: 'UX/UI Designer' },
    { name: 'Kenneth', age: 28, career: 'ReactJS Developer' },
    { name: 'Alfonse', age: 28, career: 'Angular Developer' },
    { name: 'Tomas', age: 28, career: 'Angular Developer' },
    { name: 'Roger', age: 28, career: 'Angular Developer' },
    { name: 'Campbell', age: 25, career: 'Angular Developer' },
    { name: 'Keanu', age: 28, career: 'Angular Developer' },
    { name: 'Llewelyn', age: 25, career: 'Angular Developer' },
    { name: 'Francis', age: 28, career: 'Angular Developer' },
    { name: 'Jovan', age: 28, career: 'Angular Developer' },
    { name: 'Rickey', age: 25, career: 'Angular Developer' },
    { name: 'Omar', age: 28, career: 'Angular Developer' },
  ];

  constructor() {
  }

  getUsersByAge(age: number | undefined): any[] {
    return typeof age === 'undefined' && [] || this.users.filter(user => user.age === age);
  }
}
