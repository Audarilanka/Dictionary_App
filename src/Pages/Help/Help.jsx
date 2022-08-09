import React from "react";

import "./Help.css";

import helpkid from "../../images/205-2054169_support-icon-png-for-kids-can-i-help.png";

export default function Help() {
  return (
    <div className="help-container">
      <div className="straightline1">
        <hr />
      </div>
      <div className="helptitle">Help</div>
      {/* <div className="straightline2">
        <hr />
      </div> */}
      <p className="para1">
        These are answers to the most frequently asked questions about
        lkdictionary. If you have a question which isn't in this list, or if the
        answer given does not satisfy you, please contact us with your question.
      </p>

      <ul className="questions">
        <p>
          <li>
            <a href="#para2" className="question">
              How are words added to the dictionary ?
            </a>
          </li>
        </p>
        <p>
          <li>
            <a href="#para3" className="question">
              What is the SMART Vocabulary?
            </a>
          </li>
        </p>
        <p>
          <li>
            <a href="#para4" className="question">
              How can I find out a word's pronunciation?
            </a>
          </li>
        </p>
        <p>
          <li>
            <a href="#para5" className="question">
              What do sb and sth in entries mean?
            </a>
          </li>
        </p>
        <p>
          <li>
            <a href="#para6" className="question">
              What do the phonetic symbols mean?
            </a>
          </li>
        </p>
        <p>
          <li>
            <a href="#para7" className="question">
              What do the A1, B2, C1, etc. labels mean?
            </a>
          </li>
        </p>
      </ul>

      <img src={helpkid} alt="?" className="helpkid" />
      <div className="paragraph">
        <p id="para2">
          <b>How are words added to the dictionary?</b>
          <br /> We have a team of lexicographers who are always on the lookout
          for new words appearing in the English language. They look at the
          Cambridge English Corpus to check the frequency of the word, and where
          it is used (in newspapers, in casual conversation, in academic texts,
          etc.). If the word is used in many different contexts over a period of
          time, the lexicographers add it to the dictionary. If the
          lexicographers think that a new word might be ephemeral, they keep a
          record of it to review at a later date.
        </p>

        <p id="para3">
          <b>What is the SMART Vocabulary?</b>
          <br /> Our SMART Vocabulary panels appear in many of our entries. They
          provide words and phrases related to the one you've looked up. You can
          click on the bar that says SMART Vocabulary: related words and phrases
          to reveal or hide the panel. If you click on See more results you can
          see all the words and phrases in that topic in a cloud. The words are
          bigger or smaller depending on their frequency.
        </p>

        <p id="para4">
          <b> How can I find out a word's pronunciation?</b>
          <br /> In most entries in the dictionary, you will see two speaker
          icons under the word; one British and one American. You can click on
          them to hear the pronunciation of the word. In addition, all entries
          in the dictionary include phonetic transcriptions in the International
          Phonetic Alphabet.
        </p>

        <p id="para5">
          <b> What do sb and sth in entries mean?</b>
          <br /> sb means somebody, and sth means something.
        </p>

        <p id="para6">
          <b>What do the phonetic symbols mean?</b>
          <br />
          Phonetic symbols represent the sounds of words (for example, the
          pronunciation of words is /wɜːdz/). You can see a full list of
          phonetic symbols used in our dictionaries, with examples of their
          pronunciation.
        </p>

        <p id="para7">
          <b>What do the A1, B2, C1, etc. labels mean?</b>
          <br /> These symbols show the English Profile level of a word, phrase
          or meaning. For example, a word that has a B1 symbol is a word that
          intermediate learners of English usually know. A1 Beginner A2
          Elementary B1 Intermediate B2 Upper-Intermediate C1 Advanced C2
          Proficiency
        </p>
      </div>
    </div>
  );
}
