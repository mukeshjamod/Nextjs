//our-domain.com/new-meetup

import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";
import { Fragment } from "react";

function NewMeetupPage(){

    const router = useRouter();
  async function addMeetupHandler(enteredMeetupData){
//    console.log(enteredMeetupData);
   const response = await fetch('/api/new-meetup',{
    method:'POST',
    body: JSON.stringify(enteredMeetupData),
    headers:{
        'Content-Type':'application/json',
    }

   });
   const data = await response.json();
   console.log(data);

   router.push('/');
   }

    return(
    <Fragment>
       <Head>
      <title>React Meetups</title>
      <meta 
      name="description"
       content="browse a huge list of a highly"
       />
    </Head> 
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </Fragment>
    );
}

export default NewMeetupPage;