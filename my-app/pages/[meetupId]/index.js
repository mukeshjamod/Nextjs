// const { Fragment } = require("react");
import MeetupDetail from "@/components/meetups/MeetupDetail";

function MeetupDetails(){
    return(
        <MeetupDetail
           image='https://thumbs.dreamstime.com/z/meetup-logo-social-network-website-samsung-tablet-wooden-background-90103587.jpg'
           title='A first meetup'
           address='314,some city'
           description='the meetup description'

        />
    )
}

export default MeetupDetails;

// title:'A first meetup',
//     image:'https://thumbs.dreamstime.com/z/meetup-logo-social-network-website-samsung-tablet-wooden-background-90103587.jpg',
//     address:,
//     description:'this is a first meetup'