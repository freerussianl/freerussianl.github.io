<script lang="ts">
  import events from "./resources/events.json";
  import press from "./resources/press.json";
  import { writable } from "svelte/store";

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
      <a target="_self" href="/"><button class="header_language">NL</button></a>
    </div>
  </header>
  <div>
    <div class="genesis" bind:this={scrollToSections[0]}>
      <h4 class="title">О нас</h4>
      <h4 class="bold">
        От гражданской инициативы до зарегистрированной благотворительной
        организации ANBI в Нидерландах
      </h4>
      <p class="text">
        Free Russia NL — это сообщество русскоязычных жителей Нидерландов. Оно возникло как гражданская инициатива в январе 2021 года. 24 февраля 2022 года началась полномасштабная война, и жизнь каждого из нас, внутри и за пределами России, резко изменилась. С первых дней полномасштабного вторжения мы активно действуем, собираем средства для гуманитарной помощи Украине и украинским беженцам в Нидерландах, поддерживаем журналистов и активистов из России, вынужденных покинуть свою страну, и взаимодействуем с нидерландскими СМИ. В июне 2022 года мы зарегистрировали наше сообщество как благотворительную организацию в Нидерландах.
        <br />
        <br />
        Мы занимаемся поддержкой и защитой интересов русскоязычных, разделяющих демократические ценности, в Нидерландах. Кроме того, мы предоставляем гуманитарную помощь и организуем мероприятия, чтобы привлечь внимание к проблемам беженцев из России, Украины и Беларуси, а также распространить информацию о российской политике и обществе.
      </p>
      <br />
    </div>
    <img src="/images/community_new.jpeg" style="border-radius: 20px" alt="Community" class="img_community" />
    <div class="about">
      <h4 class="title">Цели</h4>
      <h4 class="bold">
        Содействие демократии, правам человека и верховенству закона в России, а
        именно:
      </h4>
      <p class="text">
        <li>
          - демократическим ценностям, нормам и подходам, включая свободные
          выборы;
        </li>
        <li>
          - правам человека, включая свободу слова, свободу собраний и
          ассоциаций, свободу мысли и совести;
        </li>
        <li>- толерантности и недискриминации;</li>
        <li>- верховенству закона и независимости судебной власти.</li>
        <br>
        Поддержка русскоязычного сообщества, проживающего в Нидерландах и Европе,
        разделяющего вышеупомянутые ценности.
      </p>
      <br />
    </div>
  </div>
  <br>   <br>

  <div bind:this={scrollToSections[1]}>
    <h1 class="maintitle">Мероприятия</h1>
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
              Предыдущие мероприятия →
            </p>
          {:else}
            <p
              class="blue black more"
              on:click={() => toggleShowAll("pastEvents")}
            >
              Скрыть ↑
            </p>
          {/if}
        {/if}
      </ul>
    </div>
  </div>
  <br>   <br>

  <div bind:this={scrollToSections[2]}>
    <h1 class="maintitle">Наша работа</h1>
    <div class="documents">
      <br />
      <p class="text">
        Интервью с защитником Азовстали
      </p>
      <div class="button_container">
        <a
          href="/docs/stanislav-dutov.docx.pdf"
        >
          <img src="/images/download.svg" alt="download" />
        </a>
      </div>
      <hr />
      <p class="text">
        Оппозиционная деятельность онлайн: преследование и последствия (по-английски)
      </p>
      <div class="button_container">
        <a
          href="/docs/Oppositional_Online_Activity.pdf"
        >
          <img src="/images/download.svg" alt="download" />
        </a>
      </div>
      <hr />
      <p class="text">
        Взаимодействие с адвокатом по миграционным вопросам
      </p>
      <div class="button_container">
        <a
          href="/docs/change-attorney.pdf"
        >
          <img src="/images/download.svg" alt="download" />
        </a>
      </div>
      <hr />
      <p class="text">
        Призыв к усовершенствованию иммиграционной политики для граждан России,
        подвергающихся постоянной мобилизации в России.
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
        Благотворительный план на 2022-2024 годы - Объединение и поддержка
        русскоязычного сообщества в Нидерландах и Европе, разделяющего эти
        ценности.
      </p>
      <div class="button_container">
        <a href="/docs/beleidsplan_2022-2024.pdf">
          <img src="/images/download.svg" alt="download" />
        </a>
      </div>
      <hr />
      <p class="text">
        Заявление от FreeRussiaNL по вопросу о визах Шенгенского соглашения для
        граждан Российской Федерации.
      </p>
      <div class="button_container">
        <a href="/statement">
          <img src="/images/download.svg" alt="download" />
        </a>
      </div>
      <hr />
      <p class="text">
        Призыв ввести нюансированную иммиграционную политику для граждан России,
        попадающих под политику мобилизации.
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
    <h1 class="maintitle">Сотрудничество</h1>
    <div class="about">
      <h4 class="title">Финансовая поддержка</h4>
      <p class="text">
        Мы являемся юридическим лицом в Нидерландах и имеем право принимать
        пожертвования от компаний и частных лиц. Все собранные средства будут
        использованы для:
        <br />
        - развития Free Russia NL;<br />
        - помощи беженцам из России, Украины и Беларуси;<br />
        - образовательных мероприятий в Нидерландах и онлайн.<br />
      </p>
      <span class="black">Наименование получателя:</span>
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
        Мы являемся благотворительной организацией ANBI<br />
        (Номер KvK: 86836935)<br />
      </p>

      <form
        action="https://www.paypal.com/donate"
        method="post"
        target="_blank"
      >
        <input type="hidden" name="hosted_button_id" value="CQ4S4K5TN8RY8" />
        <input
          type="image"
          src="/images/paypal_ru.svg"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
          class="paypal-image"
        />
      </form>
      <a href="https://freerussia.nl/tikkie">
        <img src="/images/tikkie_ru.svg" alt="Tikkie" class="tikkie" />
      </a>
    </div>
  </div>
  <br>   <br>

  <div bind:this={scrollToSections[4]}>
    <h1 class="maintitle">Участники правления</h1>
    <div class="about">
      <br />
      <p>
        <span class="black">Кирилл Шмидт — </span><span class="blue"
          >секретарь</span
        >
      </p>
      <p>
        <span class="black">Ольга Сливко — </span><span class="blue"
          >казначей</span
        >
      </p>
      <br />
    </div>
  </div>
  <br>   <br>

  <div bind:this={scrollToSections[5]}>
    <h1 class="maintitle">Пресса и СМИ</h1>
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
              Показать ещё →
            </p>
          {:else}
            <p class="blue black more" on:click={() => toggleShowAll("press")}>
              Скрыть ↑
            </p>
          {/if}
        {/if}
      </ul>
    </div>
  </div>
  <br>   <br>

  <div bind:this={scrollToSections[6]}>
    <h1 class="maintitle">Контакты</h1>
    <div class="about">
      <br />
      <p class="text">Станьте волонтером! Мы ценим энтузиазм и разнообразие навыков. Присоединяйтесь к нашей команде или поделитесь своей историей в блоге:  <br />  <br /> 
        <img src="/images/envelope.svg" alt="envelope" />
        <span class="bold"
          >&nbsp;&nbsp;&nbsp;<a href="mailto:weare@freerussia.nl"
            >weare@freerussia.nl</a
          ></span >
          <br /> 
          <br />
          <p class="text">Если вы представляете СМИ, свяжитесь с нами:</p>
          <img src="/images/envelope.svg" alt="envelope" />
          <span class="bold"
            >&nbsp;&nbsp;&nbsp;<a href="mailto:press@freerussia.nl"
              >press@freerussia.nl</a
            ></span>
      <br />
      <br />
      <br />
    </div>
  </div>
  
  <br>   <br>

  <div>
    <h1 class="maintitle">Соцсети</h1>
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
          <span class="maintitle black">Ещё</span>
        </a>
        <br />
      </div>
    </div>
  </div>
  <br>   <br>

  <div>
    <br />
    <h1 class="maintitle">Оставайтесь на связи</h1>
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
    <p class="past">Подпишитесь на нашу рассылку</p>
  </div>
  <br>   <br>

  <div>
    <hr />
    <h1 class="maintitle">Партнёры</h1>
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

      <div class="link">
        <a href="https://linktr.ee/fem_antiwar_resistance">
        <img src="./images/logos/logo17.png" alt="feminist logo" />
      </a>
      </div>

      <div class="link">
    <a href="https://avtozak.info/">
      <img src="./images/logos/logo18.png" alt="vol logo" />
    </a>
    </div>
    <br />
  </div>
</main>
<footer>
  <nav>
    <ul class="footer-menu">
      <li on:click={() => handleClick(0)}>О нас →</li>
      <li on:click={() => handleClick(1)}>Мероприятия →</li>
      <li on:click={() => handleClick(2)}>Наша работа →</li>
      <li on:click={() => handleClick(3)}>Сотрудничество →</li>
      <li on:click={() => handleClick(4)}>Участницы правления →</li>
      <li on:click={() => handleClick(5)}>Пресса и СМИ →</li>
      <li on:click={() => handleClick(6)}>Контакты →</li>
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
