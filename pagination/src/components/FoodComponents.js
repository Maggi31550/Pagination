const FoodComponent = ({name,image_url})=>{
    return (
        <div className="col-sm-4">
            <div className="card">
                <div className="thumbnail">
                    <img src={image_url} alt={name}/>
                </div>
                <div className="card-body">
                    <p className="mb-0">{name}</p>
                </div>
            </div>
        </div>
        
    )
}
export default FoodComponent