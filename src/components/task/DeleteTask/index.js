import "../../../shared/styles/Card.css"
import { ReactComponent as DeleteSvg } from "../../../shared/assets/delete.svg";

function DeleteTask() {
    return (
        <span className="card__item--close">
            <DeleteSvg />
        </span>
    );
}
export { DeleteTask }
