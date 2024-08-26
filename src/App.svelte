<script lang="ts">
  import events from "./resources/events.json";
  //import links from "./resources/links.json";
  import press from "./resources/press.json";
  import { writable } from "svelte/store";
  import { Router, Route, Link } from "svelte-routing";
  import Ru from "./ru.svelte";
  import En from "./en.svelte";

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

<Router>
  <Route path="/">
    <main>
      <header>
        <img
          src="/images/logo_full.svg"
          alt="Free Russia NL logo"
          class="logo"
        />
        <div class="button_container">
          <button class="header_donate" on:click={() => handleClick(3)}
            ><img
              src="/images/header_donate.svg"
              alt="Donate"
              class="img_donate"
            /></button
          >
          <Link to="/en">
            <button class="header_language">EN</button></Link
          >
        </div>
      </header>
      <div>
        <div class="genesis" bind:this={scrollToSections[0]}>
          <h4 class="title">Over ons</h4>
          <h4 class="bold">
            Van burgerinitiatief tot geregistreerde ANBI-stichting in Nederland
          </h4>
          <p class="text">
            Free Russia NL is een grassroots community van Russisch-sprekende
            inwoners en burgers van Nederland. Onze gemeenschap ontstond als een
            burgerinitiatief in januari 2021. 24 februari 2022 veranderde voor
            ieder van ons, binnen en buiten Rusland, het leven drastisch.
            Gedurende de oorlogsmaanden voeren we actie, zamelen geld in voor
            humanitaire hulp aan Oekraïne en aan de Oekraïense vluchtelingen in
            Nederland, helpen journalisten en activisten uit Rusland die
            genoodzaakt zijn het land te verlaten en spreken met Nederlandse
            media. In juni 2022 hebben we onze organisatie als stichting in
            Nederland geregistreerd.
            <br />
            <br />
            Wij zijn een vereniging die zich bezighoudt met het ondersteunen en behartigen
            van de belangen van Russischtaligen die democratische waarden in Nederland
            delen. Wij verlenen humanitaire hulp en organiseren evenementen om de
            aandacht te vestigen op problemen van vluchtelingen uit Rusland, Oekraïne
            en Belarus. Onze educatieve activiteiten zijn gericht op het verspreiden
            van waarheidsgetrouwe informatie over de Russische politiek en samenleving.
          </p>
          <br />
        </div>
        <img
          src="/images/community_new.jpeg"
          style="border-radius: 20px"
          alt="Community"
          class="img_community"
        />
        <div class="about">
          <h4 class="title">De doelstellingen</h4>
          <h4 class="bold">
            Het bevorderen van democratie, mensenrechten en de rechtsstaat, in
            het algemeen, meer in het bijzonder:
          </h4>
          <p class="text">
            <li>
              democratische waarden, -normen en -aanpak, met inbegrip van vrije
              verkiezingen;
            </li>
            <li>
              mensenrechten, waaronder vrijheid van meningsuiting, vrijheid van
              vergadering en vereniging, vrijheid van gedachten en van geweten;
            </li>
            <li>tolerantie en non-discriminatie;</li>
            <li>rechtsstaat en onafhankelijkheid van de rechterlijke macht.</li>
            Het bijeenbrengen en ondersteunen van de in Nederland en Europa gevestigde
            Russischtalige gemeenschap die de bovengenoemde waarden deelt.
          </p>
          <br />
        </div>
      </div>
      <br>   <br>
      <div bind:this={scrollToSections[1]}>
        <h1 class="maintitle">Upcoming and past events</h1>
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
                  Previous events →
                </p>
              {:else}
                <p
                  class="blue black more"
                  on:click={() => toggleShowAll("pastEvents")}
                >
                  Less events ↑
                </p>
              {/if}
            {/if}
          </ul>
        </div>
      </div>
      <br>   <br>
      <div bind:this={scrollToSections[2]}>
        <h1 class="maintitle">Ons werk</h1>
        <div class="documents">
          <br />
          <p class="text">
            Appeal regarding suicide of Russian citizens in 2023
          </p>
          <div class="button_container">
            <a href="/statement/2024-04.html">
              <img src="/images/download.svg" alt="download" />
            </a>
          </div>
          <hr />
          <p class="text">
            Oproep tot een genuanceerd immigratiebeleid voor de Russische
            burgers die onder de voortdurende mobilisatie in Rusland vallen.
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
            Russian-speaking community in the Netherlands and Europe who share
            these values.
          </p>
          <div class="button_container">
            <a href="/docs/beleidsplan_2022-2024.pdf">
              <img src="/images/download.svg" alt="download" />
            </a>
          </div>
          <hr />
          <p class="text">
            Statement van FreeRussiaNL n.a.v. de Schengen visa-vraagstuk voor
            burgers van Russische Federatie
          </p>
          <div class="button_container">
            <a href="/statement">
              <img src="/images/download.svg" alt="download" />
            </a>
          </div>
          <hr />
          <p class="text">
            Call to introduce a nuanced immigration policy for the Russian
            citizens falling under conscription policies
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
      <br>   <br>
      <div bind:this={scrollToSections[3]}>
        <h1 class="maintitle">Samenwerking</h1>
        <div class="about">
          <h4 class="title">Financieel ondersteunen</h4>
          <p class="text">
            Wij zijn een rechtspersoon in Nederland en hebben het recht donaties
            van bedrijven en particulieren te aanvaarden. Alle ingezamelde
            fondsen zullen worden gebruikt voor:<br />
            - ontwikkeling van Free Russia NL<br />
            - Hulp voor vluchtelingen uit Rusland, Oekraïne of Belarus<br />
            - Educatieve activiteiten in Nederland en online<br />
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
            Wij zijn een ANBI Stichting<br />
            (KvK nummer: 86836935)<br />
          </p>

          <form
            action="https://www.paypal.com/donate"
            method="post"
            target="_blank"
          >
            <input
              type="hidden"
              name="hosted_button_id"
              value="CQ4S4K5TN8RY8"
            />
            <input
              type="image"
              src="/images/paypal.svg"
              name="submit"
              title="PayPal - The safer, easier way to pay online!"
              alt="Donate with PayPal button"
              class="paypal-image"
            />
          </form>
          <a href="https://freerussia.nl/tikkie">
            <img src="/images/tikkie.svg" alt="Tikkie" class="tikkie" />
          </a>
        </div>
      </div>
      <br><br>
      <div bind:this={scrollToSections[4]}>
        <h1 class="maintitle">Bestuursleden</h1>
        <div class="about">
          <br />
          <p>
            <span class="black">Alexander Kazakov — </span><span class="blue"
              >voorzitter</span
            >
          </p>
          <p>
            <span class="black">Cyril Schmidt — </span><span class="blue"
              >secretaris</span
            >
          </p>
          <p>
            <span class="black">Kristina Petrasova — </span><span class="blue"
              >penningmeester</span
            >
          </p>
          <br />
        </div>
      </div>
      <br><br>
      <div bind:this={scrollToSections[5]}>
        <h1 class="maintitle">Pers en media</h1>
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
                <p
                  class="blue black more"
                  on:click={() => toggleShowAll("press")}
                >
                  Toon meer →
                </p>
              {:else}
                <p
                  class="blue black more"
                  on:click={() => toggleShowAll("press")}
                >
                  Toon minder ↑
                </p>
              {/if}
            {/if}
          </ul>
        </div>
      </div>
      <br>   <br>
      <div bind:this={scrollToSections[6]}>
        <h1 class="maintitle">Contacten</h1>
        <div class="about">
          <p class="text">Bent u van de media? Neem contact met ons op:</p>
          <img src="/images/envelope.svg" alt="envelope" />
          <span class="bold"
            >&nbsp;&nbsp;&nbsp;<a href="mailto:press@freerussia.nl"
              >press@freerussia.nl</a
            ></span
          >
          <br />
          <hr />
          <p class="text">
            Wil je vrijwilliger worden? Geweldig! Wij verwelkomen enthousiaste
            mensen met verschillende vaardigheden en kennis. Lees over onze
            activiteiten, schat je vrije tijd en energie in, en schrijf ons:
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
            Deel je verhaal! Op de blog publiceren we artikelen van onze
            communityleden en abonnees. Interesse? Stuur uw artikel naar:
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
      <br>   <br>
           <div>
        <h1 class="maintitle">Volg ons via</h1>
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
              <span class="maintitle black">Meer</span>
            </a>
            <br />
          </div>
        </div>
      </div>
      <br>   <br>
      <div>
        <h1 class="maintitle">Blijf op de hoogte</h1>
        <div class="button_container">
          <input
            type="email"
            bind:value={email}
            placeholder="naam@freerussia.nl"
            class="email"
          />
          <button on:click={handleSubscribe} class="header_language"
            >&#65291</button
          >
        </div>

        <p class="past">Schrijf je in voor onze nieuwsbrief</p>
      </div>
      <br>   <br>
      <div>
        <hr />
        <h1 class="maintitle">Partners</h1>
        <div class="links-container">
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
          <div class="link">
            <a href="https://debalie.nl/">
              <img
                src="./images/logos/logo8.png"
                alt="debalie logo"
              />
            </a>
          </div>
          <div class="link wide">
            <a href="https://www.instagram.com/teamnavalny_nld/">
              <img
                src="./images/logos/logo9.png"
                width="130"
                alt="teamnavalny logo"
              />
            </a>
          </div>
          <div class="link">
            <a href="https://www.politzk.com/en">
              <img
                src="./images/logos/logo10.png"
                alt="politzk logo"
              />
            </a>
          </div>
          <div class="link">
            <a href="https://fondsburgerbewegingen.nl">
              <img
                src="./images/logos/logo11.png"
                alt="fondsburgerbewegingen logo"
              />
            </a>
          </div>
          <div class="link">
            <a href="https://en.ovdinfo.org">
              <img
                src="./images/logos/logo12.png"
                alt="ovdinfo logo"
              />
            </a>
          </div>
          <div class="link wide">
            <a href="https://www.wejansenfonds.eu/">
              <img
                src="./images/logos/logo13.png"
                width="100"
                alt="wejansenfonds logo"
              />
            </a>
          </div>
          <div class="link">
            <a href="https://hetactiefonds.nl">
              <img
                src="./images/logos/logo14.png"
                alt="hetactiefonds logo"
              />
            </a>
          </div>
          <div class="link">
            <a href="https://www.pegasusboek.nl">
              <img
                src="./images/logos/logo15.png"
                alt="pegasusboek logo"
              />
            </a>
          </div>
          <div class="link">
            <img src="./images/logos/logo16.png" alt="vol logo" />
          </div>
        </div>
        <br />
      </div>
    </main>
    <footer>
      <nav>
        <ul class="footer-menu">
          <li on:click={() => handleClick(0)}>Over ons →</li>
          <li on:click={() => handleClick(1)}>Upcoming and past events →</li>
          <li on:click={() => handleClick(2)}>Ons werk →</li>
          <li on:click={() => handleClick(3)}>Samenwerking →</li>
          <li on:click={() => handleClick(4)}>Bestuursleden →</li>
          <li on:click={() => handleClick(5)}>Pers en media →</li>
          <li on:click={() => handleClick(6)}>Contacten →</li>
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
  </Route>
  <Route path="/en" component={En} />
  <Route path="/ru" component={Ru} />
</Router>
