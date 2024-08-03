/// <reference path="crud.d.ts" />
import { RowId, RowElement } from "./interface";
import * as CRUD from './crud.js'

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
}


const newRowID: RowId = CRUD.insertRow(row);

const newRow: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    age: 23,
}

const updateRow: RowElement = CRUD.updateRow(newRowID, newRow);

CRUD.deleteRow(newRowID);