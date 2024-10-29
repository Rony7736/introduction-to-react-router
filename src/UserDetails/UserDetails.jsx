import { useLoaderData } from "react-router-dom";
import './UserDetails.css'


const UserDetails = () => {
    const user = useLoaderData()
    const {name, email, website, company} = user
    return (
        <div className="userDetails">
            <h2>Details About User: {name}</h2>
            <p>Email: {email}</p>
            <p>Website: {website}</p>
            <p>Company: {company.name}</p>
        </div>
    );
};

export default UserDetails;