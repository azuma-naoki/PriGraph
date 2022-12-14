import {Button} from "@mui/material";

const SubmitButton = (props) => {
    return (        
      <Button variant="contained" type="submit">
        {props.label}
      </Button>      
    )
}

export default SubmitButton;
