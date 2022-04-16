import {useState} from "react";

const DEFAULT_VALUE = {
    title: "",
    description: "",
    link: "",
    priority: "2",
    timeToFinish: "60"
}
const ResourceForm = ({onFormSubmit, initialData}) =>{
    const [form, setForm] = useState(initialData || DEFAULT_VALUE)

    const resetForm = () =>{
        setForm(DEFAULT_VALUE)
    }

    const handleChanges = (e) =>{
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        
        })
    }

    const submitForm = () =>{
        onFormSubmit(form)
    }

    
    return(
        <div className="resource-form">
            <h1 className="title">Add new resource</h1>
            <form>
                <div className="field">
                    <label className="label">Title</label>
                    <div className="control">

                        <input 
                        value={form.title}
                        onChange = {handleChanges}
                        name="title"
                        className="input" type="text" placeholder="e.g Learn Next js and sanity" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Description</label>
                    <div className="control">
                        <textarea 
                        value={form.description}
                        onChange = {handleChanges}
                        name="description" 
                        className="textarea" placeholder="e.g, Learn this technology because its very popular and seo responsive"></textarea>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Link</label>
                    <div className="control">
                        <input 
                        value={form.link}
                        onChange = {handleChanges}
                        name="link" 
                        className="input" type="text" placeholder=" e.g, http://cosmosacadeny.code" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Priority</label>
                    <div className="control">
                        <div className="select">
                        <select
                        onChange = {handleChanges}
                        name="priority" 
                        value={form.priority}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Time to finish</label>
                    <div className="control">
                        <input 
                        value={form.timeToFinish} 
                        onChange = {handleChanges}
                        name="timeToFinish"
                        className="input" type="text" placeholder="e.g, 60" />
                    </div>
                    <p className="help is-success">This is time in minutes</p>
                </div>
                <div className="field is-grouped">
                    <div className="control">
                        <button 
                        type="button"
                        onClick={ submitForm }
                        className="button is-link">Submit</button>
                    </div>
                <div className="control">
                    <button
                    type="button"
                    onClick={ resetForm }
                    className="button is-link is-light">Reset form</button>
                </div>
            </div>
            </form>
        </div>
    )
}

export default ResourceForm;