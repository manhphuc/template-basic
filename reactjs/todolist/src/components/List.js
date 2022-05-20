// Import modules
import Item from './Item'

const List = ( props ) => {

  const items = props.items
  const elementItem = items.map( ( item, index ) => {
    return (
        <Item key = { index } item = { item } index = { index } />
    );
  } );

  return (
    <div className="card card-default yivicCard mt-3">
      <div className="card-header">
        <h3 className="card-title">List</h3>
      </div>
      <div className="card-body">
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
                { elementItem }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default List;
