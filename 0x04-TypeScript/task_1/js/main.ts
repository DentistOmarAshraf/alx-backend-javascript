interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience: number,
    location: string,
    [key: string]: any
};


const firstTeacher: Teacher = {
    firstName: 'Omar',
    lastName: 'Afifi',
    fullTimeEmployee: true,
    yearsOfExperience: 10,
    location: 'Cairo',
};

const secondTeacher: Teacher = {
    firstName: 'Nada',
    lastName: 'Soliman',
    fullTimeEmployee: true,
    yearsOfExperience: 7,
    location: 'Helwan',
};

const teachersList: Teacher[] = [firstTeacher, secondTeacher];

const table: HTMLTableElement = document.createElement('table');
const headerRow: HTMLTableRowElement = document.createElement('tr');
const headers: string = `
    <th style="border: 1px solid black">First Name</th>
    <th style="border: 1px solid black">Years of Experiance</th>
`
headerRow.innerHTML = headers;
table.append(headerRow);

table.setAttribute('style', 'width: 100%; border: 1px solid black');
document.body.append(table);

for (const teacher of teachersList) {
    const newRow: HTMLTableRowElement = document.createElement('tr');
    const row: string = `
        <td style="border: 1px solid black">${teacher.firstName}</td>
        <td style="border: 1px solid black">${teacher.yearsOfExperience}</td>
    `
    newRow.innerHTML = row;
    table.append(newRow);
};