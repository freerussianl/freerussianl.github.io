  import Layout from "../Layout";
  import "../assets/css/index.css"
  import About from "../components/About";
  import Objectives from "../components/Objectives";
  import Events from "../components/events/Events";
  import Work from "../components/documents/Documents";
  import Summary from "../components/Summary";
  import Members from "../components/Members";
  import Contacts from "../components/Contacts";
  import Links from "../components/Links";
  import Newsletter from "../components/Newsletter";
  import Partners from "../components/Partners";
  import Media from "../components/articles/Media";

  const IndexPage = () => {
    return (
      <Layout>
          <About />
          <br /><br />
          <Objectives />
          <br /><br />
          <Events />
          <br /><br />
          <Work />
          <br /><br />
          <Summary />
          <br /><br />
          <Members />
          <br/><br/>
          <Media />
          <br/><br/>
          <Contacts />
          <br/><br/>
          <Links />
          <br/><br/>
          <Newsletter />
          <br/><br/>
          <Partners />
          <br/><br/>
      </Layout>
    )
  };

  export default IndexPage;