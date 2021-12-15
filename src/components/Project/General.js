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