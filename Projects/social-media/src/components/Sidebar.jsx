const Sidebar = ({selectedTab , setSelectedTab}) => {
    return <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar-height  " style={{width: "280px"}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <span className="fs-4 text-secondary" >Sidebar</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto ">
      <li className="nav-item">
        <a href="#" className={`nav-link ${selectedTab === "Home" ? "active" : "link-body-emphasis text-secondary"} `} aria-current="page" onClick={() => setSelectedTab("Home")}>
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
          Home
        </a>
      </li>
      <li>
        <a href="#" className={` nav-link ${selectedTab === "Create Post" ? "active text-white" : "link-body-emphasis text-secondary"}`} onClick={() => setSelectedTab("Create Post")}>
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
          Create Post
        </a>
      </li>
      {/* <li>
        <a href="#" className="nav-link link-body-emphasis">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
          Orders
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-body-emphasis">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#grid"></use></svg>
          Products
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-body-emphasis">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
          Customers
        </a>
      </li> */}
    </ul>
    <hr/>
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong className="text-secondary">Mohin</strong>
      </a>
      <ul className="dropdown-menu text-small shadow">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
}

export default Sidebar