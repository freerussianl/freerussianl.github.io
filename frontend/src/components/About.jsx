const About = () => {
    return (
        <div id="About">
            <div className="genesis">
                <h4 className="title">About us</h4>
                <img
                    src="/images/community_new.jpeg"
                    style={{ borderRadius: '20px' }}
                    alt="Community"
                    className="img_community"
                />
                <h4 className="bold">
                    From civil initiative to registered ANBI foundation in the Netherlands
                </h4>
                <p className="text">
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
                <br/>
            </div>
        </div>
    )
}

export default About;