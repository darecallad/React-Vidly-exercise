import React, { Component } from "react";

class TableBody extends Component {
  render() {
    const { data, columns } = this.props;
    return (
      <tobdy>
        {data.map((item) => (
          <tr>
            {columns.map((column) => (
              <td></td>
            ))}
          </tr>
        ))}
      </tobdy>
    );
  }
}

export default TableBody;
