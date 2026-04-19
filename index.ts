interface Employee {
    id: number,
    name: string,
    position: string,
    wages?: number
};

const printEmployee = (data: Employee) => {
    console.log(`${data.name} working as ${data.position}`);
};

const emp1: Employee = {
    id: 1,
    name: "Alto",
    position: "Node.js Architect"
};

printEmployee(emp1);