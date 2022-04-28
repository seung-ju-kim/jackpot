import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  Button,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";

export default function CardItem({ cocktail }) {
  const navigate = useNavigate();
  const [isFront, setIsFront] = useState(true);

  const buttonStyle = {
    color: "violet",
    border: "2px solid violet",
  };
  const iconStyle = {
    position: "absolute",
    top: 10,
    right: 10,
    color: "violet",
  };
  const handleOnClick = () => {
    isFront ? setIsFront(false) : setIsFront(true);
  };
  return (
    <>
      {cocktail.rank != undefined && (
        <Button sx={buttonStyle}>TOP 26!!!</Button>
      )}
      <div className={` ${isFront ? "cardFront" : "cardBack"}`}>
        <Card className=" front">
          <FavoriteIcon sx={iconStyle} />
          <CardMedia
            height="250"
            component="img"
            image={cocktail.imageUrl}
            loading="lazy"
          />
          <CardContent className="cocktailContent">
            <Typography
              className="contentText"
              gutterBottom
              variant="h5"
              component="div"
            >
              {cocktail.name}
            </Typography>
            <Button onClick={handleOnClick} sx={buttonStyle}>
              뒤집기
            </Button>
          </CardContent>
        </Card>

        <Card className=" back">
          <CardContent className="descriptionBox">
            <Typography variant="body1">[이름]</Typography>
            <Typography variant="body2">{cocktail.name}</Typography>
            <br />
            <Typography variant="body1">[칵테일에 들어가는 재료]</Typography>
            {cocktail.ingredient.map((item, i) => (
              <Typography key={i} variant="body2">
                재료{i + 1} : {item}
              </Typography>
            ))}
            <br />
            {cocktail.rank != undefined && (
              <>
                <Typography variant="body1">[랭킹]</Typography>
                <Typography variant="body2">{cocktail.rank.rank}위</Typography>
              </>
            )}
            <Button onClick={handleOnClick} sx={buttonStyle}>
              뒤집기
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
