import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { styled } from "@mui/system"; // NEW import for styling



// STYLED COMPONENTS REPLACING makeStyles
const RootContainer = styled(Grid)({
  height: "100vh",
  display : "flex",
  flexDirection : "column",
  justifyContent : "center",
  alignItems : "center"
});



const PaperContainer = styled(Paper)(({ theme }) => ({
  margin: theme.spacing(8, 4),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(4),
}));

const AvatarStyled = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: theme.palette.secondary.main,
}));

const FormStyled = styled("form")(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(1),
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));



const SignInSide = () => {
    const navigate = useNavigate();

const handleSignIn = (event) => {
  event.preventDefault();
  // Perform authentication logic here (e.g., API call)
  navigate("/dashboard"); // Redirect to Dashboard after login
};
  return (
    <RootContainer  >
         <Typography component="h1" class="big_title" variant="h5">
          Weclome to the platform
        </Typography>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={PaperContainer} elevation={6} square>
        <div className="Sign_up">
        
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <FormStyled noValidate>
        <TextField
  variant="outlined"
  margin="normal"
  required
  fullWidth
  id="email"
  label="Email Address"
  name="email"
  autoComplete="email"
  autoFocus
  sx={{
    backgroundColor: 'white', // Ensures white background
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
      },
      '&:hover fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      },
    },
  }}
/>


          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black', // Change border color if necessary
                  }
                },
              }}
          />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
          <SubmitButton type="submit" fullWidth variant="contained" color="primary" onClick={handleSignIn}>
            Sign In
          </SubmitButton>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
           
          </Grid>
          
        </FormStyled>
        </div>
      </Grid>
    </RootContainer>
  );
};

export default SignInSide;
