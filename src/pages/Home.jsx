import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  //Darle estilo a cada uno de los divs
  root: {},
}));

export const Home = () => {
  const classes = useStyles();
  return <div>Home</div>;
};
