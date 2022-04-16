import Layout from "components/Layout";
import ResourceForm from "components/ResourceForm"
import axios from "axios";



const ResourceEdit = ({resource}) =>{

    const updateResource = (formData) =>{
        axios.patch("/api/resources", formData)
            .then(_ => alert("Update successfull"))
            .catch(err => alert(err?.response?.data))
    }
    return(
        <Layout>
            <div className="container">
                <div className="columns">
                    <div className="column is-8 is-offset-2">
                        {resource.title}
                        <ResourceForm
                            initialData={resource}
                            onFormSubmit={updateResource}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps({params}){
    const dataRes = await fetch(`${process.env.API_URL}/resources/${params.resource}`);
    const data = await dataRes.json()
    return{
        props:{
        resource :data
        }
    }
}

export default ResourceEdit;