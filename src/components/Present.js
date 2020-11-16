// import React, {Component} from "react";
// import "../App.css";
//
// class Present extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             notes: []
//         }
//     }
//
//     componentWillMount() {
//         if (localStorage && localStorage.getItem('notes')) {
//             var notes = JSON.parse(localStorage.getItem('notes'));
//             this.setState({
//                 notes: notes
//             });
//         }
//     }
//
//     s4() {
//         return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
//     }
//
//     generateID() {
//         return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
//     }
//
//     onGenerateData = () => {
//         var date = new Date();
//         const notes = [
//             {
//                 id: this.generateID(),
//                 date: "15/11/2020",
//                 content: "note 1"
//             },
//             {
//                 id: this.generateID(),
//                 date: "16/11/2020",
//                 // date: date.toLocaleString(),
//                 content: "note 2"
//             },
//             {
//                 id: this.generateID(),
//                 // date: date.toLocaleString(),
//                 date: "15/11/2020",
//                 content: "note 3"
//             },
//             {
//                 id: this.generateID(),
//                 date: "14/11/2020",
//                 // date: date.setDate(date.getDate() + 1),
//                 content: "note 4"
//             },
//         ];
//         this.setState({
//             notes: notes
//         });
//         localStorage.setItem("notes", JSON.stringify(notes));
//     };
//
//     render() {
//         let date = new Date();
//         const {notes} = this.state;
//         console.log(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`);
//         var elmNotes = notes.filter(note => note.date === `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`).map((note) => {
//             return <span className="text-sm-left ">
//                 <ul key={note.id}>
//                 <li>{note.content}</li>
//             </ul>
//             </span>
//         })
//         return (
//
//             <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-3">
//                 <button className="btn btn-default" onClick={this.onGenerateData}>
//                     Generate data
//                 </button>
//                 <div className="m-30 bg-white">
//                     {elmNotes}
//                 </div>
//             </div>
//
//         )
//     }
// }
//
// export default Present;