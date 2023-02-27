import {useState, useContext} from 'react'
import {AuthContext} from '../../context/authContext';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function UpdateProfile(){
    const {user, setUser} = useContext(AuthContext)
    const navigate = useNavigate()

    const formData = new FormData()

    const handleImage = (e) => {
        console.log(e.target.files)
        if(e.target && e.target.files[0]){
            formData.append('image', e.target.files[0], e.target.files[0].name);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
        const url = `http://localhost:5000/api/profilephoto-upload/${localStorage.getItem('id')}`
        try{
            axios.post(url, formData, {
                headers: {
                     'Content-Type': 'multipart/form-data' 
                },
            })
            .then(response => {
                // const {data} = response
                console.log(response.data)
                localStorage.setItem('public_id', response.data.image.public_id)
                localStorage.setItem('secure_url', response.data.image.secure_url)

                const tempUser = {...user}
                // console.log(tempUser)

                tempUser.profilePic = {
                    public_id: response.data.image.public_id,
                    secure_url: response.data.image.secure_url
                }

                setUser(tempUser)
                console.log(user)

                alert('Upload successful! Redirect back to home page.')
                navigate('/')
            })
        }catch(e){
            console.log(e.message)
        }
        
    }


    return(
        
            <div className="m-5 text-center">
                <div className="form-group">
                    <label>Upload image</label>
                    <input type="file" className="form-control-file form-control" onChange={(e) => handleImage(e)}/>
                    
                </div>
                <button className='btn btn-primary' onClick={(e) => handleSubmit(e)}>Submit</button>
            </div>
     
    )
}