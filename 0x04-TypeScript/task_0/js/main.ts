interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
};

const firstStudent: Student = {
    firstName: 'Omar',
    lastName: 'Afifi',
    age: 31,
    location: 'Mokattam'
};

const secondStudent: Student = {
    firstName: 'Nada',
    lastName: 'Soliman',
    age: 27,
    location: 'No',
};

const studentsList: Student[] = [firstStudent, secondStudent];

const table: HTMLTableElement = document.createElement('table');
const headerRow: HTMLTableRowElement = document.createElement('tr')
const headers: string = `
    <th style="border: 1px solid black">First Name</th>
    <th style="border: 1px solid black">Location</th>
`;

headerRow.innerHTML = headers;
table.append(headerRow);

table.setAttribute('style', 'width: 100%; border: 1px solid black');
document.body.append(table);

for (const student of studentsList) {
    const newRow: HTMLTableRowElement = document.createElement('tr');
    const row: string = `
        <td style="border: 1px solid black">${student.firstName}</td>
        <td style="border: 1px solid black">${student.location}</td>
    `
    newRow.innerHTML = row;
    table.append(newRow);
};
