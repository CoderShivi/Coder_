import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
  mainContainer: {
    display: "flex",
    width: "97",
    backgroundColor: "#E4F1FF",
    height: "auto",
    margin: 25,
    borderRadius: 30,
  },
  grid1: {
    display: "flex",
    margin: 20,
    backgroundColor: "#E4F1FF",
    width: "30%",
    boxShadow: "5px 0 5px -5px #333 ",
    borderRadius: 20,
    flexDirection: "column",
  },
  paper1: {
    display: "flex",
    backgroundColor: "white",
    width: "70%",
    height: 80,
    margin: 30,
    marginLeft: 55,
    alignItems: "center",
    borderRadius: 15,
  },
  paper2: {
    display: "flex",
    backgroundColor: "white",
    width: "70%",
    height: 120,
    margin: 20,
    marginLeft: 60,
    justifyContent: "center",
    borderRadius: 15,
  },
  paper3: {
    display: "flex",
    backgroundColor: "white",
    width: "70%",
    height: 120,
    margin: 20,
    marginLeft: 60,

    borderRadius: 15,
    flexDirection: "column",
  },
  paper4: {
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
  },
  cardPaper: {
    display: "flex",
    backgroundColor: "white",
    width: "85%",
    height: 120,
    margin: 20,
    marginLeft: 60,
    borderRadius: 15,
    //justifyContent:'center',
    //alignItems:'center'
  },
  cardname: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 15,
    justifyContent: "center",
  },
  card1:{
    overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                width: "30%",
                fontFamily: "poppins",
                fontWeight: "bold",
                fontSize: 18,
  },
  card2:{
    overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                width: "30%",
                fontFamily: "poppins",
                fontWeight: "500",
                fontSize: 18,
  },
  NavigatorMain:{
    display: "flex",
        flexDirection: "row",
        margin: 10,
        justifyContent: "center",
        fontWeight: "bold",
  },
  navigatoDiv:{
    display: "flex",
          width: 40,
          height: 40,
          backgroundColor: "white",
          borderRadius: 40,
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 10,
          "&:hover":{
            cursor: "pointer",
            backgroundColor:'#D2E9E9'
          }
  }

});
