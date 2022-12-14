import {TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {write} from "../store/modules/graphData";
const TextBox = (props) => {
    const dispatch = useDispatch();
    const onChange = (event) => {
        const action = write({
            index: props.index,
            propertyName:props.val, 
            newValue: event.target.value
        });
        dispatch(action);
    }
    return (
        <>
            <TextField id="standard-basic" label={props.label} value={props.value} variant="standard" onChange={onChange}/>
        </>
    )
}

export default TextBox;
