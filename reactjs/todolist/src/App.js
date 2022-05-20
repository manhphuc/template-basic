// Import Modules
import React, { useState } from 'react';
import Title from './components/Title'
import Control from './components/Control'
import Form from './components/Form'
import List from './components/List'

import items from './mocks/tasks'

function App() {

  const [ taskList, setTaskList ]     = useState( items );
  const [ isShowForm, setIsShowForm ] = useState( false );
  const [ strSearch, setStrSearch ]   = useState( '' );

  // const handleAddTask = ( task ) => {
  //   // Add task
  //   setTaskList( [ ...taskList, task ] );
  // }

  const handleToggleForm = () => {
    setIsShowForm( prevState => !prevState );
  }

  const closeForm = () => {
    setIsShowForm( false );
  }

  let elmForm = null;
  if( isShowForm === true ) {
    elmForm = <Form onClickCancel = { () => closeForm() } />;
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
                <Control handleAddClick = { () => handleToggleForm() } isShowForm = { isShowForm } strSearch = { strSearch } />
                {/* CONTROL (SEARCH + SORT + ADD) : END */}

                {/* FORM : START */}
                { elmForm }
                {/* FORM : END */}
              </div>
            </div>
            {/* List */}
            <List items = { taskList } />
            {/* END List */}
          </div>
        </div>
      </div>
  );
}
export default App;
