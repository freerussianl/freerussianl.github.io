<script lang="ts">
  import events from "./resources/events.json";
  import press from "./resources/press.json";
  import { writable } from "svelte/store";
  import { Link } from "svelte-routing";

  const { upcomingEvents, pastEvents } = events.reduce(
    (acc, event) => {
      const today = new Date();
      const [_, dd, mm, yyyy] = event.date.match(/(\d\d)\.(\d\d)\.(\d\d\d\d)/);

      if (
        today.getFullYear() <= Number(yyyy) &&
        today.getMonth() + 1 <= Number(mm) &&
        today.getDate() <= Number(dd)
      ) {
        return { ...acc, upcomingEvents: [...acc.upcomingEvents, event] };
      } else {
        return { ...acc, pastEvents: [...acc.pastEvents, event] };
      }
    },
    { upcomingEvents: [], pastEvents: [] }
  );

  // Create a writable store for the showAllItems state
  let showAllItems = writable({ press: false, pastEvents: false });

  // Create writable stores for press and past events
  let limitedPress = writable([]);
  let limitedPastEvents = writable([]);

  // Function to update the limitedItems store based on the showAllItems state
  const updateLimitedItems = (items, limitedItems, showAllItems) => {
    if (showAllItems) {
      limitedItems.set(items);
    } else {
      limitedItems.set(items.slice(0, 4));
    }
  };

  // Initial update of limitedPress and limitedPastEvents
  updateLimitedItems(press, limitedPress, showAllItems.press);
  updateLimitedItems(pastEvents, limitedPastEvents, showAllItems.pastEvents);

  // Function to toggle the showAll state for a specific section
  const toggleShowAll = (key) => {
    showAllItems[key] = !showAllItems[key];
    updateLimitedItems(press, limitedPress, showAllItems.press);
    updateLimitedItems(pastEvents, limitedPastEvents, showAllItems.pastEvents);
  };

  const copyText = () => {
    const textToCopy = document.getElementById("textToCopy").innerText;
    navigator.clipboard.writeText(textToCopy);
  };

  let scrollToSections = [];

  // Function to scroll to a section when a menu item is clicked
  function handleClick(index) {
    const scrollToSection = scrollToSections[index];
    if (scrollToSection) {
      scrollToSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  let email = "";

  function handleSubscribe() {
    const encodedEmail = encodeURIComponent(email);
    const url = `https://frnlnewsletter.hosted.phplist.com/lists/?p=subscribe&email=${encodedEmail}&emailconfirm=${encodedEmail}`;
    window.location.href = url;
  }
</script>

<main>
  <header>
    <img src="/images/logo_full.svg" alt="Free Russia NL logo" class="logo" />
    <div class="button_container">
      <button class="header_donate" on:click={() => handleClick(3)}
        ><img
          src="/images/header_donate.svg"
          alt="Donate"
          class="img_donate"
        /></button
      >
      <Link to="/ru">
        <button class="header_language">RU</button></Link
      >
    </div>
  </header>
  <div>
    <div class="genesis" bind:this={scrollToSections[0]}>
      <h4 class="title">About us</h4>
      <h4 class="bold">
        From civil initiative to registered ANBI foundation in the Netherlands
      </h4>
      <p class="text">
        Free Russia NL is a grassroots community of Russian-speaking residents
        and citizens of the Netherlands. Our community originated as a citizens'
        initiative in January 2021. 24 February 2022 changed lives dramatically
        for each of us, inside and outside Russia. During the months of war, we
        campaigned, raised money for humanitarian aid to Ukraine and Ukrainian
        refugees in the Netherlands, helped journalists and activists from
        Russia forced to leave the country and spoke to Dutch media. In June
        2022, we registered our organisation as a foundation in the Netherlands.
        <br />
        <br />
        We are an association dedicated to supporting and promoting the interests
        of Russian speakers who share democratic values in the Netherlands. We provide
        humanitarian aid and organise events to draw attention to problems of refugees
        from Russia, Ukraine and Belarus. Our educational activities are aimed at
        disseminating truthful information about Russian politics and society.
      </p>
      <br />
    </div>
    <img src="/images/community_en.png" alt="Community" class="img_community" />
    <div class="about">
      <h4 class="title">The objectives</h4>
      <h4 class="bold">
        Supporting democracy, human rights, and the rule of law in Russia, specifically:
      </h4>
      <p class="text">
        <li>
          - democratic values, norms and approaches, including free elections;
        </li>
        <li>
          - human rights, including freedom of expression, freedom of assembly
          and association, freedom of thought and conscience;
        </li>
        <li>- tolerance and non-discrimination;</li>
        <li>- rule of law and independence of the judiciary.</li>
        To bring together and support the Russian-speaking community based in the
        Netherlands and Europe that shares the above values.
      </p>
      <br />
    </div>
  </div>
  <div bind:this={scrollToSections[1]}>
    <h1 class="maintitle">Events</h1>
    <div class="about">
      <br />
      <ul>
        {#each upcomingEvents as { date, title, link, comment }}
          <li>
            <img src="/images/bell.svg" alt="Bell" /><span class="blue date"
              >&nbsp;&nbsp;&nbsp;{date}</span
            >
            <br />
            <br />
            <a href={link} class="black">
              {title}
            </a>
            {#if comment}
              {comment}
            {/if}
          </li>
          <hr />
        {/each}
      </ul>
      <ul class="past">
        {#each $limitedPastEvents as { date, title, link, comment }}
          <li>
            <img src="/images/bellgrey.svg" alt="Bell" /><span class="date"
              >&nbsp;&nbsp;&nbsp;{date}</span
            >
            <br />
            <br />
            <a href={link} class="past black">
              {title}
            </a>
            {#if comment}
              {comment}
            {/if}
          </li>
          <hr />
        {/each}
        {#if pastEvents.length > 4}
          {#if !showAllItems.pastEvents}
            <p
              class="blue black more"
              on:click={() => toggleShowAll("pastEvents")}
            >
              Past events →
            </p>
          {:else}
            <p
              class="blue black more"
              on:click={() => toggleShowAll("pastEvents")}
            >
              Show less ↑
            </p>
          {/if}
        {/if}
      </ul>
    </div>
  </div>
  <div bind:this={scrollToSections[2]}>
    <h1 class="maintitle">Our work</h1>
    <div class="documents">
      <br />
      <p class="text">
        Call for a nuanced immigration policy for Russian citizens under the
        ongoing mobilization in Russia.
      </p>
      <div class="button_container">
        <a
          href="/docs/open_brief_aan_de_Nederlandse_regering,_aan_de_Staatssecretaris_nl.pdf"
        >
          <img src="/images/download.svg" alt="download" />
        </a>
      </div>
      <hr />
      <p class="text">
        Beleidsplan 2022-2024 - Bringing together and supporting the
        Russian-speaking community in the Netherlands and Europe who share these
        values.
      </p>
      <div class="button_container">
        <a href="/docs/beleidsplan_2022-2024.pdf">
          <img src="/images/download.svg" alt="download" />
        </a>
      </div>
      <hr />
      <p class="text">
        Statement by FreeRussiaNL following Schengen visa issue for citizens of
        Russian Federation.
      </p>
      <div class="button_container">
        <a href="/statement">
          <img src="/images/download.svg" alt="download" />
        </a>
      </div>
      <hr />
      <p class="text">
        Call to introduce a nuanced immigration policy for the Russian citizens
        falling under conscription policies
      </p>
      <div class="button_container">
        <a
          href="/docs/Call_to_introduce_a_nuanced_immigration_policy_for_the_Russian_citizens.pdf"
        >
          <img src="/images/download.svg" alt="download" />
        </a>
      </div>
    </div>
  </div>
  <div bind:this={scrollToSections[3]}>
    <h1 class="maintitle">Summary</h1>
    <div class="about">
      <h4 class="title">Financial support</h4>
      <p class="text">
        We are a legal entity in the Netherlands and are entitled to accept
        donations from companies and individuals. All funds raised will be used
        for:
        <br />
        - development of Free Russia NL;<br />
        - assistance for refugees from Russia, Ukraine or Belarus;<br />
        - educational activities in the Netherlands and online.<br />
      </p>
      <span class="black">Beneficiary name:</span>
      <span class="text">Free Russia Nederland</span>
      <br />
      <span class="black">IBAN:</span>
      <span id="textToCopy">NL20ABNA0113016549</span>&nbsp;&nbsp;&nbsp;<img
        src="/images/copy.svg"
        alt="Copy"
        on:click={copyText}
      />
      <br />
      <p class="text">
        We are an ANBI Foundation<br />
        (Chamber of Commerce number: 86836935)<br />
      </p>

      <form
        action="https://www.paypal.com/donate"
        method="post"
        target="_blank"
      >
        <input type="hidden" name="hosted_button_id" value="CQ4S4K5TN8RY8" />
        <input
          type="image"
          src="/images/paypal_en.svg"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
          class="paypal-image"
        />
      </form>
      <a href="https://freerussia.nl/tikkie">
        <img src="/images/tikkie_en.svg" alt="Tikkie" class="tikkie" />
      </a>
    </div>
  </div>
  <div bind:this={scrollToSections[4]}>
    <h1 class="maintitle">Board members</h1>
    <div class="about">
      <br />
      <p>
        <span class="black">Alexander Kazakov — </span><span class="blue"
          >chairman</span
        >
      </p>
      <p>
        <span class="black">Cyril Schmidt — </span><span class="blue"
          >secretary</span
        >
      </p>
      <p>
        <span class="black">Kristina Petrasova — </span><span class="blue"
          >treasurer</span
        >
      </p>
      <br />
    </div>
  </div>
  <div bind:this={scrollToSections[5]}>
    <h1 class="maintitle">Press and media</h1>
    <div class="documents">
      <br />
      <ul>
        {#each $limitedPress as { date, text, link, comment }}
          <li>
            {#if comment}
              {comment}
            {/if}
            <a href={link} class="black">
              {text}
            </a>
            <br />
            <br />
            {date}
          </li>
          <hr />
        {/each}
        {#if press.length > 4}
          {#if !showAllItems.press}
            <p class="blue black more" on:click={() => toggleShowAll("press")}>
              Show more →
            </p>
          {:else}
            <p class="blue black more" on:click={() => toggleShowAll("press")}>
              Show less ↑
            </p>
          {/if}
        {/if}
      </ul>
    </div>
  </div>
  <div bind:this={scrollToSections[6]}>
    <h1 class="maintitle">Contacts</h1>
    <div class="about">
      <p class="text">Are you from the media? Get in touch with us:</p>
      <img src="/images/envelope.svg" alt="envelope" />
      <span class="bold"
        >&nbsp;&nbsp;&nbsp;<a href="mailto:press@freerussia.nl"
          >press@freerussia.nl</a
        ></span
      >
      <br />
      <hr />
      <p class="text">
        Would you like to become a volunteer? Great! We welcome enthusiastic people with different skills and knowledge. Read about our activities, estimate your free time and energy, and write to us:
      </p>
      <img src="/images/envelope.svg" alt="envelope" />
      <span class="bold"
        >&nbsp;&nbsp;&nbsp;<a href="mailto:info@freerussia.nl"
          >info@freerussia.nl</a
        ></span
      >
      <br />
      <hr />
      <p class="text">
        Share your story! On the blog, we publish articles by our community members and subscribers. Interested? Send your article to:
      </p>
      <img src="/images/envelope.svg" alt="envelope" />
      <span class="bold"
        >&nbsp;&nbsp;&nbsp;<a href="mailto:editorial@freerussia.nl"
          >editorial@freerussia.nl</a
        ></span
      >
      <br />
      <br />
    </div>
  </div>
  <div bind:this={scrollToSections[7]}>
    <a href="https://ru.freerussia.nl/blog">
      <img src="/images/blog_en.png" alt="Blog" class="img_community" />
    </a>
  </div>
  <div>
    <h1 class="maintitle">Follow us</h1>
    <div class="links">
      <div class="button_container">
        <a href="https://t.me/FreeRussiaNL"
          ><img src="/images/tg.png" alt="Telegram" />
        </a>
        <a href="https://facebook.com/FreeRussiaNL"
          ><img src="/images/fb.png" alt="Facebook" />
        </a>
        <a href="https://instagram.com/freerussia.nl"
          ><img src="/images/ig.png" alt="Instagram" />
        </a>
        <a href="https://twitter.com/russia_nl"
          ><img src="/images/tw.png" alt="Twitter" />
        </a>
        <a href="https://www.youtube.com/channel/UCU9wy4JM-OagJfIhWI4U9MA"
          ><img src="/images/ut.png" alt="Youtube" />
        </a>
        <a href="/links">
          <span class="maintitle black">More</span>
        </a>
        <br />
      </div>
    </div>
  </div>
  <div>
    <br />
    <h1 class="maintitle">Stay informed</h1>
    <div class="button_container">
      <input
        type="email"
        bind:value={email}
        placeholder="naam@freerussia.nl"
        class="email"
      />
      <button on:click={handleSubscribe} class="header_language">&#65291</button
      >
    </div>
    <p class="past">Sign up for our newsletter</p>
  </div>
  <div>
    <hr />
    <h1 class="maintitle">Partners</h1>
    <div class="links-container">
      <div class="link">
        <a href="https://alegotour.com/en/">
          <img src="./images/logos/logo1.png" width="58" alt="alegotour logo" />
        </a>
      </div>
      <div class="link">
        <a href="https://www.vrijpaleis.nl/">
          <img src="./images/logos/logo2.png" alt="vrijpaleis logo" />
        </a>
      </div>
      <div class="link">
        <a href="https://www.medialoft.eu/">
          <img src="./images/logos/logo3.png" alt="medialoft logo" />
        </a>
      </div>
      <div class="link">
        <a href="https://www.facebook.com/stichtingopenbelarus/">
          <img src="./images/logos/logo6.png" alt="openbelarus logo" />
        </a>
      </div>
      <div class="link">
        <img src="./images/logos/logo5.png" alt="ruslgbtiq logo" />
      </div>
      <div class="link">
        <a href="https://lgbtworldbeside.org/">
          <img src="./images/logos/logo4.png" alt="lgbtworldbeside logo" />
        </a>
      </div>
      <div class="link wide">
        <a href="https://wfu.world/en/">
          <img src="./images/logos/logo7.png" alt="wfu logo" />
        </a>
      </div>
    </div>
    <br />
  </div>
</main>
<footer>
  <nav>
    <ul class="footer-menu">
      <li on:click={() => handleClick(0)}>About us →</li>
      <li on:click={() => handleClick(1)}>Upcoming and past events →</li>
      <li on:click={() => handleClick(2)}>Our work →</li>
      <li on:click={() => handleClick(3)}>Summary →</li>
      <li on:click={() => handleClick(4)}>Board Members →</li>
      <li on:click={() => handleClick(5)}>Press and media →</li>
      <li on:click={() => handleClick(6)}>Contacts →</li>
      <li on:click={() => handleClick(7)}>Blog →</li>
    </ul>
  </nav>
  <br />
  <div class="anbi">
    <a
      href="https://www.belastingdienst.nl/wps/wcm/connect/nl/aftrek-en-kortingen/content/anbi-status-controleren"
    >
      <img src="./images/logo-anbi.svg" width="53" alt="anbi logo" />
    </a>
  </div>
</footer>
