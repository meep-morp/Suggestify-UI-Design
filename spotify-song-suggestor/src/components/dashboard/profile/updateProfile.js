import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useParams, useHistory } from 'react-router-dom';

const UpdateForm = props => {
    const [profile, setProfile] = useState();
    const { id } = useParams();
    const { push } = useHistory();

    useEffect(() => {
        axiosWithAuth()
            .get(`api/auth/${id}`)
            .then(res => {
                setProfile(res.data)
            })
    }, [id])

    const handleChange = e => {
        e.persist();
        setProfile({
            ...profile,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .put(`api/auth/${id}`, profile)
            .then(res => {
                console.log(res)
                push('/dashboard/profile/:id')
            })
    }

    return(
        <div>
            <h2>Update Profile</h2>
            <form>
                <div className="name">
                    <input type="text"
                        name="first_name"
                        placeholder="Update First Name"
                        onChange={handleChange}
                        value={profile.first_name} />

                    <input type="text"
                        name="last_name"
                        placeholder="Update Last Name"
                        onChange={handleChange}
                        value={profile.last_name} />
                </div>

                <input type="text"
                    name="username"
                    placeholder="Update Username"
                    onChange={handleChange}
                    value={profile.username} />

                <input type="password"
                    name="password"
                    placeholder="Update Password"
                    onChange={handleChange}
                    value={profile.password} />
                <button onClick={handleSubmit}>UPDATE PROFILE</button>
            </form>
        </div>
    )
}
export default UpdateForm;