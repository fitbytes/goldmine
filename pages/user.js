import { getSession, signOut } from 'next-auth/react';
//import Fitbit from '../components/Fitbit';
import dynamic from 'next/dynamic';
const Fitbit=dynamic(()=>import("../components/Fitbit"),{ssr:false})
// gets a prop from getServerSideProps
function User({ user }) {
    return (
        <div>
            <h4>User session:</h4>
            <h3 style={{color:"tomato"}}>{user.address}</h3>
            <hr></hr>
            <Fitbit></Fitbit>
            
            <button onClick={() => signOut({ redirect: '/signin' })}>Sign out</button>
        </div>
    );
}


export async function getServerSideProps(context) {

    const session = await getSession(context);
    
    // redirect if not authenticated
    if (!session) {
        return {
            redirect: {
                destination: '/signin',
                permanent: false,
            },
        };
    }

    return {
        props: { user: session.user },
    };
}

export default User;