<script lang="ts">
  import events from "./resources/events.json";
  import links from "./resources/links.json";
  import press from "./resources/press.json";

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

  const copyText = () => {
    const textToCopy = document.getElementById("textToCopy").innerText;
    navigator.clipboard.writeText(textToCopy);
  };

  let donateRef;

  const scrollToDonate = () => {
    donateRef.scrollIntoView({ behavior: "smooth" });
  };
</script>

<main>
  <header>
    <img src="/images/logo_full.svg" alt="Free Russia NL logo" class="logo" />
    <div class="button_container">
      <button class="header_donate" on:click={scrollToDonate}
        ><img
          src="/images/header_donate.svg"
          alt="Donate"
          class="img_donate"
        /></button
      >
      <button class="header_language">NL</button>
    </div>
  </header>
  <div>
    <div class="genesis">
      <h4 class="title">ontstaansgeschiedenis</h4>
      <h4 class="bold">
        Van burgerinitiatief tot geregistreerde ANBI-stichting in Nederland
      </h4>
      <p class="text">
        Free Russia NL is een grassroots community van Russisch-sprekende
        inwoners en burgers van Nederland. Onze gemeenschap ontstond als een
        burgerinitiatief in januari 2021. 24 februari 2022 veranderde voor ieder
        van ons, binnen en buiten Rusland, het leven drastisch. Gedurende de
        oorlogsmaanden voeren we actie, zamelen geld in voor humanitaire hulp
        aan Oekraïne en aan de Oekraïense vluchtelingen in Nederland, helpen
        journalisten en activisten uit Rusland die genoodzaakt zijn het land te
        verlaten en spreken met Nederlandse media. In juni 2022 hebben we onze
        organisatie als stichting in Nederland geregistreerd.
      </p>
    </div>
    <img src="/images/community.png" alt="Community" class="img_community" />
    <div class="about">
      <h4 class="title">Over ons</h4>
      <h4 class="bold">
        Het verenigen, ondersteunen en behartigen van de belangen van
        Russischtaligen die de democratische waarden in Nederland delen
      </h4>
      <p class="text">
        Wij verlenen humanitaire hulp en organiseren evenementen om de aandacht
        te vestigen op problemen van vluchtelingen uit Rusland, Oekraïne en
        Wit-Rusland. Onze educatieve activiteiten zijn gericht op het
        verspreiden van waarheidsgetrouwe informatie over de Russische politiek
        en samenleving.
      </p>
    </div>
    <div class="about">
      <h4 class="title">De doelstellingen</h4>
      <h4 class="bold">
        Het bevorderen van democratie, mensenrechten en de rechtsstaat, in het
        algemeen, meer in het bijzonder:
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
    </div>
  </div>
  <div>
    <h1 class="maintitle">Bestuursleden</h1>
    <div class="about">
      <p>
        <span class="black">Svetlana Pylaeva — </span><span class="blue"
          >voorzitter</span
        >
      </p>
      <p>
        <span class="black">Kristina Petrasova — </span><span class="blue"
          >secretaris</span
        >
      </p>
      <p>
        <span class="black">Ira Heuvelman — </span><span class="blue"
          >penningmeester</span
        >
      </p>
    </div>
  </div>
  <div>
    <h1 class="maintitle">Documenten</h1>
    <div class="documents">
      <p class="text">
        Oproep tot een genuanceerd immigratiebeleid voor de Russische burgers
        die onder de voortdurende mobilisatie in Rusland vallen.
      </p>
      <div class="button_container">
        <span class="blue black">Download PDF</span>
        <a
          href="http://localhost:8080/docs/open_brief_aan_de_Nederlandse_regering,_aan_de_Staatssecretaris_nl.pdf"
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
        <span class="blue black">Download PDF</span>
        <a href="http://localhost:8080/docs/beleidsplan_2022-2024.pdf">
          <img src="/images/download.svg" alt="download" />
        </a>
      </div>
      <hr />
      <p class="text">
        Statement van FreeRussiaNL n.a.v. de Schengen visa-vraagstuk voor
        burgers van Russische Federatie
      </p>
      <div class="button_container">
        <span class="blue black">Download PDF</span>
        <a href="http://localhost:8080/statement">
          <img src="/images/download.svg" alt="download" />
        </a>
      </div>
      <hr />
      <p class="text">
        Call to introduce a nuanced immigration policy for the Russian citizens
        falling under conscription policies
      </p>
      <div class="button_container">
        <span class="blue black">Download PDF</span>
        <a
          href="http://localhost:8080/docs/Call_to_introduce_a_nuanced_immigration_policy_for_the_Russian_citizens.pdf"
        >
          <img src="/images/download.svg" alt="download" />
        </a>
      </div>
      <hr />
      <p class="text">Petition to the MPs of the Netherlands</p>
      <img src="/images/nl.svg" alt="nl" />
      <a
        href="https://www.petitie24.nl/petitie/3532/maak-europa-vrij-van-corruptiegeld-uit-rusland"
        ><span class="blue black">Dutch</span>
      </a><span class="black">— Sign here!</span><br /><br />
      <img src="/images/uk.svg" alt="uk" />
      <a href="http://localhost:8080/docs/petition_en.pdf"
        ><span class="blue black">English</span><br /><br />
      </a>
      <img src="/images/ru.svg" alt="ru" />
      <a href="http://localhost:8080/docs/petition_ru.pdf"
        ><span class="blue black">Russian</span><br /><br />
      </a>
    </div>
  </div>
  <div>
    <h1 class="maintitle">Samenwerking</h1>
    <div class="about">
      <h4 class="title">Vrijwilliger worden</h4>
      <h4 class="bold">
        Heb je interesse om als vrijwilliger mee te werken aan enkele van onze
        activiteiten?
      </h4>
      <p class="text">
        Geweldig! Wij verwelkomen enthousiaste mensen met verschillende
        vaardigheden en kennis. Lees over onze activiteiten, schat je vrije tijd
        en energie in, en schrijf ons
      </p>
      <img src="/images/envelope.svg" alt="envelope" />
      <span class="bold">&nbsp;&nbsp;&nbsp;info@freerussia.nl </span><br /><br
      />
    </div>
    <div class="about" bind:this={donateRef}>
      <h4 class="title">Financieel ondersteunen</h4>
      <p class="text">
        Wij zijn een rechtspersoon in Nederland en hebben het recht donaties van
        bedrijven en particulieren te aanvaarden. Alle ingezamelde fondsen
        zullen worden gebruikt voor:<br />
        - ontwikkeling van Free Russia NL<br />
        - Hulp voor vluchtelingen uit Rusland, Oekraïne of Wit-Rusland<br />
        - Educatieve activiteiten in Nederland en online<br />
      </p>
      <span class="black">Beneficiary name:</span>
      <span class="text">Free Russia Nederland</span>
      <br />
      <span class="black">IBAN:</span>
      <span id="textToCopy" on:click={copyText}>NL20ABNA0113016549</span><span class="text">&nbsp;&nbsp;&nbsp;(Klik om te kopiëren)</span>
      <br />
      <p class="text">
        Wij zijn een ANBI Stichting<br />
        (KvK nummer: 86836935)<br />
      </p>
      
      <form action="https://www.paypal.com/donate" method="post" target="_blank">
        <input type="hidden" name="hosted_button_id" value="CQ4S4K5TN8RY8" />
        <input
          type="image"
          src="/images/paypal.png"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
          class="paypal-image"
        />
      </form>
      <a
        href="https://freerussia.nl/tikkie"
        >
        <img src="/images/tikkie.png" alt="Tikkie" class="tikkie"/>
      </a>
    </div>
  </div>
  <div>
    <h1 class="maintitle">Pers en media</h1>
    <div class="documents">
      <p>
        ...
      </p>
    </div>
  </div>
  <div>
    <h1 class="maintitle">Upcoming and past events</h1>
    <div class="about">
      <p>
        ...
      </p>
    </div>
  </div>
  <div>
    <h1 class="maintitle">Blog</h1>
    <div class="documents">
      <h4 class="title">Deel je verhaal</h4>
      <h4 class="bold">
        Hier publiceren we artikelen van onze communityleden en abonnees. 
      </h4>
      <p class="text">
        Interesse? Stuur uw artikel naar:
      </p>
      <img src="/images/envelope.svg" alt="envelope" />
      <span class="bold">&nbsp;&nbsp;&nbsp;editorial@freerussia.nl </span><br /><br
      />
    </div>
    <div>
      <h1 class="maintitle">Volg ons via</h1>
    </div>
  <p>
    <a
      href="https://www.change.org/p/декларация-российских-демократических-сил"
    >
      Verklaring van de Russische Democratische Initiatieven, Berlijn, 30 april
      2023
    </a>
  </p>
  <p>
    <a href="/docs/beleidsplan_2022-2024.pdf"> Beleidsplan 2022-2024 </a>
  </p>
  <p>
    <a href="/statement">
      Statement van FreeRussiaNL n.a.v. de Schengen visa-vraagstuk voor burgers
      van Russische Federatie
    </a>
  </p>
  <p>
    Free Russia NL is een grassroots community van Russisch-sprekende inwoners
    en burgers van Nederland. Onze gemeenschap ontstond in januari 2021. 24
    februari 2022 veranderde voor ieder van ons, binnen en buiten Rusland, het
    leven drastisch. 'Overnight' steeg ons ledenbestand tot 1200 leden - voor
    ons een teken van grote behoefte in de Russisch-sprekende gemeenschap in
    Nederland om zich tegen de oorlog en tegen het regime uit te spreken, steun
    te betuigen aan Oekraïne en elkaar. Op dit moment telt ons telegramkanaal <a
      href="https://t.me/FreeRussiaNL">https://t.me/FreeRussiaNL</a
    > rond de 2.500 leden.
  </p>
  <p>
    Ook zien we grote belangstelling voor ons standpunt vanuit de Nederlandse
    samenleving.
  </p>
  <p>
    Gedurende de oorlogsmaanden voeren we actie, zamelen geld in voor
    humanitaire hulp aan Oekraïne en aan de Oekraïense vluchtelingen in
    Nederland, helpen journalisten en activisten uit Rusland die genoodzaakt
    zijn het land te verlaten en spreken met Nederlandse media. In juni 2022
    hebben we onze organisatie als stichting in Nederland geregistreerd:
  </p>
  <!-- Donate section content here -->
  <p>
    <b>Beneficiary name:</b> <code>Free Russia Nederland</code>
  </p>
  <p><b>IBAN:</b> <code>NL20ABNA0113016549</code></p>
  <p>Wij zijn een ANBI Stichting (KvK nummer: 86836935)</p>
  <p><a href="https://freerussia.nl/tikkie">Doneer via tikkie</a></p>

  <form action="https://www.paypal.com/donate" method="post" target="_top">
    <input type="hidden" name="hosted_button_id" value="CQ4S4K5TN8RY8" />
    <input
      type="image"
      src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
      name="submit"
      title="PayPal - The safer, easier way to pay online!"
      alt="Donate with PayPal button"
    />
    <img
      alt=""
      src="https://www.paypal.com/en_NL/i/scr/pixel.gif"
      width="1"
      height="1"
    />
  </form>

  <p>Bestuursleden:</p>
  <ul>
    <li>Svetlana Pylaeva (voorzitter)</li>
    <li>Kristina Petrasova (secretaris)</li>
    <li>Ira Heuvelman (penningmeester)</li>
  </ul>

  <p>
    Communication, press and public events: <a href="mailto:press@freerussia.nl"
      >press@freerussia.nl</a
    >
  </p>

  <p>De doelstellingen van FreeRussiaNL Stichting zijn:</p>
  <p>
    Het bevorderen van democratie, mensenrechten en de rechtsstaat, in het
    algemeen, meer in het bijzonder:
  </p>
  <ul>
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
  </ul>
  <p>
    Het bijeenbrengen en ondersteunen van de in Nederland en Europa gevestigde
    Russischtalige gemeenschap die de bovengenoemde waarden deelt.
  </p>
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
      <a
        href="/docs/open_brief_aan_de_Nederlandse_regering,_aan_de_Staatssecretaris_nl.pdf"
      >
        Oproep tot een genuanceerd immigratiebeleid voor de Russische burgers
        die onder de voortdurende mobilisatie in Rusland vallen.
      </a>
    </li>
    <li>
      <a
        href="/docs/Call_to_introduce_a_nuanced_immigration_policy_for_the_Russian_citizens.pdf"
      >
        Call to introduce a nuanced immigration policy for the Russian citizens
        falling under conscription policies
      </a>
    </li>
    <li>
      <a
        href="/docs/Oproep_voor_tijdelijk_migratiebeleid_voor_Russische_ballingen_in.pdf"
      >
        Open letter to Ministers Hoekstra, Yeşilgöz-Zegerius and Bruins Slot.
        Call for Temporary Migration Policy for Russian Exiles in Wartime
      </a>
    </li>
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
  <h2>and media</h2>
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
  <hr />
  <a
    href="https://www.belastingdienst.nl/wps/wcm/connect/nl/aftrek-en-kortingen/content/anbi-status-controleren"
  >
    <img src="./images/logo-anbi.svg" width="53" alt="anbi logo" />
  </a>
</main>
