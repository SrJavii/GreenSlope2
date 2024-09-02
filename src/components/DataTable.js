import React from 'react';
import TableRow from './TableRow';

const DataTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>CreateAt</th>
          <th>HCP</th>
          <th>Hits</th>
          <th>Hole</th>
          <th>Scratch</th>
          <th>Stablefor HCP</th>
          <th>Stablefor Scratch</th>
          <th>Topar HCP</th>
          <th>Topar Scratch</th>
          <th>UpdateAt</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <TableRow key={item.id} data={item} />
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
