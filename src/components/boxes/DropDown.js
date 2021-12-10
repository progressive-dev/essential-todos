import React from 'react'

export const DropDown = (props) => {

    const {
        collection,
        placeholder,
        _name,
        register,
      
    } = props
    
    return (
        <select
                
                {...register(_name)}        
                
                className="form-control input-sm"
                placeholder={placeholder}
                
        >
            <option key={0} value={null}>
            </option>    
            {(collection === undefined?[]:collection).map((obj, i) => <option key={obj.id} value={obj.id} >{obj.description}</option>)}
            </select>
    )
}