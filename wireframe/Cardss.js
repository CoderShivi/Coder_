import React, { useEffect, useState } from "react";
import { BottomNavigation, Grid, Paper } from "@mui/material";
import { useStyles } from "./WireFrameCss";

function Cardss() {
  var classes = useStyles();
  const [users, setUserid] = useState([]);

  const getApiData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    ).then((response) => response.json());

    setUserid(response);
    console.log("response", response);
  };
  useEffect(() => {
    getApiData();
  }, []);

  function card() {
    const initialData = users.slice(0, 6);
    console.log("initialdata", initialData);
    return initialData.map((item) => {
      return (
        <Paper className={classes.cardPaper}>
          <img
            src="/assets/offer.png"
            style={{
              width: 70,
              height: 70,
              alignSelf: "center",
              marginLeft: 20,
            }}
          />
          <div className={classes.cardname}>
            <div className={classes.card1}>{item.title}</div>
            <div className={classes.card2}>
              hello
              {item.body}
            </div>
            <div style={{ marginTop: 5, fontWeight: "bold", color: "#DDE6ED" }}>
              Mon, 21 December 14:57 GMT
            </div>
          </div>
        </Paper>
      );
    });
  }

  return (
    <>
      <div style={{ display: "flex", width: "100%", flexDirection: "column" }}>
        {card()}
      </div>
    </>
  );
}

export default Cardss;
