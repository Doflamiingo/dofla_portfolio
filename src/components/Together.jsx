import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/lotties/test.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CodeIcon from "@mui/icons-material/Code";
import BrushIcon from "@mui/icons-material/Brush";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

const Together = () => {
  return (
    <div className="togetherSection">
      <h2>Mes services</h2>
      <div className="gauche">
        <Lottie animationData={animationData} height={100} width={100} />
      </div>
      <div className="droite">
        <Container>
          <Col className="tblock">
            <CodeIcon className="icn" sx={{ fontSize: 30 }} />
            <h1>Web developpement</h1>
            <p>
              Création de votre site web et mise en ligne.<br />
              Amélioration du réferencement de votre site.
            </p>
          </Col>

          <Col className="tblock">
            <BrushIcon className="icn" sx={{ fontSize: 30 }} />
            <h1>Web design</h1>
            <p>
              Création d'une maquette adapté à tous les écrans pour votre
              futur site web.<br />
              Conseil UI/UX design 
            </p>
          </Col>
        </Container>
      </div>
      <div className="bttn">
        <a href="mailto:raguetteraphael@gmail.com">
          <Button variant="contained" endIcon={<SendIcon />}>
            Donnons vie à votre projet
          </Button>
        </a>
        <Button
          disabled={false}
          size="medium"
          variant="elevated"
          color="success"
        />
      </div>
    </div>
  );
};

export default Together;
