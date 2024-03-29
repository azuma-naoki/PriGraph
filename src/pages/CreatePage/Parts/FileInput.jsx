import {Button, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {write} from "../store/modules/graphData";
const FileInput = (props) => {
    const dispatch = useDispatch();
    const isNumberString = n => typeof n === "number" || typeof n === "string" && n !== "" &&  !isNaN( n );
    const onChange = (event) => {
        const file = event.target.files;
        const fileReader = new FileReader();
        fileReader.readAsText(file[0]);
        fileReader.onload = (event) => {
            let result = fileReader.result.split(/\r\n|\n/);
            result = result.filter(item => item !== "");
            result = result.map(item => {
                if(isNumberString(item)) {
                    return Number(item);
                } else {
                    return item;
                }
            })        
            const action = write({
                index: props.index,
                propertyName:props.val, 
                newValue: result
            });
            dispatch(action);
        }
    }
    return (
        <>
            <Typography variant="caption" component="span" mt={1} gutterBottom>{props.label}</Typography>
            {   
                props.empty?
                <Button variant="outlined" component="label">ファイルを選択
                    <input type="file" hidden onChange={onChange} accept=".txt"/>
                </Button>
                :
                <Button variant="contained" component="label" color="success">ファイルを選択
                    <input type="file" hidden onChange={onChange} accept=".txt"/>
                </Button>                
            }
        </>
    )
}

export default FileInput;
