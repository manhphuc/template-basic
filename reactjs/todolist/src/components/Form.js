const globalStyle = {
  margin: 0,
  padding: 0,
  marginTop: 5,
};

const Form = ( { onClickCancel } ) => {
  const handleCancel = () => {
    onClickCancel();
  }
  return (
    <div className="row">
      <div className="col-12 mt-1">
        <form >
          <div className="form-group form-control-sm" style={globalStyle}>
            <label className="sr-only">label</label>
            <input type="text" className="form-control form-control-sm" placeholder="Task Name..." />
          </div>
          <div className="form-group form-control-sm" style={globalStyle}>
            <label className="sr-only" htmlFor="true">label</label>
            <select name="task_level" className="form-control form-control-sm" required>
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