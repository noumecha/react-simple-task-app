import Task from "../../components/Task/Task";
import "./Backlog.css";
import useDataFetching from "../../hooks/useDataFetching";

function Backlog() {

    const [loading, error, tasks] = useDataFetching(`https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks`);

    return (
        <div className='Tasks-wrapper'>
            { loading || error ? (
                <span>
                    {error || 'Loading...'}
                </span>
            ) : (
                tasks.map((task) => (
                    <Task
                        key={task.id}
                        title={task.title}
                        body={task.body}
                    />
                ))
            )}
        </div>
    );
}

export default Backlog;