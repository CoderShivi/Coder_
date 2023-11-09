import { Grid, Paper } from "@mui/material";
import React from "react";
import Cardss from "./Cardss";
import BottomNavigator from "./BottomNavigator";

function WireFrame() {
  return (
    <div>
      <div
      style={{display: "flex",
      width: "97",
      backgroundColor: "#E4F1FF",
      height: "auto",
      margin: 25,
      borderRadius: 30,}}
      >
        <Grid
          container
          spacing={1}
          style={{ display: "flex", width: "100%", margin: 2 }}
        >
          <Grid
            item
            XS={6}
            style={{
              display: "flex",
              margin: 20,
              backgroundColor: "#E4F1FF",
              width: "30%",
              boxShadow: "5px 0 5px -5px #333 ",
              borderRadius: 20,
              flexDirection: "column",
            }}
          >
            <Paper
              style={{
                display: "flex",
                backgroundColor: "white",
                width: "70%",
                height: 80,
                margin: 30,
                marginLeft: 55,
                alignItems: "center",
                borderRadius: 15,
              }}
            >
              {" "}
              <img
                src="/assets/offer.png"
                style={{
                  width: 50,
                  height: 50,
                  alignSelf: "center",
                  marginLeft: 20,
                }}
              />
              <div style={{ margin: 20 }}>
                <div
                  style={{
                    display: "flex",
                    fontFamily: "poppins",
                    fontWeight: "bold",
                  }}
                >
                  Hi Reader,{" "}
                </div>
                <div style={{ fontSize: 12 }}>Here's Your News</div>
              </div>
            </Paper>
            <Paper
              style={{
                display: "flex",
                backgroundColor: "white",
                width: "70%",
                height: 120,
                margin: 20,
                marginLeft: 60,
                justifyContent: "center",
                borderRadius: 15,
                flexDirection:'column',
                alignItems:'center'
              }}
            >
              <div
                style={{
                  fontFamily: "poppins",
                  fontSize: 28,
                  fontWeight: "bold",
                  marginTop: 2,
                }}
              >
                View Toggle
              </div>
              <div style={{display:'flex',width:40,height:20,backgroundColor:'#DDE6ED'}}>

              </div>
            </Paper>
            <Paper
              style={{
                display: "flex",
                backgroundColor: "white",
                width: "70%",
                height: 120,
                margin: 20,
                marginLeft: 60,

                borderRadius: 15,
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontFamily: "poppins",
                  fontSize: 26,
                  fontWeight: "bold",
                  marginTop: 10,
                  marginLeft: 30,
                }}
              >
                have a Feedback?
              </div>
              <Paper
                style={{
                  display: "flex",
                  backgroundColor: "#D0F5BE",
                  width: "70%",
                  height: 50,
                  //margin: 20,
                  marginLeft: 35,
                  alignItems: "center",
                  borderRadius: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                {" "}
                we Are Listening!
              </Paper>
            </Paper>
          </Grid>
          <Grid
            item
            XS={6}
            style={{
              display: "flex",
              //margin: 20,
              backgroundColor: "#E4F1FF",
              width: "65%",
              flexDirection: "column",
            }}
          >
            <Cardss />
            <BottomNavigator />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default WireFrame;
