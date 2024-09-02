import React from 'react';

// Función que formatea la fecha a un formato más legible
const formatDate = (dateString) => {
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  return new Date(dateString).toLocaleDateString('en-GB', options);
};

// Componente que renderiza una fila individual de datos
const TableRow = ({ data }) => {
  return (
    <tr>
      <td data-label="ID">{data.id}</td>
      <td data-label="Created At">{formatDate(data.created_at)}</td>
      <td data-label="HCP">{data.hcp}</td>
      <td data-label="Hits">{data.hits}</td>
      <td data-label="Hole">{data.hole}</td>
      <td data-label="Scratch">{data.scratch}</td>
      <td data-label="Stableford HCP">{data.stableford_hcp}</td>
      <td data-label="Stableford Scratch">{data.stableford_scratch}</td>
      <td data-label="To Par HCP">{data.to_par_hcp}</td>
      <td data-label="To Par Scratch">{data.to_par_scratch}</td>
      <td data-label="Updated At">{formatDate(data.updated_at)}</td>
    </tr>
  );
};

export default TableRow;
