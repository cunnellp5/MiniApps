<script lang="ts">
  import { base } from '$app/paths';
  import { page } from '$app/stores'
</script>

<nav class="center-nav">
  <a 
    class="hover-line" 
    class:active="{$page.url.pathname.endsWith(`/`)}" 
    href="{base}/">
    Home
  </a>
  <a 
    class="hover-line"
    class:active="{$page.url.pathname.endsWith(`/scores`)}"
    href="{base}/scores">
    Scores
  </a>
  <a 
    class="hover-line"
    class:active="{$page.url.pathname.endsWith(`/posts`)}"
    href="{base}/posts">
    Posts
  </a>
  <a 
    class="hover-line"
    class:active="{$page.url.pathname.endsWith(`/todo`)}"
    href="{base}/todo">
    Todos
  </a>
  <a 
    class="hover-line"
    class:active="{$page.url.pathname.endsWith(`/reddit`)}"
    href="{base}/r">
    Reddit
  </a>
</nav>
  
<main class="center-main">
  <slot />
</main>

<footer>
  <a class="footer-link hover-line" href="https://philcunnell.dev">philcunnell.dev</a>
</footer>

<style>
  .center-nav {
    margin: 0 auto;
    max-width: 800px;
    padding: 1rem;
  }

  .center-main {
    margin: 0 auto;
    max-width: 800px;
    padding: 1rem;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  nav {
    position: relative;
    height: 50px;
    background-color: #6e6e6e;
    font-size: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  nav a{
    font-size: 16px;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    position: relative;
    z-index: 1;
    display: inline-block;
    text-align: center;
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

  .footer-link {
    color: white;
    text-decoration: none;
  }

  .footer-link:hover {
    color: #449f97;
  }

  a.active {
    color: #449f97;
  }
  a.active::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background-color: #449f97;
    transition: all .6s ease 0s;
    transition: width .3;
    width: 100%;
    transition: width .34s;
  }

  footer {
    display: flex;
    margin: 0 auto;
    max-width: 800px;
    padding: 1rem;
    text-align: center;
    background-color: #6e6e6e;
    color: white;
  }

  @media (max-width: 800px) {
    nav {
      flex-direction: column;
      align-items: flex-start;
      height: auto;
    }

    nav a {
      margin: 0.5rem 0;
    }
  }
</style>