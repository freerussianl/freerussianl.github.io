<script lang="ts">
  import { Link } from "svelte-routing";
  import { getLinkProps } from "../utils";

  export let hash = "";
  export let text = "";
</script>

<Link getProps={getLinkProps} to={hash}>{text}</Link>
