import "./Card.css"
import "./Util.css"
import "./TaskItem.css"
function TaskItem(props) {
    return (
        <li className="my-1">
            <div className="card card__items--center">
                {/* <span>V { props.completed }</span> */}
                <p className="my-1">{ props.text }</p>
                {/* <span>X</span> */}
            </div>
        </li>
    );
}
export { TaskItem }
