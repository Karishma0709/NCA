import React from 'react';

const Table = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {props.columnArray.map((item) => {
              return <th>{props.header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
