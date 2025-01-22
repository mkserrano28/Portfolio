import React from "react";
import project from "../../data/project.json";
import "../../css/Card.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export const CCard = () => {
  return (
    <div className="card-container">
      {/* Project History header */}
      <Typography variant="h5" className="project-history-header"
        sx={{ fontSize: '2.5rem', fontWeight: 700, fontFamily: '"Poppins", sans-serif' }}
      >
        Project History
      </Typography>

      {/* Map through projects and display cards */}
      {project.map((item, index) => (
        <Card key={index} sx={{ maxWidth: 345, margin: "10px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={item.image}
              
              alt={item.title || "Project Image"}
              sx={{
                height: 150, // Default height
                '@media (max-width:600px)': {
                  height: 120, // Adjust height on small screens
                },
                '@media (max-width:400px)': {
                  height: 120, // Adjust height on very small screens
                },
              }}
            />
      {console.log(item.image)
      }

            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="proj-title"
              >
                <div className="proj-descrip">
                  {item.title || "Project Title"}
                  <p>{item.description || "Default description text."}</p>
                </div>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default CCard;