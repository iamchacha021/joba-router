import { useLoaderData, Link } from "react-router-dom";

const Careers = () => {
    const careers = useLoaderData()
    return ( 
        <div className="careers">
            {careers.map((career)=>{
                return (
                    <Link to={career.id.toString()} key={career.id}>
                        <p>{career.title}</p>
                        <p>Based in {career.location}. </p>
                    </Link>
                )
            })}
        </div>
     );
}
 
export default Careers;


export const careersLoaders = async () =>{
    const res = await fetch('http://localhost:4000/careers')
    if(!res.ok){
        throw Error("Could not fetch the data you guy was trying to retrieve abeg!!!")
    }
    return res.json()
}