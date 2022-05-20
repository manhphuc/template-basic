import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

const faPenElement    = <FontAwesomeIcon icon={ faPen } />
const faTrashElement  = <FontAwesomeIcon icon={ faTrash } />

const Item = ( props ) => {

    const item = props.item;

    const setElmLvl = ( lvl ) => {
        let elmLvl = null;
        switch ( lvl ) {
            case 1:
                elmLvl = <span className="badge badge-dark badge-medium">Medium</span>;
                break
            case 2:
                elmLvl = <span className="badge badge-danger badge-medium">High</span>;
                break
            default:
                elmLvl = <span className="badge badge-primary badge-medium">Small</span>;
                break
        }
        return elmLvl;
    }

    return (
        <tr>
            <td>{ props.index + 1 }</td>
            <td className="text-left td-content"><a>{item.name}</a></td>
            <td>{ setElmLvl( item.level ) }</td>
            <td width={30} >
                <a href="#" className="btn btn-info btn-sm rounded-circle yivic-btnSM">{ faPenElement }</a>
                <a href="#" className="btn btn-danger btn-sm rounded-circle yivic-btnSM">{ faTrashElement }</a>
            </td>
        </tr>
    );
}
export default Item;
