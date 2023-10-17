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
import {useState} from "react";
import {styles} from "./Autocomplete.styles.ts";

export const Autocomplete = (props: propsTypes) => {

    const {listOptions, atom, sx} = props
    const {autocomplete, startAdornment, inputAdornment, endAdornment, paper, divider, textfield, listItem} = styles

    const [value, setValue] = useAtom(atom)
    const [fileName, setFileName] = useState("/src/assets/pokeball-open.png")

    return (
        <AutocompleteMui
            sx={{...autocomplete, ...sx}}
            value={value.value}
            options={listOptions}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            renderOption={(props, options, state) => (
                <>
                    {state.index != 0 && (<Divider sx={divider}/>)}
                    <ListItem {...props} sx={listItem}>
                        {options.startImg && <img alt={"type"} style={startAdornment} src={options.startImg}/>}
                        <Typography>{options.label}</Typography>
                        {options.endImg && <img alt={"type"} style={endAdornment} src={options.endImg}/>}
                    </ListItem>
                </>
            )}
            PaperComponent={(props) => (
                <Paper {...props} sx={paper}/>
            )}
            PopperComponent={(props) => {
                setFileName(props.open ? '/src/assets/pokeball-open.png' : '/src/assets/pokeball-close.png')
                return (
                    <Popper {...props} modifiers={[{name:'offset', options:{offset:[0,10]}}]}/>
                )
            }}
            renderInput={(params) => {
                return (<TextField {...params}
                                   InputProps={{...params.InputProps, style:textfield,
                                       startAdornment:(
                                           <InputAdornment position={"start"}>
                                               <img src={fileName} style={inputAdornment} alt={'Start Adornment'}/>
                                           </InputAdornment>
                                       )}}
                                   placeholder={value.label}
                                   helperText={value.error}
                                   error={value.error != ""}
                />)
            }}
            onChange={(_event, value) => setValue(value)}
        />
    );
};
