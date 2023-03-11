import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { HiExternalLink } from "react-icons/hi";
import Slider from "react-slick";
import { ThemeContext } from "../../../contexts/theme-context";
import { certificateData } from "../../../data/certificateData";
import "./certificate.css";

const Certificate = () => {
  const { theme } = useContext(ThemeContext);

  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingBottom: '30px',
        height: "auto",
        m: "20px",
        width: "auto",
        border: "solid 5px #D65A31",
        borderRadius: "20px",
        backgroundColor: theme.buttonColor,
      }}
    >
      <div className="certificate-header">
        <h1
          style={{
            color: "#D65A31",
            paddingTop: "20px",
          }}
        >
          Certificates
        </h1>
      </div>
      <Slider
        {...settings}
        // sx={{ display: "flex", justifyContent: "space-between" }}
      >
        {certificateData.map((item) => (
          <Card
            key={item.id}
            sx={{
              borderRadius: "20px",
              height: { xs: 320, sm: 480 },
              width: "100%",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                sx={{
                  height: { xs: 270, sm: 420 },
                  borderBottom: "1px solid #f5f5f5",
                  // display: "flex",
                  // justifyContent: "space-between",
                }}
                image={item.image}
                alt={item.title}
              />
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  py: 1,
                }}
              >
                <Typography>{item.title}</Typography>
                <IconButton>
                  <Link href={item.link}>
                    <HiExternalLink />
                  </Link>
                </IconButton>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Slider>
    </Container>
  );
};

export default Certificate;
