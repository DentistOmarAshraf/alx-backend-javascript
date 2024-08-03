interface DirectorInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workDirectorTasks(): string,
};

interface TeacherInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workTeacherTasks(): string,
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return ('Working from home');
    }
    getCoffeeBreak(): string {
        return ('Getting a coffe break');
    }

    workDirectorTasks(): string {
        return ('Getting to director tasks');
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return ('Cannot Work from home')
    }

    getCoffeeBreak(): string {
        return ('Cannot have a break');
    }

    workTeacherTasks(): string {
        return ('Getting to work');
    }
}

interface createEmployeeFunction {
    (salary: number | string): Director | Teacher
}

const createEmployee: createEmployeeFunction = (salary) => {
    let theSalary = 0;
    if (typeof (salary) == 'string'){
        theSalary += parseInt(salary.slice(1));
    }else {
        theSalary +=  salary
    }

    if (theSalary < 500)
        return new Teacher()
    return new Director()
}
