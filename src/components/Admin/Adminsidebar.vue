<!-- Sidebar.vue -->
<template>
	<ul class="sidebar navbar-nav">
		<li class="nav-item">
            <router-link to="/admin" class="nav-link" exact>
            
                  <span>  <i class="fas fa-fw fa-tachometer-alt"></i> </span>
                
                <span>Dashboard</span>
            </router-link>
        </li>
		<li class="nav-item mt-5">
            <router-link to="/userslist" class="nav-link" exact>
                <i class="fas fa-users"></i>
                <span>Users</span>
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/articleslist" class="nav-link" exact>
                <i class="far fa-newspaper"></i>
                <span>Articles List</span>
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/commentslist" class="nav-link" exact>
                <i class="fas fa-comments"></i>
                <span>Comments List</span>
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/Login" class="nav-link" exact>
            <i class="fas fa-user-alt-slash"></i>
            <span>Logout</span>
            </router-link>
        </li>
	</ul>
    <router-link to="/Login"><button type="button" class="btn btn-light">Logout</button></router-link>
</template>

<script>

export default {
	components: {
		
	}
};
</script>
<style scoped>
body {
    height: 100%;
  font-family: 'Montserrat', sans-serif;
    font-weight: bold;
}

.fa, .fab, .fad, .fal, .far, .fas {
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
    margin-right: 5px;
}

</style>
