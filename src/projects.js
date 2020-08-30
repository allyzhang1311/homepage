import React from 'react';

function Projects() {
    return (
        <>
            <h2>Recent Projects</h2>
            <div className="main-text">
                <ul>
                    <li>
                        <b>2020:</b> Conducted data analysis of <a href="http://lil.nlp.cornell.edu/cerealbar/">CerealBar</a> player
                    chat logs under <a href="http://yoavartzi.com/">Yoav Artzi</a>,
                    using spaCy and other Python NLP libraries.
                </li>
                    <li>
                        <b>2020:</b> Studied the distribution of terms for 'bubble tea'
                    in the U.S. using a survey of over 200 English speakers and
                    analyzed data for sociolinguistic trends. With Lucia Gomez.
                </li>
                    <li>
                        <b>2019:</b> Created a simulated database management system
                    in Java that supports advanced SQL queries and search optimization for
                    large databases. With Mike Fang and Nick Cavagnaro.
                </li>
                    <li>
                        <b>2019:</b> Participated in labeling and analysis for evaluation
                    of NLP models on automated captioning tasks, specifically focused
                    on 'minimal pairs' of images, under <a href="https://allenai.org/team/mattg">Matt Gardner</a> and
                    Yoav Artzi. Submitted to EMNLP 2020. <a href="https://arxiv.org/abs/2004.02709">arXiv link</a>
                    </li>
                    <li>
                        <b>2019:</b> At Fidelity, developed an Angular web app allowing
                    testers to build and manage customized mailing lists with ease. Fully
                    deployed with Express backend.
                </li>
                    <li>
                        <b>2019:</b> Performed data collection, manipulation and analysis
                    of neural network performance on the <a href="http://lil.nlp.cornell.edu/nlvr/">NLVR2</a> image+caption
                    dataset, under Yoav Artzi and <a href="http://alanesuhr.com/">Alane Suhr</a>.
                    Appeared at ACL 2019. <a href="https://arxiv.org/abs/1811.00491">arXiv link</a>
                    </li>
                    <li>
                        <b>2018:</b> Developed a Python XML parser and Foma finite-state transducer
                    to study phonetic audio transcripts, as part of a project on Brazilian
                    Portuguese prosody. Under <a href="https://compling.cis.cornell.edu/mr249/index.html">Mats Rooth</a> and
                    Simone Harmath-de Lemos.
                </li>
                </ul>
            </div>
        </>
    );
}

export default Projects