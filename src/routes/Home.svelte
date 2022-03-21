<script lang="ts">
  import Contacts from "../components/Contacts.svelte";
  import Mission from "../components/Mission.svelte";
  import Team from "../components/Team.svelte";

  // import events from "../resources/events.json";
  // import press from "../resources/press.json";
  // import { getUpcomingAndPastEvents } from "../utils";

  // const { upcomingEvents, pastEvents } = getUpcomingAndPastEvents(events);
</script>

<!-- TODO unfoinished, cleanup -->

<Mission />
<Team />
<Contacts />
<!-- <h2>Upcoming events</h2>
<ul>
  {#each upcomingEvents as { date, title, link, comment }}
    <li>
      {date}
      <a href={link}>
        {title}
      </a>
      {#if comment}
        {comment}
      {/if}
    </li>
  {/each}
</ul>
<h2>Past events</h2>
<ul>
  {#each pastEvents as { date, title, link, comment }}
    <li>
      {date}
      <a href={link}>
        {title}
      </a>
      {#if comment}
        {comment}
      {/if}
    </li>
  {/each}
</ul>
<h2>Press and media</h2>
<ul>
  {#each press as { date, text, link, comment }}
    <li>
      {date}
      <a href={link}>
        {text}
      </a>
      {#if comment}
        {comment}
      {/if}
    </li>
  {/each}
</ul> -->
