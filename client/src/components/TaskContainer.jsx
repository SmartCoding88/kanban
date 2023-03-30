import { Link } from "react-router-dom";

const TaskContainer = () => {
  return (
    <div className="container">

        <div className="pending__wrapper">
            <div className="pending__items">
                <p>Debug the notifiction center</p>
                <p className="comment">
                    <Link to="/comments">2 Comments</Link>
                </p>
            </div>
        </div>

        <div className="ongoing__wrapper">
            <div className="ongoing__items">
                <p>Ongoing Tasks</p>
                <p className="comment">
                    <Link to="/comments">2 comments</Link>
                </p>
            </div>
        </div>

        <div className="completed__wrapper">
            <div className="completed__items">
                <p>Completed Tasks</p>
                <p className="comment">
                    <Link to="/comments">2 comments</Link>
                </p>
            </div>
        </div>


    </div>
  )
}

export default TaskContainer