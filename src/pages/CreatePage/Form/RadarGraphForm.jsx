import FileInput from "../Parts/FileInput";
import ColorPicker from "../Parts/ColorPicker";
import TextBox from "../Parts/TextBox";
import SingleCheckbox from "../Parts/SingleCheckbox";
import {Grid} from "@mui/material";
import SingleSelect from "../Parts/SingleSelect";

const RadarGraphForm = (props) => {
    const index = props.index;
    const graphData = props.graphData;
    const datasets = graphData.datasets;
    return (        
        <>               
            <Grid container spacing={4}>   
                <Grid item xs={12} >                        
                    <FileInput label="labels:" val={"labels"} index={-1} empty={!graphData.labels.length}/><p></p>
                </Grid>
                <Grid item xs={12}>
                    <FileInput label="data:" val={"data"} index={index} empty={!datasets[index].data.length}/><p></p>
                </Grid>
                <Grid item xs={12}>
                    <ColorPicker label="色" val={"color"} value={datasets[index].color} index={index}/>
                </Grid>
                <Grid item xs={12} >
                    <TextBox label="タイトル" val={"title"} index={-1}/>
                </Grid>                                                  
                <Grid item xs={12}/>       
            </Grid>                
        </>            
    )
}


export default RadarGraphForm;
