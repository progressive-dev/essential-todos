import React,  {useEffect} from 'react'
import { DropDown } from '../../components/boxes/DropDown';
import Multiselect from "../../components/boxes/MultiSelect";
import * as itemsActions from '../../application/actions/collection';
import * as permitActions from '../../application/actions/permitActions';

export default (props)=> {
    
    const {dispatch,
        permit,
        authorities,
        contextOptions,
        contexts,
        register,
        handleSubmit,
        setValue,
        getValues,
        control }= props;
    
    const onSubmit = data => {
        dispatch(itemsActions.save({data:data, items:'permits'}));
    }

    const onSplit = data => {
        dispatch(permitActions.split(data));
    }

    const onSplitAndSave = data =>{
        dispatch(permitActions.splitAndSave(data));
    }

    useEffect(()=>{
        if(permit!==null)
        {
            //use this:
            // reset(permit);
            //or this, but not both!!
            setValue('description', permit.description,  )
            setValue('contexts', contexts.map(p=>p.value))         
            setValue('authorityId', permit.authorityId)      
            setValue('subject', permit.subject)  
            setValue('projectId',permit.projectId) 
            setValue('permitId',permit.id)
            setValue('rawContent', permit.rawContent)
        };
    },[setValue,permit, contexts]);


    return(<>
        <form id="form" onSubmit={handleSubmit(onSubmit)} className="m-1" >
            <div className="form-row">
                <div className="form-group col-md-12">
                    <label>Title:  </label>
                    <textarea
                        placeholder="Enter name"
                        rows='3'
                        className="form-control input-sm"
                        name="description"
                        {...register("description")} 
                    />
                </div>
                </div>
                <div className="form-row row">
                    <div className="form-group col-md-4">
                        <label>Subject:  </label>
                        <input
                            placeholder="Enter name"
                            type='text'
                            className="form-control input-sm"
                            name="subject"
                            {...register("subject")} 
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <label>Authority:  </label>
                        <DropDown
                            register= {register}
                            _name="authorityId"
                            name="authorityId"
                            value={permit.authorityId}
                            collection={authorities}
                        />
                    </div>
                </div>
                <div className="form-row row">
                    <div className="form-group col-md-6">
                            <Multiselect
                                name={"contexts"}
                                label={"Context(s):"}
                                control={control}
                                values={contextOptions.map(p=>p.value)}
                            />
                    </div>
                </div>
                <div className="form-row row">
                <div className="form-group col-md-12">
                    <label>Source:  </label>
                    <textarea
                        placeholder="Enter source"
                        rows='15'
                        className="form-control input-sm"
                        name="rawContent"
                        {...register("rawContent")} 
                    />
                </div>
                </div>
                <div className="form-row row">
                    <div className="col-xs-3 btn-lg pull-right">
                        <input className="btn btn-primary" value="Save" type="submit" />
                        <input 
                            type="button" value="Split" className="btn btn-primary m-1"
                            onClick={() => {
                                const values = getValues();
                                onSplit(values);
                            }}
                        />
                        <input 
                            type="button" value="Split and Save" className="btn btn-primary"
                            onClick={() => {
                                const values = getValues(); 
                                onSplitAndSave(values);
                            }}
                        />
                    </div>
                </div>

        </form>
    </>)

}
