import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
const faPenElement    = <FontAwesomeIcon icon={ faPen } />
const faTrashElement  = <FontAwesomeIcon icon={ faTrash } />

function App() {
  const globalStyle = {
    margin: 0,
    padding: 0,
    marginTop: 5,
  };
  return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="container">
              <div className="card card-default todolistAction mt-3">

                <div className="card-body">

                  {/* TITLE : START */}
                  <div className="page-header">
                    <h1>Project 01 - ToDo List <small>ReactJS</small></h1>
                  </div>
                  {/* TITLE : END */}

                  {/* CONTROL (SEARCH + SORT + ADD) : START */}
                  <div className="row">
                    <div className="col-12 mt-1">
                      <div className="input-group">
                        <input type="text" defaultValue className="form-control form-control-sm" placeholder="Search for..." />
                        <span className="input-group-btn">
                        <button className="btn btn-info btn-sm" style={{borderRadius: 0 + 'px'}} type="button">Go!</button>
                        <button className="btn btn-warning btn-sm" style={{borderRadius: 0 + 'px'}} type="button">Clear</button>
                      </span>
                      </div>
                    </div>
                    <div className="col-12 mt-1">
                      <div className="dropdown">
                        <button className="btn btn-sm btn-outline-dark dropdown-toggle mr-2" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true">
                          {/* react-text: 16 */}
                          Sort by
                          {/* /react-text */}
                          <span className="caret" />
                        </button>
                        <ul className="dropdown-menu drwCustom" aria-labelledby="dropdownMenu1">
                          <li><a role="button">Name ASC</a></li>
                          <li><a role="button">Name DESC</a></li>
                          <li role="separator" className="divider" />
                          <li><a role="button">Level ASC</a></li>
                          <li><a role="button">Level DESC</a></li>
                        </ul>
                        <span className="badge badge-primary badge-medium">name - asc</span>
                      </div>
                    </div>
                    <div className="col-12 mt-1 d-flex justify-content-end">
                      <button type="button"  className="btn btn-success btn-block btn-sm">Close Form</button>
                    </div>
                  </div>
                  {/* CONTROL (SEARCH + SORT + ADD) : END */}


                  {/* FORM : START */}
                  <div className="row">
                    <div className="col-12 mt-1">
                      <form >
                        <div className="form-group form-control-sm" style={globalStyle}>
                          <label className="sr-only" htmlFor="true">label</label>
                          <input type="text" defaultValue name="task_name" className="form-control form-control-sm" placeholder="Task Name" />
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
                        <button type="button" className="btn btn-default btn-dark btn-sm mt-2 btn-block">Cancel</button>
                      </form>
                    </div>
                  </div>
                  {/* FORM : END */}


                </div>

              </div>
            </div>

            {/* List */}
            <div className="card card-default yivicCard mt-3">
              <div className="card-header">
                <h3 className="card-title">List</h3>
              </div>
              <div className="card-body">
                <div className="container-fluid">
                  <div className="row align-items-center justify-content-between mb-2">

                  </div>
                </div>
                <div className="table-responsive">
                  <div id="yivicTableAjax_wrapper" className="dataTables_wrapper">
                    <table id="yivicTableAjax-ordering" className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th className="text-center">ID</th>
                          <th data-priority={2} className="text-left td-content">Name</th>
                          <th className="text-center">Modified</th>
                          <th className="text-center" width="30px">Action</th>
                        </tr>
                      </thead>
                      <tbody className="text-center">
                        <tr>

                          <td className>1</td>

                          <td className="text-left td-content">
                            <a className href>Chỉ số IQ bạn là bao nhiêu? bài test IQ này sẽ giúp bạn kiểm tra IQ chuẩn xác nhất</a>
                          </td>

                          <td>
                            <span className="label label-danger">High</span>
                          </td>

                          <td width={30}>
                            <a href="#" className="btn btn-info btn-sm rounded-circle yivic-btnSM">{ faPenElement }</a>
                            <a href="#" className="btn btn-danger btn-sm rounded-circle yivic-btnSM">{ faTrashElement }</a>
                          </td>

                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
  );
}

export default App;
