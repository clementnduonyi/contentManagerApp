

const ResourceLabel = ({status}) =>{
    return(
        <span className={`tag is-large ml-2 resource-${status}`}>
            {status}
        </span>
    )
}

export default ResourceLabel;