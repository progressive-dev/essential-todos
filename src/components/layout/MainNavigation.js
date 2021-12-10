import React  from 'react';
import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';


function MainNavigation(){
return <header className={classes.header}>
    <div>---</div>
    <nav>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/Projects'>Projects</Link>
            </li>
            <li>
                <Link to='/Companies'>Companies</Link>
            </li>
            <li>
                <Link to='/Publications'>Publications</Link>
            </li>
            <li>
                <Link to='/Installations'>Installations</Link>
            </li>
        </ul>
    </nav>
</header>

}

export default MainNavigation;
