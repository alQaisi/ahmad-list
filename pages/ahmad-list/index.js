import { Fragment,Children } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from "../../styles/Ahmad.module.css"


export async function getStaticProps(){
    
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data=await response.json();

    return {
        props:{
            usersList:data,
        }
    }

}

function Ahmad({usersList}) {
    const users=Children.toArray(usersList.map(({name,id})=><Link href={`ahmad-list/${id}`}><a className={styles.single}><h3>{ name }</h3></a></Link>))
    return (
        <Fragment>
            <Head>
                <title>Ahmad List | Ahmad List</title>
            </Head>
            <div>
                <h1>Ahmad List</h1>
                {users}
            </div>
        </Fragment>
    );
}

export default Ahmad;