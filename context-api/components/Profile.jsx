import { useContext } from 'react'
import userContext from '../src/context/userContext'

function Profile() {
    const context = useContext(userContext);
    const user = context && context.user;
    console.log({context});

    if (!user) return <div>Please login</div>
    return <div> Welcome {user.username}</div>
}

export default Profile