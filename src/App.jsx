import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

const users = [
    {
        userName: 'oocalfremontes',
        name:'alf⭐️⭐️⭐️',
        isFollowing: true 
    },
    {
        userName: 'LuquitaRodrigue',
        name:'Juaen ⭐️⭐️⭐️',
        isFollowing: true 
    },
    {
        userName: 'gbeder',
        name:'Germán Beder',
        isFollowing: true 
    },
]
export function App() {
  return (
    <section className='App'>
    {
        users.map(user => {
            const {userName, name, isFollowing } = user
            return(
                <TwitterFollowCard
                key={userName}
                userName={userName}
                initialIsFollwing={isFollowing}
                >
                {name}    
                </TwitterFollowCard>
            )
        })
    }
    </section>
  );
}
