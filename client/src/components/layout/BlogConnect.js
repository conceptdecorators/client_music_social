// import React from "react";
// import "./Blog.css";
// import { client } from "../../client";
// import Posts from "../../components/blog/Posts";

// class App extends React.Component {
//   state = {
//     articles: [],
//   };

//   componentDidMount() {
//     client
//       .getEntries()
//       .then((response) => {
//         console.log(response);
//         this.setState({
//           articles: response.items,
//         });
//       })
//       .catch(console.error);
//   }

//   render() {
//     return (
//       <div className="App">
//         <div className="container">
//           <header>
//             <div className="wrapper">
//               <span>React and Content</span>
//             </div>
//           </header>
//           <main>
//             <div className="blog__page">
//               <h1 class="blog__page__header">ZILAH MUSIC PUBLISHING NEWS</h1>
//               <div className="blogs">
//                 <div className="wrapper">
//                   <Posts posts={this.state.articles} />
//                 </div>
//               </div>
//             </div>
//           </main>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
