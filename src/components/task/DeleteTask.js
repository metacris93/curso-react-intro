import "./Card.css"
import { ReactComponent as DeleteSvg } from "./delete.svg";

function DeleteTask() {
    return (
        <span className="card__item--close">
            <DeleteSvg />
        </span>
    );
}
export { DeleteTask }
