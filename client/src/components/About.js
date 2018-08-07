import React from "react";
export class About extends React.Component{ 
    state = {
        imageSrc:'',
    }
    async componentDidMount() {
        const response = await fetch("https://cataas.com/cat/gif")
        const imageBlob = await response.blob();
        const imageSrc = window.URL.createObjectURL(imageBlob);
        this.setState({
            imageSrc:imageSrc,
        })
        //some code here 
    }

    render() {
        if (!this.state.imageSrc) {
        return <p>Loading...</p>
        }
        return (        
            <div>
                <h1>{this.props.title}</h1>
                <img src={this.state.imageSrc} />
                <p>
                Aunties Who Code – that’s what you would be nurturing if you train me! This is my linkedin: https://sg.linkedin.com/in/kim-ong-70094392. 

As a impactmaker, I do lots of things for good. I have a couple of websites that I want to reduce their upkeep to stretch my dollar.  Among them, a social enterprise Design Up Asia, an online store benefitting marginalised community, four years now. 

I also have another website: ipublishsg.com to benefit minority voices.  There are also other voices like mine, with knowledge and experiences, that I would like to help amplify.

Hope you can take it as a challenge to train me. I would love to master and play in the etherspace.  This knowledge will be part of my arsenal to do good.  

Also, truly, thank you Techladies for addressing the gender gap in STEM field and your sacrifice and patience!

                </p>
                </div>
            );
    }
}

