import {atom, Getter, Setter, WritableAtom} from "jotai/index";
import {CSSProperties} from "react";
import {optionsType} from "../../../models/input.ts";

export type autocompleteType = {
    label:string,
    value:optionsType | null,
    error:string,
    errors:{
        empty:{
            activate:boolean
        }
    },
    onCheck:(newValue:optionsType | null) => string,
    onChange:(newValue:optionsType | null) => autocompleteType,
    onReset:() => autocompleteType
}

type autocompleteErrorParam = {
    empty?:boolean
}

const defaultAutocomplete : autocompleteType = {
    label:"",
    value:null,
    error:"",
    errors:{
        empty:{
            activate:false
        }
    },
    onCheck: function(newValue:optionsType | null) {
        if(this.errors.empty.activate){
            if(newValue === null){
                return "Cette valeur ne peut pas être vide"
            }
        }
        return ""
    },
    onChange: function (newValue:optionsType | null) {
        const error = this.onCheck(newValue)
        return {...this, value:newValue, error}
    },
    onReset: function () {
        return {...this, value:null, error:""}
    }
}

export type autocompletedAS = {
    store: WritableAtom<autocompleteType, [autocompleteType], void>,
    atom: WritableAtom<autocompleteType, [optionsType | null | [null]], void>
}

export const makeAutocompletedAtom = (label:string, errors?:autocompleteErrorParam, over:(get:Getter, set:Setter, args:optionsType | null | [null]) => void = () => {} ): [WritableAtom<autocompleteType, [autocompleteType], void>,WritableAtom<autocompleteType, [optionsType | null | [null]], void>] => {

    const store: WritableAtom<autocompleteType, [autocompleteType], void> = atom({
        ...defaultAutocomplete,
        label,
        errors:{
            empty:{
                activate:errors?.empty != undefined
            }
        }
    })

    const tempAtom: WritableAtom<autocompleteType, [optionsType | null | [null]], void> = atom(
        (get) => get(store),
        (get, set, args) => {
            if(Array.isArray(args)){
                set(store, get(tempAtom).onReset())
            } else {
                set(store, get(tempAtom).onChange(args))
            }

            over(get, set, args)

        }
    )

    return [store, tempAtom]
}

export interface propsTypes {
    listOptions:optionsType[],
    atom:WritableAtom<autocompleteType, [optionsType | null], void>,
    sx?:CSSProperties
}

export const [,testAtom] = makeAutocompletedAtom("testAtom")
export const [,testNoEmptyAtom] = makeAutocompletedAtom("testAtom", {empty:true})

export const testOptions = [
    {recordId:'1', label:'Value 1', id:"1"},
    {recordId:'2', label:'Value 2', id:"2", startImg:'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/feu.png'},
    {recordId:'3', label:'Value 3', id:"3", endImg:"https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/feu.png"}
]
