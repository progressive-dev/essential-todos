import React from 'react'

import { DropDown } from '../../components/boxes/DropDown';
import * as itemsActions from '../../application/actions/collection';



export default  (props)=>{

const {
    register,
    project,
    handleSubmit, 
    dispatch

}=props

const onSubmit = d => {
    dispatch(itemsActions.save({data:d, items:'projects'}));
}

return(<>
    
    <form id="form" onSubmit={handleSubmit(onSubmit)} className="p-3" >
        <div className="form-row">
            <div className="form-group col-md-12">
                <label>Project name:  </label>
                <input
                    placeholder="Enter name"
                    type="text"
                    className="form-control input-sm"
                    name="name"
                    {...register("name")} 
                />
            </div>
        </div>

        <div className="form-row row" >
            <div className="form-group col-md-8">
                <label>Address:  </label>
                <input
                    placeholder="Enter address"
                    type="text"
                    className="form-control input-sm"
                    name="address"
                    {...register("address")} 
                /> 

            </div>
            </div>
        <div className="form-row row">
            <div className="form-group col-md-4">
                <label>Region:  </label>
                <DropDown
                    register= {register}
                    _name="regionId"
                    name="regionId"
                    collection={project.regions}
                />
            </div>
        

        
            <div className="form-group col-md-4">
                <label>Activity Area:  </label>
                <DropDown
                    register= {register}
                    _name="activityAreaId"
                    name="activityAreaId"
                    value={project.activityAreaId}
                    collection={project.activityAreas}
                />
            </div>
            <div className="form-group col-md-4">
                <label>Watch Frequency:  </label>
                <DropDown
                    register= {register}
                    _name="watchFrequencyId"
                    name="watchFrequencyId"
                    value={project.activityAreaId}
                    collection={project.watchFrequencies}
                />
            </div>
        </div>

        <div className="form-row row">
            <div className="form-group col-md-1">
                <label>Active Year:  </label>
                <input
                    type="number" min="2019" max="2030" step="1"
                    className="form-control input-sm"
                    name="activeYear"
                    {...register("activeYear")} 
                />
            </div>

        </div>

        
            <div className="form-group col-md-8">
                <input
                    {...register("watchActive")}
                    type="checkbox"
                    
                    name="watchActive"
                    id="watchActive"
                />
                <label className="p-2" htmlFor="watchActive">Watch Active ?</label>
            </div>
            <div className="form-group col-md-4">
                <input
                    {...register("multiSites")}
                    type="checkbox"
                    name="multiSites" 
                    id="multiSites"
                />
                <label className="p-2" htmlFor="multiSites">Multisites ?</label>
            </div>
        

        <div className="form-row row">
            <div className="form-group col-md-12">
                <label>Description:  </label>
                <textarea
                    className="form-control input-sm"
                    {...register("description")} 
                    rows="3"
                />
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