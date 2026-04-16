import Reac, { createContext, useEffect, useState } from 'react';

export const FriendsContext = createContext();

const FriendsProvider = ({ children }) => {

    const [loading, setLoading]= useState('true')
    const [friends, setFriends] = useState([])

    useEffect(()=>{
        fetch('/friendsData.json')
        .then(res => res.json())
        .then(data => {
            setFriends(data);
            setLoading(false);
        });
    }, []);

    const data = {
        loading,
        setLoading,
        friends,
        setFriends
    }

    return (
        <FriendsContext.Provider value={data}>
            {children}
        </FriendsContext.Provider>
    );
};

export default FriendsProvider;