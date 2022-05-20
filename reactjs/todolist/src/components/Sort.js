function Sort() {
  return (
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
  );
}
export default Sort;
