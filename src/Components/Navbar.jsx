import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from '../assets/logo-no-background.svg';
import CreatePost from './CreatePost';
import '../App.css';

function Navbar({ showModal, toggleModal, sortPosts, allPosts, setSearchResultsProp }) {
    const navbarRef = useRef(null);
    const [color, setColor] = useState('#F4FAFC'); // Default color
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = (event) => {
        setColor(event.target.value);
    };

    function isColorDark(color) {
        const hex = color.replace('#', '');
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);
        return (r * 0.299 + g * 0.587 + b * 0.114) < 160;
    }

    const handleSearch = (event) => {
        event.preventDefault();
        const searchResult = allPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()));
        setSearchResultsProp(searchResult);
      };

    useEffect(() => {
        if (navbarRef.current) {
            navbarRef.current.style.setProperty('background-color', color, 'important');
            navbarRef.current.style.color = isColorDark(color) ? 'white' : 'black';
        }
    }, [color]);

    return (
        <div>
            <nav ref={navbarRef} className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top me-2"></img>
                        Meow
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>

                            {/* Sorting */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sorting
                                </a>
                                <ul className="dropdown-menu dropdown-menu-center">
                                    <li><button className="dropdown-item" onClick={() => sortPosts('createdTime')}>Latest</button></li>
                                    <li><button className="dropdown-item" onClick={() => sortPosts('upvoteCount')}>Popular (Upvotes)</button></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex mx-auto" role="search" onSubmit={handleSearch}>
                            <input className="form-control me-2" type="search" placeholder="Search Posts by Title" aria-label="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}></input>
                            <button className="btn btn-outline-info me-md-2" type="submit">Search</button>
                            <button className="btn btn-outline-success" type="button" onClick={toggleModal}>Create</button>
                        </form>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Profile</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Settings
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><a className="dropdown-item custom-color disabled" aria-disabled="true">Change Interface Color</a></li>
                                    <li>
                                        <input type="color" className="dropdown-item form-control form-control-color" id="exampleColorInput" value={color} onChange={handleChange} title="Choose your color"/>
                                    </li>
                                    <li><hr className="dropdown-divider"></hr></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
