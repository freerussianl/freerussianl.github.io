<script lang="ts">
  import { Link } from "svelte-routing";
  import LinkToHash from "./LinkToHash.svelte";
</script>

<!-- TODO i don't like that link to the blog is in the middle -->

<nav>
  <ul>
    <li><LinkToHash hash="#mission" text="Наша миссия" /></li>
    <li><LinkToHash hash="#team" text="Кто за нами стоит" /></li>
    <li><Link to="blog">Блог и анонсы</Link></li>
    <li><LinkToHash hash="#contacts" text="Контакты" /></li>
  </ul>
</nav>
