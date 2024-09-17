import "./landingPage.css";

import CommonHeader from "@/Components/Header";

const LandingPage = () => {
  return (
    <main>
    <header>
    <nav className="navbar">
        <div className="logo">
            <h1>Local Farm</h1>
        </div>
        <div className="search-filter">
            <input type="text" id="searchBox" placeholder="Search farm..."></input>
            <button id="filterButton">Search Local Farm</button>
            <div id="dropdown" className="dropdown-content"></div>
        </div>
        <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li className="dropdown">
                <a href="#" className="dropbtn">Menu</a>
                <div className="dropdown-content">
                    <a href="#">Appetizers</a>
                    <a href="#">Main Courses</a>
                    <a href="#">Desserts</a>
                </div>
            </li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
</header>

<div id="filterModal" className="modal">
    <div className="modal-content">
        <h2>Filter Farm Products</h2>
        <div className="first">
        <label htmlFor="rating">Rating:</label>
        <input type="number" id="rating" min="1" max="5" placeholder="1-5"></input>
        </div>
        <div className="first">
        <label htmlFor="veg">Type:</label>
        <select id="veg">
            <option value="">Any</option>
            <option value="veg">Fruits</option>
            <option value="non-veg">Vegetables</option>
        </select>
        </div>
        <div className="first">
        <label htmlFor="time">Category:</label>
        <input type="number" id="time" min="1" placeholder="fruits"></input>
        </div>
        <div className="first">
        <label htmlFor="difficulty">Price Range:</label>
        <select id="difficulty">
            <option value="">Any</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
        </select>
        </div>
        <button id="applyFilters">Apply Filters</button>
    </div>
</div>
</main>


  );
};

export default LandingPage;
