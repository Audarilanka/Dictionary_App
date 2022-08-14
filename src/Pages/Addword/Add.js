import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { getTopic, getTopics } from "./api";
import AddWord from "./AddWord";
import "./Add.css";

// function Resource() {
//   const { topicId, resourceId } = useParams();

//   const { name, description, id } = getResource({ topicId, resourceId });

//   return (
//     <div>
//       <h3> {name}</h3>
//       <p>{description}</p>
//       <a href={`https://ui.dev/${id}`}>Read Post</a>
//     </div>
//   );
// }

function Topic() {
  const { topicId } = useParams();
  const topic = getTopic(topicId);
  return (
    <div className="internal">
      <h2 className="tp">{topic.name}</h2>
      <p className="td">{topic.description}</p>

      {/* <ul>
        {topic.resources.map((sub) => (
          <li key={sub.id}>
            <Link to={sub.id}>{sub.name}</Link>
          </li>
        ))}
      </ul> */}

      {/* <Routes>
        <Route path=":resourceId" element={<Resource />} />
      </Routes> */}
    </div>
  );
}

export default function Add() {
  const topics = getTopics();

  return (
    <div className="add-container">
      <h1 className="ADD-YOUR-WORD">
        Would you like to add new words to our dictionary?
      </h1>
      <nav className="topictoadd">
        {topics.map(({ name, id }) => (
          <p key={id}>
            <Link to={id} className="topicName">
              {name}
            </Link>
          </p>
        ))}
      </nav>

      <Routes>
        <Route path=":topicId/*" element={<Topic />} />
      </Routes>
    </div>
  );
}

// import React from "react";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
//   useParams,
//   useMatch,
//   Outlet,
// } from "react-router-dom";
// import { getTopic, getResource, getTopics } from "../../api";

// function Resource() {
//   const { topicId, resourceId } = useParams();

//   const { name, description, id } = getResource({ topicId, resourceId });

//   return (
//     <div>
//       <h3>{name}</h3>
//       <p>{description}</p>
//       <a href={`https://ui.dev/${id}`}>Read Post</a>
//     </div>
//   );
// }

// function Topic() {
//   const { topicId } = useParams();
//   const topic = getTopic(topicId);
//   return (
//     <div>
//       <h2>{topic.name}</h2>
//       <p>{topic.description}</p>

//       <ul>
//         {topic.resources.map((sub) => (
//           <li key={sub.id}>
//             <Link to={sub.id}>{sub.name}</Link>
//           </li>
//         ))}
//       </ul>

//       <hr />

//       <Routes>
//         <Route path=":resourceId" element={<Resource />} />
//       </Routes>
//     </div>
//   );
// }

// export default function Add() {
//   const topics = getTopics();

//   return (
//     <div>
//       <h1>ADD YOUR WORD</h1>
//       <ul>
//         {topics.map(({ name, id }) => (
//           <li key={id}>
//             <Link to={id}>{name}</Link>
//           </li>
//         ))}
//       </ul>

//       <hr />

//       <Routes>
//         <Route path=":topicId/*" element={<Topic />} />
//       </Routes>
//     </div>
//   );
// }
