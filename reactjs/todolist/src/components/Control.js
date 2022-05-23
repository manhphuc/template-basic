import Search from './Search'
import Sort from './Sort'

const Control = ( { handleAddClick, isShowForm, onClickSearchGo, orderBy, orderDir, onClickSort } ) => {
    const handleClickAddTask = () => {
        handleAddClick();
    }

    const handleClickGo = () => {
        onClickSearchGo();
    }

    let elmBtnAction = <button  onClick = { () => handleClickAddTask() } type="button"  className="btn btn-success btn-block btn-sm mt-1">Add Task</button>;
    if( isShowForm === true ) {
        elmBtnAction = <button  onClick = { () => handleClickAddTask() } type="button"  className="btn btn-danger btn-block btn-sm mt-1">Close Form</button>;
    }
    return (
        <div className="row">
            <Search onClickGo = { onClickSearchGo } />
            <Sort
                orderBy     = { orderBy }
                orderDir    = { orderDir }
                onClickSort = { onClickSort }
            />
            <div className="col-12">
                { elmBtnAction }
            </div>
        </div>
    );
}
export default Control;
