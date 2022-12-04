type Employee = {
  supervisors: string[];
  checkPoint: (hour: number) => string;
};

const Employee: Employee = {
  supervisors: ['Joana', 'Alceu'],
  checkPoint: (hour: number) => hour > 8 ? 'Fora do horário' : 'Ponto normal',
}

console.log(Employee.checkPoint(10));
