// import React, {Component} from "react";
// import "../App.css";
//
// class Next extends Component {
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
//     render() {
//         const {notes} = this.state;
//         console.log(notes);
//         var elmNotes = notes.map((note) => {
//             return <span className="text-sm-left ">
//                 <ul key={note.id}>
//                 <li>{note.content}</li>
//             </ul>
//             </span>
//         })
//         return (
//
//             <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-3">
//                 <div className="m-30 bg-white">
//                     {elmNotes}
//                 </div>
//             </div>
//
//         )
//     }
// }
//
// export default Next;