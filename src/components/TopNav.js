import React, {Component} from "react";

class TopNav extends Component {
        constructor(props) {
            super(props);
            this.state = {
                notes: [{
                    id:'',
                    date:'',
                    content: '',
                    stt: 0
                }],
                str: 0
            }
        }

    componentWillMount() {
        if (localStorage && localStorage.getItem('notes')) {
            let notes = JSON.parse(localStorage.getItem('notes'));
            this.setState({
                notes: notes
            });
        }
    }

    componentDidMount() {
        let check = window.localStorage.getItem('notes');
        check = JSON.parse(check);
        if (Array.isArray(check) && check.length > 0) {
            this.setState({ notes: check });
        }
    }

    s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    generateID() {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
    }

    // onGenerateData = () => {
    //     const notes = [
    //         {
    //             id: this.generateID(),
    //             date: "15/11/2020",
    //             content: "note 1"
    //         },
    //         {
    //             id: this.generateID(),
    //             date: "16/11/2020",
    //             // date: date.toLocaleString(),
    //             content: "note 2"
    //         },
    //         {
    //             id: this.generateID(),
    //             // date: date.toLocaleString(),
    //             date: "17/11/2020",
    //             content: "note 3"
    //         },
    //         {
    //             id: this.generateID(),
    //             date: "14/11/2020",
    //             // date: date.setDate(date.getDate() + 1),
    //             content: "note 4"
    //         },
    //         {
    //             id: this.generateID(),
    //             date: "15/11/2020",
    //             content: "note 5"
    //         },
    //         {
    //             id: this.generateID(),
    //             date: "16/11/2020",
    //             // date: date.toLocaleString(),
    //             content: "note 6"
    //         },
    //         {
    //             id: this.generateID(),
    //             // date: date.toLocaleString(),
    //             date: "17/11/2020",
    //             content: "note 7"
    //         },
    //         {
    //             id: this.generateID(),
    //             date: "14/11/2020",
    //             // date: date.setDate(date.getDate() + 1),
    //             content: "note 8"
    //         },
    //         {
    //             id: this.generateID(),
    //             date: "14/11/2020",
    //             // date: date.setDate(date.getDate() + 1),
    //             content: "note 9"
    //         },
    //         {
    //             id: this.generateID(),
    //             date: "15/11/2020",
    //             content: "note 10"
    //         },
    //         {
    //             id: this.generateID(),
    //             date: "16/11/2020",
    //             // date: date.toLocaleString(),
    //             content: "note 11"
    //         },
    //         {
    //             id: this.generateID(),
    //             // date: date.toLocaleString(),
    //             date: "17/11/2020",
    //             content: "note 12"
    //         },
    //         {
    //             id: this.generateID(),
    //             date: "16/11/2020",
    //             // date: date.setDate(date.getDate() + 1),
    //             content: "note 13"
    //         },
    //     ];
    //     this.setState({
    //         notes: notes
    //     });
    //     localStorage.setItem("notes", JSON.stringify(notes));
    // };

    onNext = () => {
        this.setState({
            str: this.state.str + 1,
        })
    }

    onPrevious = () => {
        this.setState({
            str: this.state.str - 1
        });
    }

    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        let arr = [ ];
        let length = JSON.parse(localStorage.getItem('notes'))
        let stt = 0;
        if (length === null){
            arr.push({
                id: this.generateID(),
                content:this.state.content,
                date:this.state.date,
                stt : 0
            });
            // this.setState({
            //     arr: this.state.notes.concat(arr)
            // });
            localStorage.setItem("notes",JSON.stringify(arr));
        } else {
            let note = JSON.parse(localStorage.getItem('notes'));
            note.push({
                id: this.generateID(),
                content:this.state.content,
                date:this.state.date,
                stt : length.length + stt
            });
            this.setState({
                note: this.state.notes.concat(note)
            });
            localStorage.setItem('notes', JSON.stringify(note));
        }
    }

    render() {
        let date = new Date();
        const {notes, str} = this.state;

        // let elmNotes = notes.filter(note => note.date === `${date.getDate() + str}/${date.getMonth() + 1}/${date.getFullYear()}`).map((note) => {
        let intValue = false;
        let preValue = false;
        if (Number(str) === notes.length - 1){
            intValue = true;
        } else if ( Number(str) === 0){
            preValue = true;
        } else {
            intValue = false;
            preValue = false;
        }

        console.log(`${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`)
        // let elmDate = notes.find(note => note.stt === Number(str));
        let elmDate = notes.find(note => note.stt === Number(str));
        console.log(elmDate)
        let elmNotes = notes.filter(note => note.date === elmDate.date).map((note) => {
            return <span className="text-sm-left ">
                <ul key={note.id}>
                <li>{note.content}</li>
            </ul>
            </span>
        })

        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <button className="btn btn-default col-3 mr-85 mt-3"
                        onClick={this.onPrevious}
                        disabled={preValue}
                >
                    Previous
                </button>
                <button className="btn btn-default col-3 mr-85 mt-3">
                    {
                        elmDate.date
                    }
                </button>
                <button className="btn btn-default col-3 mt-3 "
                        disabled={intValue}
                        onClick={this.onNext}
                >
                    Next
                </button>

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Date: </label>
                        <input type="date"
                               className="form-control"
                               name="date"
                               value={this.state.date}
                               onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Content: </label>
                        <input type="text"
                               className="form-control"
                               name="content"
                               value={this.state.content}
                               onChange={this.onChange}
                        />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-warning ">
                            <span className="fa fa-plus mr-2 "></span>
                            <span className="text-center">Submit</span>
                        </button>
                    </div>
                </form>

                <div className="m-30 bg-white">
                    {elmNotes}
                </div>
            </div>
        )
    }
}

export default TopNav;