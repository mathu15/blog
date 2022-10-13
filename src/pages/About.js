import { MDBContainer, MDBTypography } from "mdb-react-ui-kit";
import React from "react";

const About = (props) => {
  return (
    <div style={{ marginTop: "100px" }}>
      <MDBContainer>
        <MDBTypography note noteColor="primary">
          its a blogging website...
        </MDBTypography>
      </MDBContainer>
    </div>
  );
};
export default About;
