import React from 'react';

const NavBar = (props) => {

  const url =`https://www.youtube.com/results?search_query=${props.term}`

    return(
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href={url}>{props.name}</a>
            </div>
          </div>
        </nav>

    )
}

export default NavBar;