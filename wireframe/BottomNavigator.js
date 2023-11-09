import React, { useState } from "react";
import { useStyles } from "./WireFrameCss";
const BottomNavigator = (props) => {
  var classes = useStyles();
  const [currentPage, setCurrentPage] = useState(1);
  const [nextData, setNextData] = useState([]);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const loadMore = () => {
    const initialData = props.users;
    const newData = initialData.slice(
      initialData.length,
      initialData.length + 6
    );
    setNextData([...newData]);
  };
  return (
    <div className={classes.NavigatorMain}>
      <div className={classes.navigatoDiv} >1</div>
      <div className={classes.navigatoDiv}>2</div>
      <div className={classes.navigatoDiv}>3</div>
      <div className={classes.navigatoDiv}>4</div>
      <div className={classes.navigatoDiv}>5</div>
    </div>
  );
};

export default BottomNavigator;
