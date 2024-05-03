import UserDisplay from './components/userDisplay'
import {useQuery} from "urql";
import {GetUsersDocument} from "./graphql/generated";

function App() {
    const [results] = useQuery({
        query: GetUsersDocument,
    });
console.log('results', results);
    return (
        <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-scroll">
            {results.data?.users.map((user, userIndex) => <UserDisplay user={user} key={userIndex}/>)}
        </div>    )
}

export default App
