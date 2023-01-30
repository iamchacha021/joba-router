import { useLoaderData, useParams} from "react-router-dom";

const CareerDetails = () => {
    const {id} = useParams()
    const career = useLoaderData()
    return ( 
        <div className="career-details">
            <h2>Career Details for {career.title}</h2>
            <p>Starting salary: {career.salary} </p>
            <p>Location: {career.location} </p>
            <div className="details">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia ab aperiam accusamus, exercitationem inventore dolorum veniam vel tenetur?</p>
                <p>Earum fugiat numquam nulla aut. Cum odio minus laboriosam minima. Ratione distinctio ducimus, nulla neque veniam soluta iusto.</p>
                <p>Natus sed quia laudantium vel error dicta architecto quam, cum deserunt sit ex, consequatur ea repellendus ipsum distinctio!</p>
            </div>
        </div>
     );
}
 
export default CareerDetails;

export const careerDetailsLoader = async ({params}) =>{
    const {id} = params

    const res = await fetch(`http://localhost:4000/careers/${id}`)
    if(!res.ok){
        throw Error("Could not fetch the data you guy was trying to retrieve abeg!!!")
    }
    return res.json()
}