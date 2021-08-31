import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'About Me',
    Svg: require('../../static/img/invisibility.gif').default,
    description: (
      <>
        I am a computer vision engineer with 2.5+ years of industry experience, during which I have handled all sorts of computer vision use-cases (end-to-end) from mask/helmet detection, crowd counting, social distance detection, Face recognition etc. I also have handled teams to help build computer vision pipelines to improve the accuracy and efficiency of deep learning model inference.

      
      </>
    ),
  },
  // {
  //   title: 'Focus on What Matters',
  //   Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
  //   description: (
  //     <>
  //       Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
  //       ahead and move your docs into the <code>docs</code> directory.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Powered by React',
  //   Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
];

function Feature({Svg, title, description}) {
  return (
    // <div className={clsx('col col--4')}>
    <div className={clsx('col--5 align-self-center')}>

      <div className="text--center">
        {/* uncomment to place an svg image from the above config  */}
        {/* <Svg className={styles.featureSvg} alt={title} /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <img className={styles.featureSvg} alt={title} src={Svg}/>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
