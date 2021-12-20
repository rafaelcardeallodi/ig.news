import Head from 'next/head';
import Prismic from '@prismicio/client';

import styles from './styles.module.scss';

import { GetStaticProps } from 'next';
import { getPrismicClient } from '../../services/prismic';

export default function Posts(){
  return(
    <>
      <Head>
        <title>Posts | ig.news</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de dezembro de 2021</time>
            <strong>Anim quis excepteur aliqua officia ut ad laboris</strong>
            <p>Qui enim dolor ut aliqua et consectetur sunt quis do nisi Lorem incididunt. Ullamco adipisicing voluptate ut elit mollit anim aute dolore proident aliqua elit. Laborum est enim fugiat est eu minim ipsum et anim esse aliquip ipsum. Culpa elit deserunt anim culpa dolor deserunt nostrud dolor cillum commodo Lorem. Culpa cupidatat exercitation anim non commodo Lorem officia in.</p>
          </a>
          <a href="#">
            <time>11 de dezembro de 2021</time>
            <strong>Nostrud eu mollit exercitation amet anim duis esse.</strong>
            <p>Nisi ullamco anim aliquip aliquip sunt culpa ea aliqua proident. Fugiat eiusmod esse laboris sint irure incididunt commodo fugiat sit in laborum sit. Culpa tempor ipsum et mollit. Dolor aute aliquip tempor quis. Laborum magna eiusmod culpa eu est mollit elit fugiat duis est aliqua. Elit consequat voluptate sunt proident dolore cupidatat amet eu exercitation dolore velit. In pariatur eiusmod commodo excepteur enim in ex exercitation ea deserunt duis aliquip aliqua sint.</p>
          </a>
          <a href="#">
            <time>08 de dezembro de 2021</time>
            <strong>Anim aliqua dolor ut sint aute quis veniam dolore.</strong>
            <p>Occaecat id nulla aute nostrud sunt consequat officia laboris minim incididunt velit labore. Deserunt ad nulla irure fugiat mollit excepteur. Elit laborum anim eu nulla cupidatat fugiat. Veniam exercitation pariatur eu exercitation. Dolor duis excepteur quis nisi qui duis eiusmod do laboris mollit nisi aute. Quis labore velit eu ut dolor enim dolor ut pariatur.</p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'publication')
  ], {
    fetch: ['publication.title', 'publication.content'],
    pageSize: 100,
  })

  console.log(JSON.stringify(response, null, 2));

  return {
    props: {}
  }
}