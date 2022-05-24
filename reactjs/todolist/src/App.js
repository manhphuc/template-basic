// Import Modules
import React, { useState } from 'react';
import Title from './components/Title'
import Control from './components/Control'
import Form from './components/Form'
import List from './components/List'
import { filter, includes, orderBy as fnOrderBy, remove as fnRemove, reject } from 'lodash'
import { v4 as uuidv4 } from 'uuid';

import items from './mocks/tasks'

function App() {

  const [ taskListOrigin, setTaskListOrigin ] = useState( [...items] );
  const [ isShowForm, setIsShowForm ]         = useState( false );
  const [ strSearch, setStrSearch ]           = useState( '' );

  // Sort
  const [ orderBy, setOrderBy ]               = useState( 'name' );
  const [ orderDir, setOrderDir ]             = useState( 'desc' );

  // Edit
  const [ itemSelected, setItemSelected ]     = useState( null );

  let taskList = [];

  /*
  * Using lodash lib for search filter by name
  * Search
  * */
  taskList = filter( taskListOrigin, ( item ) => {
    return includes( item.name.toLowerCase(), strSearch.toLowerCase() );
  } );

  /*
  * Using lodash lib for sort
  * Sort
  * */
  taskList = fnOrderBy( taskList, [ orderBy ], [ orderDir ] );

  /*
  * MARK: Handle function delete one item clicked using lodash lib
  * */
  const handleDelete = ( id ) => {
    fnRemove( taskListOrigin, ( item ) => {
      return item.id === id;
    } );
    setTaskListOrigin( [...taskListOrigin] );
  }

  const handleToggleForm = () => {
    setIsShowForm( prevState => !prevState );
    setItemSelected( null );
  }

  const handleSearch = ( value ) => {
    setStrSearch( value );
  }

  const handleSort = ( orderBy, orderDir ) => {
    setOrderBy( orderBy );
    setOrderDir( orderDir );
  }

  const handleSubmit = ( item ) => {
    console.log( item )
    let items = taskListOrigin;
    let id    = null;
    if( item.id !== '' ) { // EDIT
      items = reject( items, { id: item.id } );
      id = item.id;
    } else { // ADD
      id = uuidv4();
    }
    items.push( {
      id    : id,
      name  : item.name,
      level : +item.level,
    } );
    setTaskListOrigin( [...items] );
    setIsShowForm( false );
  }

  const handleEdit = ( item ) => {
    setItemSelected( item );
    setIsShowForm( true );
  }

  const closeForm = () => {
    setIsShowForm( false );
  }

  let elmForm = null;
  if( isShowForm === true ) {
    elmForm = <Form
        onClickCancel = { () => closeForm() }
        onClickSubmit = { handleSubmit }
        itemSelected  = { itemSelected }
    />;
  }

  return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card card-default todolistAction mt-3">
              <div className="card-body">
                {/* TITLE : START */}
                <Title />
                {/* TITLE : END */}

                {/* CONTROL (SEARCH + SORT + ADD) : START */}
                <Control
                    handleAddClick  = { () => handleToggleForm() }
                    isShowForm      = { isShowForm }
                    strSearch       = { strSearch }
                    onClickSearchGo = { handleSearch }
                    orderBy         = { orderBy }
                    orderDir        = { orderDir }
                    onClickSort     = { handleSort }
                />
                {/* CONTROL (SEARCH + SORT + ADD) : END */}

                {/* FORM : START */}
                { elmForm }
                {/* FORM : END */}
              </div>
            </div>
            {/* List */}
            <List
                items         = { taskList }
                onClickDelete = { handleDelete }
                onClickEdit   = { handleEdit }
            />
            {/* END List */}
          </div>
        </div>
      </div>
  );
}
export default App;
