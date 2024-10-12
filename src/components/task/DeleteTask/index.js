import "../../../shared/styles/Card.css"
import { ReactComponent as DeleteSvg } from "../../../shared/assets/delete.svg";

function DeleteTask({ onDelete }) {
    return (
        <span className="card__item--close" onClick={onDelete}>
            <DeleteSvg />
        </span>
    );
}
export { DeleteTask }
