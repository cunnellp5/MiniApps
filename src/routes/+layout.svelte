<nav>
  <a class="hover-line" href="/">Home</a>
  <a class="hover-line" href="/scores">Scores</a>
  <a class="hover-line" href="/posts">Posts</a>
  <a class="hover-line" href="/todo">Todos</a>
  <a class="hover-line" href="/r">Reddit</a>
</nav>

<main>
  <slot />
</main>


<style>
  main {
    margin: 0 4rem;
  }

  nav {
    position: relative;
    height: 50px;
    background-color: #6e6e6e;
    font-size: 0;
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1);
  }

  nav a{
    font-size: 15px;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    position: relative;
    z-index: 1;
    display: inline-block;
    text-align: center;
    padding: 0 20px;
    line-height: 50px;
    
  }

  nav a:hover{
    color: #449f97;
  }

  .hover-line::after{
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background-color: #449f97;
    transition: all .6s ease 0s;
    transition: width .3;  
  }

  .hover-line:hover::after{
    width: 100%;
    transition: width .34s;
  }
</style>