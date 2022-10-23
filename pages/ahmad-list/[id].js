import { Fragment } from "react";
import Head from "next/head";

export async function getStaticPaths(){
    
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data=await response.json();

    const paths=data.map(user=>({
        params:{id:user.id.toString()}
    }));

    return {
        paths,
        fallback:false
    }

}

export async function getStaticProps(context){
    
    const id=context.params.id;

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data=await response.json();

    return{
        props:{ ...data }
    }

}

function Details({name,email,address:{city},website}) {
    return (
        <Fragment>
            <Head>
                <title>Ahmad List | Leanne Graham</title>
            </Head>
            <div>
                <h1>{name}</h1>
                <p>{email}</p>
                <p>{website}</p>
                <p>{city}</p>
            </div>
        </Fragment>
    );
}

export default Details;