import { RowElement, RowId } from './interface';

declare function insertRow(row: RowElement): number;

declare function deleteRow(rowId: RowId): void;

declare function updateRow(rowId: RowId, row: RowElement): RowElement;