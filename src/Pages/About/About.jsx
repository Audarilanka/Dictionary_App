import React from "react";
import "./About.css";
import book_pic from "../../images/ffc10b02-17fe-4ed2-8f06-de38ecbc62f2.png";

export default function About() {
  return (
    <div className="about-container">
      <div className="line item">
        <hr />
      </div>

      <div className="para item">
        <p className="about-paragraph">
          Dictionarylk.com provide millions of English definitions, spellings,
          audio pronunciations, example sentences, and word origins.
          dictionarylk.com’s main, proprietary source is the Random House
          Unabridged Dictionary, which is continually updated by our team of
          experienced lexicographers and supplemented with trusted, established
          sources including American Heritage and Harper Collins to support a
          range of language needs.
        </p>

        <p className="about-paragraph">
          Language is constantly evolving, and the editorial offerings from
          Dictionary.com shine a light on how language is being used. From pop
          culture to idioms and grammar advice, there’s always something new to
          learn from lkdictionary.com.
        </p>
      </div>
      <img src={book_pic} alt="book" className="book_pic item" />
    </div>
  );
}
