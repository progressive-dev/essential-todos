import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";

import { DropDown } from '../../components/boxes/DropDown';
import * as itemsActions from '../../application/actions/collection';

export default (props)=>{

    const {module, watchFrequencies, dispatch, }= props;
    const {register, handleSubmit,setValue}= useForm({ mode: 'onBlur' });

    const onSubmit = d => {
        //dispatch(itemsActions.save({data:d, items:'modules'}));
        console.log(d)
    }

    useEffect(()=>{
        setValue('watchFrequencyId',module.watchFrequencyId);
        setValue('activeYear', module.activeYear);
        setValue('watchActive', module.watchActive );
        setValue('multiSites', module.multiSites );
    },[module])

return (<>
    
    <form id="form" onSubmit={handleSubmit(onSubmit)} className="p-3" >

        <div className="form-row row">        
            <div className="form-group col-md-4">
                <label>Watch Frequency:  </label>
                <DropDown
                    register= {register}
                    _name="watchFrequencyId"
                    name="watchFrequencyId"

                    collection={watchFrequencies}
                />
            </div>
        </div>

        <div className="form-row row">
            <div className="form-group col-md-4">
                <label>Active Year:  </label>
                <input
                    type="number" min="2019" max="2030" step="1"
                    className="form-control input-sm"
                    name="activeYear"
                    {...register("activeYear")} 
                />
            </div>

        </div>

        <div className="form-row row">
            <div className="form-group col-md-8">
                <input
                    {...register("watchActive")}
                    type="checkbox"
                    name="watchActive"
                    id="watchActive"
                />
                <label className="p-2" htmlFor="watchActive">Watch Active ?</label>
            </div> 
        </div>
        <div className="form-row row">  
            <div className="form-group col-md-4">
                <input
                    {...register("multiSites")}
                    type="checkbox"
                    
                    name="multiSites" 
                    id="multiSites"
                />
                <label className="p-2" htmlFor="multiSites">Multisites ?</label>
            </div>
        </div>
            
        <div className="form-row row">
            <div className="col-xs-3 btn-lg pull-right "  >
                <input className='btn btn-primary'
                    value='Save'
                    type='submit'
                />
                
            </div>
        </div>    
    </form>  
</>)
}
