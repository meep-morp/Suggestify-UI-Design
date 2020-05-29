import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useParams, useHistory } from 'react-router-dom';

const UpdateForm = props => {
    const [profile, setProfile] = useState({name: '', username: '', password: ''});
    const { id } = useParams();
    const { push } = useHistory();

    useEffect(() => {
        axiosWithAuth()
            .get(`api/auth/${localStorage.getItem('User Id')}`)
            .then(res => {
                console.log(res.data)
                setProfile(res.data)
            })
    }, [id])

    console.log(profile);
    
    const handleChange = e => {
        e.persist();
        setProfile({
            ...profile,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        const newProfile = {
            name: profile.name,
            username: profile.username
        }
        axiosWithAuth()
            .patch(`api/auth/${localStorage.getItem('User Id')}`, newProfile)
            .then(res => {
                console.log(res)
                push(`/dashboard/profile/${localStorage.getItem('User Id')}`)
            })
    }

    return(
        <div>
            <h2>Update Profile</h2>
            <form className="form">
                <div className="name">
                    <input type="text"
                    className="username"
                        name="name"
                        placeholder="Update Name"
                        onChange={handleChange}
                        value={profile.name} />
                </div>

                <input type="text"
                    name="username"
                    placeholder="Update Username"
                    onChange={handleChange}
                    value={profile.username} />

                <button className="button" onClick={handleSubmit}>UPDATE</button>
            </form>
        </div>
    )
}
export default UpdateForm;