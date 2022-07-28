import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './AllPosts.css'
import { MdGroupAdd } from "react-icons/md";


const AllPosts = () => {
    const [key, setKey] = useState('home');
    return (
        <div className='container d-flex justify-content-between'>
            <div>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                >
                    <Tab eventKey="home" title="All Posts(32)">

                    </Tab>
                    <Tab eventKey="Article" title="Article">

                    </Tab>
                    <Tab eventKey="Event" title="Event">

                    </Tab>
                    <Tab eventKey="Education" title="Education">

                    </Tab>
                    <Tab eventKey="Job" title="Job">

                    </Tab>
                </Tabs>
            </div>
            <div className='post-add d-flex'>
                <div class="dropdown">
                    <button class="btn dropdown-toggle write-post-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Write a Post
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                <button className='btn btn-primary ms-3 join-btn'><MdGroupAdd/> Join Group</button>
            </div>
           
        </div>
    );
};

export default AllPosts;