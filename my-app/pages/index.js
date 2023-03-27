//import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";


const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A first meetup',
    image: 'https://thumbs.dreamstime.com/z/meetup-logo-social-network-website-samsung-tablet-wooden-background-90103587.jpg',
    address: '314,some city',
    description: 'this is a first meetup'
  },
  {
    id: 'm2',
    title: 'A second meetup',
    image: 'https://www.shutterstock.com/image-vector/meetup-concept-illustration-young-people-260nw-571989925.jpg',
    address: '254,some colne',
    description: 'this is a second meetup'
  }];

function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    //send a http request and fetch data
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);



  return <>
       <MeetupList meetups={loadedMeetups} />

  </>
}

export default HomePage;