import React from 'react';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core/styles'

import contrastset from './assets/contrastset.png'
import cerealbar from './assets/cerealbar.png'
import me from './assets/me.png'
import serverfarm from './assets/serverfarm.jpeg'
import coffeetable from './assets/coffeetable.jpg'
import boba from './assets/boba.jpg'
import bobapaper from './assets/bobapaper.pdf'

const getStyles = makeStyles((theme) => ({
    imgLeft: {
        float: "left",
        width: "200px",
        [theme.breakpoints.down('sm')]: {
            width: "40%",
        },
    },
    imgRight: {
        float: "right",
        width: "200px",
        [theme.breakpoints.down('sm')]: {
            width: "40%",
        },
    }
}));

const ProjAcc = withStyles({
    root: {
        backgroundColor: 'rgba(60, 66, 97, 0.651)',
        boxShadow: 'none',
        borderBottom: '1px solid rgb(93, 99, 133)',
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

const ProjAccSummary = withStyles({
    root: {
        color: '#f7f7f7', // @off-white
        fontWeight: '400',
        textShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const ProjAccDetails = withStyles({
    root: {
        color: '#f7f7f7', // @off-white
        textShadow: 'none',
        backgroundColor: '#07080d', // @background
    },
})(MuiAccordionDetails);

function DownChev() {
    return (
        <FontAwesomeIcon icon={faChevronDown} color="#f7f7f7" size="xs" />
    );
}

function Projects() {
    const css = getStyles();

    return (
        <>
            <h2>Recent Projects</h2>

            <p>
                Here's some things I've been working on for class, research, or just
                personal amusement!
            </p>

            <div className="main-text">
                <ProjAcc>
                    <ProjAccSummary expandIcon={<DownChev />}>Bubble tea: what's in a name?</ProjAccSummary>
                    <ProjAccDetails>
                        <p>
                            <img src={boba} className={css.imgLeft} />
                            'Bubble tea', 'boba'... this Taiwanese drink took the world by storm,
                            but who calls it what? <a href="https://lucia-gomez.netlify.app/">Lucia Gomez</a> and I
                            surveyed over 200 English speakers around the U.S. and analyzed the results by ethnicity,
                            age, location and other key sociolinguistic factors - highlighting the links between simple
                            word choices and the thorny landscape of Asian diaspora.<br /><br />
                            View our interactive <a href="https://public.tableau.com/profile/lucia.gomez#!/vizhome/BubbleTeaBobaWordChoice/Sheet1">choropleth maps</a> and <a href="https://public.tableau.com/profile/lucia.gomez#!/vizhome/BubbleTeaBobaWordChoice/Heatmaps">heatmaps</a> on
                            Tableau, or read about our findings <a href={bobapaper}>here</a>.
                        </p>
                    </ProjAccDetails>
                </ProjAcc>
                <ProjAcc>
                    <ProjAccSummary expandIcon={<DownChev />}>Chatting with CerealBar</ProjAccSummary>
                    <ProjAccDetails>
                        <p>
                            <img src={cerealbar} className={css.imgRight} />
                            I worked under <a href="http://yoavartzi.com/">Yoav Artzi</a> and <a href="http://alanesuhr.com/">Alane Suhr</a> in
                            the Cornell Language, Interaction and Learning (LIL) Lab to analyze
                            chat logs of CerealBar, a game developed to study collaborative natural-language interactions
                            between two players. I developed Python scripts using <a href="https://spacy.io/">SpaCy</a> and other
                            Python NLP libraries to study linguistic features of players' messages, such as common lemmas and token
                            distribution over the course of the game.<br /><br />
                            Details and demos can be found on the <a href="http://lil.nlp.cornell.edu/cerealbar/">CerealBar website</a>.
                            And no, I don't know why it's called that.
                        </p>
                    </ProjAccDetails>
                </ProjAcc>
                <ProjAcc>
                    <ProjAccSummary expandIcon={<DownChev />}>This very website</ProjAccSummary>
                    <ProjAccDetails>
                        <p>
                            <img src={me} className={css.imgLeft} />
                            Yep, the one you're looking at. Developed in JavaScript using the React framework,
                            it also makes use of Material-UI for design components and Sass for styling.<br /><br />
                            Like all personal websites, it seems to be a perpetual work in progress...
                        </p>
                    </ProjAccDetails>
                </ProjAcc>
                <ProjAcc>
                    <ProjAccSummary expandIcon={<DownChev />}>Databases from the ground up</ProjAccSummary>
                    <ProjAccDetails>
                        <p>
                            <img src={serverfarm} className={css.imgRight} />
                            For my semester-long practicum, a hallmark of every Cornell CS student's education (for better
                            or worse!), I worked with Mike Fang and Nickolas Cavagnaro to develop a complex database management system
                            in Java. Our DBMS uses <a href="https://github.com/JSQLParser/JSqlParser/wiki">JSQLParser</a> to read SQL queries
                            and supports optimizations like B+ tree indexing, external sorting, and multiple toggle-able join algorithms.
                            Thanks to this project, I've realized how much thought and planning goes into every level of query evaluation,
                            even for the tiniest SELECT statement!
                        </p>
                    </ProjAccDetails>
                </ProjAcc>
                <ProjAcc>
                    <ProjAccSummary expandIcon={<DownChev />}>Eternal captions of the spotless mind</ProjAccSummary>
                    <ProjAccDetails>
                        <p>
                            <img src={contrastset} className={css.imgLeft} />
                            As part of the Cornell LIL Lab (see 'Chatting with CerealBar') I worked to develop and analyze
                            datasets of image captions for training neural networks. My main focus was <a href="http://lil.nlp.cornell.edu/nlvr/">NLVR2</a>, a
                            a corpus testing models' ability to reason about the truth value of a sentence for a pair of images.<br /><br />
                            This idea was further extended when I joined a cross-institutional team led
                            by <a href="https://allenai.org/team/mattg">Matt Gardner</a> and <a href="http://yoavartzi.com/">Yoav Artzi</a>,
                            which investigated the viability of a new evaluation method for model performance:
                            contrast sets, or pairs of images that differ by a single attribute. (For
                            instance, the number of malamutes present. Yes, I got to review a lot of dog pictures.) Our
                            research demonstrated that models struggled more with these than with typical test sets on several metrics,
                            revealing issues with semantic understanding.<br /><br />
                            I coauthored a <a href="https://arxiv.org/abs/1811.00491">paper</a> on NLVR2 that appeared at ACL 2019,
                            as well as <a href="https://arxiv.org/abs/2004.02709">another</a> focused on contrast sets that was submitted to EMNLP 2020.
                        </p>
                    </ProjAccDetails>
                </ProjAcc>
                <ProjAcc>
                    <ProjAccSummary expandIcon={<DownChev />}>Você pode me ouvir? Portuguese phonetic parsing</ProjAccSummary>
                    <ProjAccDetails>
                        <p>
                            <img src={coffeetable} className={css.imgRight} />
                            In the Cornell Computational Linguistics Lab, I developed a Python XML parser for audio
                            transcripts from the <a href="http://www.c-oral-brasil.org/english-site/index.html">C-ORAL</a> and <a href="https://catalog.ldc.upenn.edu/LDC2008S04">West Point</a> Brazilian
                            Portuguese corpora, and in addition created a finite-state transducer in
                            the <a href="https://fomafst.github.io/">Foma</a> library to move these transcripts from
                            their original phonetic representation to an ASCII-friendly format. This work, done
                            under <a href="https://compling.cis.cornell.edu/mr249/index.html">Mats Rooth</a> and Simone
                            Harmath-de Lemos, helped further the study of Portuguese prosody and text-digitalization.
                        </p>
                    </ProjAccDetails>
                </ProjAcc>
            </div>
        </>
    );
}

export default Projects