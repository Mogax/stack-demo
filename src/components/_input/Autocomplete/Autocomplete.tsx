import {useAtom} from "jotai/index"
import {
    Autocomplete as AutocompleteMui,
    Divider,
    InputAdornment,
    ListItem,
    Paper,
    Popper,
    TextField,
    Typography
} from "@mui/material"
import {propsTypes} from "./AutocompleteMui.constant.ts";

export const Autocomplete = (props: propsTypes) => {

    const {listOptions, atom, sx} = props

    const [value, setValue] = useAtom(atom)

    return (
        <AutocompleteMui
            sx={{margin: 2, width: '50%', "& .MuiOutlinedInput-notchedOutline": {
                    border:'none',
                    borderRadius: 5,
                    boxShadow:"0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)"
                }, ...sx}}
            value={value.value}
            options={listOptions}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            renderOption={(props, options, state) => (
                <>
                    {state.index != 0 && (<Divider sx={{backgroundColor:'#AAB2FF', height:5}}/>)}
                    <ListItem {...props} sx={{color:'#AAB2FF', display:'flex', "&:hover":{color:'#FFFFFF', backgroundColor:'#ECA0FF !important'}}}>
                        {options.startImg && <img alt={"type"} style={{width:30, marginRight:10}} src={options.startImg}/>}
                        <Typography>{options.label}</Typography>
                        {options.endImg && <img alt={"type"} style={{width:30, marginLeft:'auto'}} src={options.endImg}/>}
                    </ListItem>
                </>
            )}
            PaperComponent={(props) => (
                <Paper {...props} sx={{borderRadius: 5,
                    boxShadow:"0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)"}}/>
            )}
            PopperComponent={(props) => (
                <Popper {...props} modifiers={[{name:'offset', options:{offset:[0,10]}}]}/>
            )}
            renderInput={(params) => <
                TextField {...params}
                         InputProps={{...params.InputProps, style:{fontFamily:"Kavoon",
                                 color:'#ECA0FF',
                                 fontSize: 20},
                         startAdornment:(
                             <InputAdornment position={"start"}>
                                 <img src="/src/assets/pokeball-open.png" alt={'Start Adornment'}/>
                             </InputAdornment>
                         )}}
                         placeholder={value.label}
                         helperText={value.error}
                         error={value.error != ""}
            />}
            onChange={(_event, value) => setValue(value)}
        />
    );
};
