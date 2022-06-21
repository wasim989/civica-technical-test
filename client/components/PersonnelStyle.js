import styled from "@emotion/styled";

const PersonnelStyle = styled("table")`
  border-collapse: collapse;
  background-color: ${(props) => props.bg};
  td {
    color: purple;
    padding: 10px;
  }
  thead td {
    background-color: #54585d;
    color: #ffffff;
    font-weight: bold;
    font-size: 13px;
    border: 1px solid #54585d;
  }
  tbody td {
    color: #636363;
    border: 1px solid #dddfe1;
  }
  tbody tr {
    background-color: #ffffff;
  }
  tbody tr:nth-of-type(odd) {
    background-color: #f9fafb;
  }
`;

export default PersonnelStyle;
