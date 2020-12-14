<!-- commentsList.vue -->
<template>
<div>
		<Adminheader />
		<div id="wrapper">
			<Adminsidebar />
    <div class="container">
      <div class="container-fluid">
					<ol class="breadcrumb">
						<li class="breadcrumb-item">
							<a href="#">Dashboard</a>
						</li>
						<li class="breadcrumb-item active">comments</li>
					</ol>
    <div class="row">
    
    <p></p>
    <h1>Comments List</h1>
    
        <div class="col-md-10 col-md-offset-1">

            <div class="panel panel-default panel-table">
              <div class="panel-heading">
                <div class="row">
                  
                  <div class="col col-xs-6 text-right">
                    
                  </div>
                </div>
              </div>
              <div class="panel-body">
                <table class="table table-striped table-bordered table-list">
                  <thead>
                    <tr>
                        <th><em class="fa fa-cog"></em></th>
                        <th class="hidden-xs">ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        
                        <th>URL</th>
                    </tr> 
                  </thead>
                  <tbody>
                          <tr>
                            <td align="center">
                              <a class="btn btn-success"><em class="fas fa-check"></em></a>
                              <a class="btn btn-danger"><em class="fa fa-trash"></em></a>
                            </td>
                            <td class="hidden-xs">1</td>
                            <td>John Doe</td>
                            <td>johndoe@example.com</td>
                            
                            <td><a href="http://localhost:8080/commentslist">Visit</a></td>
                          </tr>
                          
                        </tbody>
                </table>
            
              </div>
              <div class="panel-footer">
                <div class="row">
                  <div class="col col-xs-4">Page 1 of 5
                  </div>
                  <div class="col col-xs-8">
                    <ul class="pagination hidden-xs pull-right">
                      <li><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li><a href="#">5</a></li>
                    </ul>
                    <ul class="pagination visible-xs pull-right">
                        <li><a href="#">«</a></li>
                        <li><a href="#">»</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

</div></div></div>
</div>
		</div>
    </div>

</template>

<script>
import Adminheader from "../components/Admin/Adminheader.vue";
import Adminsidebar from "../components/Admin/Adminsidebar.vue";

export default {
	components: {
		Adminheader,
		Adminsidebar,
		
  },
  created() {
		document.querySelector("body").style.backgroundColor = "#fff";
	}
};
  
</script>

<style scoped>


.btn {
    background-color: transparent;
    color: #FFF;
    margin-right: 2rem;
    height: 3.5rem;
    width: auto;
    font-size: 1.5rem;
    border-radius: 5px;
    margin-bottom: 5px;
}

.panel-table .panel-body{
  padding:0;
  margin-top: 40px;
}

.panel-table .panel-body .table-bordered{
  border-style: none;
  margin:0;
}

.panel-table .panel-body .table-bordered > thead > tr > th:first-of-type {
    text-align:center;
    width: 100px;
}

.panel-table .panel-body .table-bordered > thead > tr > th:last-of-type,
.panel-table .panel-body .table-bordered > tbody > tr > td:last-of-type {
  border-right: 0px;
}

.panel-table .panel-body .table-bordered > thead > tr > th:first-of-type,
.panel-table .panel-body .table-bordered > tbody > tr > td:first-of-type {
  border-left: 0px;
}

.panel-table .panel-body .table-bordered > tbody > tr:first-of-type > td{
  border-bottom: 0px;
}

.panel-table .panel-body .table-bordered > thead > tr:first-of-type > th{
  border-top: 0px;
}

.panel-table .panel-footer .pagination{
  margin:0; 
}

/*
used to vertically center elements, may need modification if you're not using default sizes.
*/
.panel-table .panel-footer .col{
 line-height: 34px;
 height: 34px;
}

.panel-table .panel-heading .col h3{
 line-height: 30px;
 height: 30px;
}

.panel-table .panel-body .table-bordered > tbody > tr > td{
  line-height: 34px;
}

/*
admin style dashboard css
*/

* {
  box-sizing: border-box;
  font-size: 12px;
  font-family: 'Montserrat', sans-serif;
}
html {
    position: relative;
    min-height: 100%;
  }
  
  body {
    height: 100%;
  font-size: 1.5rem !important;
  font-family: 'Montserrat', sans-serif;
}
a.nav-link.active {
    color: #fff !important;
}
  
  
  #wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  
  #wrapper #content-wrapper {
    overflow-x: hidden;
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 80px;
  }
  
  .scroll-to-top {
    position: fixed;
    right: 15px;
    bottom: 15px;
    display: none;
    width: 50px;
    height: 50px;
    text-align: center;
    color: #fff;
    background: rgba(52, 58, 64, 0.5);
    line-height: 46px;
  }
  
  .scroll-to-top:focus, .scroll-to-top:hover {
    color: white;
  }
  
  .scroll-to-top:hover {
    background: #343a40;
  }
  
  .scroll-to-top i {
    font-weight: 800;
  }
  
  .smaller {
    font-size: 1.7rem;
  }
  
  .o-hidden {
    overflow: hidden !important;
  }
  
  .z-0 {
    z-index: 0;
  }
  
  .z-1 {
    z-index: 1;
  }
  
  .navbar-nav .form-inline .input-group {
    width: 100%;
  }
  
  .navbar-nav .nav-item.active .nav-link {
    color: #fff;
  }
  
  .navbar-nav .nav-item.dropdown .dropdown-toggle::after {
    width: 1rem;
    text-align: center;
    float: right;
    vertical-align: 0;
    border: 0;
    font-weight: 900;
    content: '\f105';
    font-family: 'Montserrat', sans-serif;
  }
  
  .navbar-nav .nav-item.dropdown.show .dropdown-toggle::after {
    content: '\f107';
  }
  
  .navbar-nav .nav-item.dropdown.no-arrow .dropdown-toggle::after {
    display: none;
  }
  
  .navbar-nav .nav-item .nav-link:focus {
    outline: none;
  }
  
  .navbar-nav .nav-item .nav-link .badge {
    position: absolute;
    margin-left: 0.75rem;
    top: 0.3rem;
    font-weight: 400;
    font-size: 1.7rem;
  }
  
  @media (min-width: 768px) {
    .navbar-nav .form-inline .input-group {
      width: auto;
    }
  }
  
  .sidebar {
    width: 90px !important;
    background-color: #212529;
    min-height: calc(100vh - 56px);
  }
  
  .sidebar .nav-item:last-child {
    margin-bottom: 1rem;
  }
  
  .sidebar .nav-item .nav-link {
    text-align: center;
    padding: 0.75rem 1rem;
    width: 90px;
  }
  
  .sidebar .nav-item .nav-link span {
    font-size: 11px;
    display: block;
  }
  
  .sidebar .nav-item .dropdown-menu {
    position: absolute !important;
    -webkit-transform: none !important;
    transform: none !important;
    left: calc(90px + 0.5rem) !important;
    margin: 0;
  }
  
  .sidebar .nav-item .dropdown-menu.dropup {
    bottom: 0;
    top: auto !important;
  }
  
  .sidebar .nav-item.dropdown .dropdown-toggle::after {
    display: none;
  }
  
  .sidebar .nav-item .nav-link {
    color: rgba(255, 255, 255, 0.5);
  }
  
  .sidebar .nav-item .nav-link:active, .sidebar .nav-item .nav-link:focus, .sidebar .nav-item .nav-link:hover {
    color: rgba(255, 255, 255, 0.75);
  }
  
  .sidebar.toggled {
    width: 0 !important;
    overflow: hidden;
  }
  
  @media (min-width: 768px) {
    .sidebar {
      width: 225px !important;
    }
    .sidebar .nav-item .nav-link {
      display: block;
      width: 100%;
      text-align: left;
      padding: 1rem;
      width: 225px;
    }
    .sidebar .nav-item .nav-link span {
      font-size: 1rem;
      display: inline;
    }
    .sidebar .nav-item .dropdown-menu {
      position: static !important;
      margin: 0 1rem;
      top: 0;
    }
    .sidebar .nav-item.dropdown .dropdown-toggle::after {
      display: block;
    }
    .sidebar.toggled {
      overflow: visible;
      width: 90px !important;
    }
    .sidebar.toggled .nav-item:last-child {
      margin-bottom: 1rem;
    }
    .sidebar.toggled .nav-item .nav-link {
      text-align: center;
      padding: 0.75rem 1rem;
      width: 90px;
    }
    .sidebar.toggled .nav-item .nav-link span {
      font-size: 1rem;
      display: block;
    }
    .sidebar.toggled .nav-item .dropdown-menu {
      position: absolute !important;
      -webkit-transform: none !important;
      transform: none !important;
      left: calc(90px + 0.5rem) !important;
      margin: 0;
    }
    .sidebar.toggled .nav-item .dropdown-menu.dropup {
      bottom: 0;
      top: auto !important;
    }
    .sidebar.toggled .nav-item.dropdown .dropdown-toggle::after {
      display: none;
    }
  }
  
  .card-body-icon {
    position: absolute;
    z-index: 0;
    top: -1.25rem;
    right: -1rem;
    opacity: 0.4;
    font-size: 5rem;
    -webkit-transform: rotate(15deg);
    transform: rotate(15deg);
  }
  
  @media (min-width: 576px) {
    .card-columns {
      -webkit-column-count: 1;
      -moz-column-count: 1;
      column-count: 1;
    }
  }
  
  @media (min-width: 768px) {
    .card-columns {
      -webkit-column-count: 2;
      -moz-column-count: 2;
      column-count: 2;
    }
  }
  
  @media (min-width: 1200px) {
    .card-columns {
      -webkit-column-count: 2;
      -moz-column-count: 2;
      column-count: 2;
    }
  }
  
  :root {
    --input-padding-x: 0.75rem;
    --input-padding-y: 0.75rem;
  }
  
  .card-login {
    max-width: 25rem;
  }
  
  .card-register {
    max-width: 40rem;
  }
  
  .form-label-group {
    position: relative;
  }
  
  .form-label-group > input,
  .form-label-group > label {
    padding: var(--input-padding-y) var(--input-padding-x);
    height: auto;
  }
  
  .form-label-group > label {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    margin-bottom: 0;
    /* Override default `<label>` margin */
    line-height: 1.5;
    color: #495057;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    -webkit-transition: all 0.1s ease-in-out;
    transition: all 0.1s ease-in-out;
  }
  
  .form-label-group input::-webkit-input-placeholder {
    color: transparent;
  }
  
  .form-label-group input:-ms-input-placeholder {
    color: transparent;
  }
  
  .form-label-group input::-ms-input-placeholder {
    color: transparent;
  }
  
  .form-label-group input::-moz-placeholder {
    color: transparent;
  }
  
  .form-label-group input::placeholder {
    color: transparent;
  }
  
  .form-label-group input:not(:placeholder-shown) {
    padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
    padding-bottom: calc(var(--input-padding-y) / 3);
  }
  
  .form-label-group input:not(:placeholder-shown) ~ label {
    padding-top: calc(var(--input-padding-y) / 3);
    padding-bottom: calc(var(--input-padding-y) / 3);
    font-size: 12px;
    color: #777;
  }
  
  footer.sticky-footer {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: absolute;
    right: 0;
    bottom: 0;
    width: calc(100% - 90px);
    height: 80px;
    background-color: #e9ecef;
  }
  
  footer.sticky-footer .copyright {
    line-height: 1;
    font-size: 0.8rem;
  }
  
  @media (min-width: 768px) {
    footer.sticky-footer {
      width: calc(100% - 225px);
    }
  }
  
  body.sidebar-toggled footer.sticky-footer {
    width: 100%;
  }
  
  @media (min-width: 768px) {
    body.sidebar-toggled footer.sticky-footer {
      width: calc(100% - 90px);
    }
  }
</style>