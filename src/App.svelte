<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import Blog from "./routes/Blog.svelte";
  import Menu from "./components/Menu.svelte";

  export let url = "";
</script>

<main>
  <Router {url}>
    <Link to="/">
      <img
        src="/images/logo.png"
        width="128"
        height="128"
        alt="Free Russia NL logo"
      />
      <h1>Free Russia NL</h1>
    </Link>
    <Menu />
    <div>
      <!-- TODO will we need this blog/:id? -->
      <!-- <Route path="blog/:id" component="{BlogPost}" /> -->
      <Route path="blog" component={Blog} />
      <Route path="/"><Home /></Route>
    </div>
  </Router>
</main>

<style>
</style>
