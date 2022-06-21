import React, { useEffect, useState } from "react";
import axios from "axios";
import PersonnelStyle from "./PersonnelStyle";

export default function Personnel() {
  const [content, setContent] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(`http://localhost:1235/api/personnel`);
    setContent(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderedPersonnel = content.map((personnel) => {
    return (
      <tr key={personnel._id}>
        <td>{personnel.Reference}</td>
        <td>{personnel.GivenName}</td>
        <td>{personnel.FamilyName}</td>
        <td>{personnel.DateOfBirth}</td>
      </tr>
    );
  });

  return (
    <div>
      <PersonnelStyle bg="#ff0000">
        <thead>
          <tr>
            <td>Reference</td>
            <td>Given Name</td>
            <td>Family Name</td>
            <td>Date of Birth</td>
          </tr>
        </thead>
        <tbody>{renderedPersonnel}</tbody>
      </PersonnelStyle>
    </div>
  );
}
