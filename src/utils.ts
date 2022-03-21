import type { GetPropsParams } from "svelte-routing/types/Link";
import type { Event } from "./types";

// TODO tests

const getUpcomingAndPastEvents = (
  events: Event[]
): { upcomingEvents: Event[]; pastEvents: Event[] } =>
  events.reduce(
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

const scrollIntoView = (hash: string) => {
  const el = document.querySelector(hash);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const getLinkProps = ({ location }: GetPropsParams) => {
  if (location.hash) {
    scrollIntoView(location.hash);
  }
  return {};
};

export { getUpcomingAndPastEvents, getLinkProps };
