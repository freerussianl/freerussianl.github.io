<script lang="ts">
  import events from "./resources/events.json";
  import links from "./resources/links.json";
  import press from "./resources/press.json";

  const { upcomingEvents, pastEvents } = events.reduce(
    (acc, event) => {
      const today = new Date();
      const eventDate = new Date(event.date);

      if (
        today.getFullYear() <= eventDate.getFullYear() &&
        today.getMonth() <= eventDate.getMonth() &&
        today.getDate() <= eventDate.getDate()
      ) {
        return { ...acc, upcomingEvents: [...acc.upcomingEvents, event] };
      } else {
        return { ...acc, pastEvents: [...acc.pastEvents, event] };
      }
    },
    { upcomingEvents: [], pastEvents: [] }
  );
</script>

<main>
  <img
    src="/images/logo.png"
    width="128"
    height="128"
    alt="Free Russia NL logo"
  />
  <h1>Free Russia NL</h1>
  <h2>
    <a href="https://solidarity.support"
      >Support independent russian media and human rights defenders –
      https://solidarity.support</a
    >
  </h2>
  <h2>Upcoming events</h2>
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
  <h2>Petitions</h2>
  <ul>
    <li>
      Petition to the MPs of the Netherlands
      <ul style="margin-top: 0.5em">
        <li>
          <strong
            ><a
              href="https://www.petitie24.nl/petitie/3532/maak-europa-vrij-van-corruptiegeld-uit-rusland"
              >Dutch – sign here!</a
            ></strong
          >
        </li>
        <li><a href="/docs/petition_en.pdf">English</a></li>
        <li><a href="/docs/petition_ru.pdf">Russian</a></li>
      </ul>
    </li>
    <li>
      <a href="https://www.amnesty.nl/forms/petitie-navalny"
        >Rusland, laat oppositieleider Navalny onmiddellijk vrij! – amnesty.nl</a
      >
    </li>
  </ul>
  <h2>Links</h2>
  <ul>
    {#each links as { title, link, text }}
      <li>
        {#if title}
          {title}:
        {/if}
        <a href={link}>{text}</a>
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
  </ul>
</main>

<style>
</style>
