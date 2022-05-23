import { useState } from "react";

const globalStyle = {
  margin: 0,
  padding: 0,
  marginTop: 5,
};

const Form = ( { onClickCancel, onClickSubmit } ) => {

  const [ taskID, setTaskID ]       = useState( '' );
  const [ taskName, setTaskName ]   = useState( '' );
  const [ taskLevel, setTaskLevel ] = useState( 0 );

  const handleCancel = () => {
    onClickCancel();
  }

  const handleChange = event => {
    //const target = event.target;
    //const value  = target.type === 'checkbox' ? target.checked : target.value;
    //const name   = target.name;
    setTaskName( event.target.value );
  }

  const handleChangeSelectBox = event => {
    setTaskLevel( event.target.value );
  }

  const handleSubmit = ( event ) => {
    let item = {
      id    : taskID,
      name  : taskName,
      level : taskLevel,
    };
    onClickSubmit( item );
    event.preventDefault();
  }

  return (
    <div className="row">
      <div className="col-12 mt-1">
        <form onSubmit = { handleSubmit } >

          <div className="form-group form-control-sm" style={globalStyle}>
            <label className="sr-only">label</label>
            <input name="taskName" value = { taskName } onChange = { (e) => handleChange(e) } type="text" className="form-control form-control-sm" placeholder="Task Name..." />
          </div>

          <div className="form-group form-control-sm" style={globalStyle}>
            <label className="sr-only" htmlFor="true">label</label>
            <select name="taskLevel" value = { taskLevel } onChange = { (e) => handleChangeSelectBox(e) } className="form-control form-control-sm" required>
              {/* react-text: 66 */}
              Small
              {/* /react-text */}
              <option value={0}>Small</option>
              <option value={1}>Medium</option>
              <option value={2}>High</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary btn-dark btn-sm mt-2 btn-block">Submit</button>
          <button onClick={ () => handleCancel() } type="button" className="btn btn-default btn-secondary btn-sm mt-2 btn-block">Cancel</button>
        </form>
      </div>
    </div>
  );
}
export default Form;