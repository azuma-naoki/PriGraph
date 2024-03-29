import {useDispatch} from "react-redux";
import {addDataset} from "../store/modules/graphData";
import {Button} from "@mui/material";
import {maxIndex,initialStates} from "../const";
const AddButton = (props) => {
    const graphType = props.graphType;
    const dispatch = useDispatch();
    const onClick = (event) => {
        const action = addDataset({
            initialState: initialStates[graphType]            
        });
        dispatch(action);
        props.setIndex(prev => {
            return prev < maxIndex - 1 ? props.datasetsSize: maxIndex - 1;
        });
    }
    return (    
        ((graphType === "line" || graphType === "bar" || graphType === "scatter" || graphType === "bubble" || graphType === "radar") && props.datasetsSize < maxIndex) ?
        <Button variant="contained" onClick={onClick}>{props.label}</Button>
        :<Button variant="contained" onClick={onClick} disabled>{props.label}</Button>
    )
}

export default AddButton;
