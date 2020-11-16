import React, {Component} from "react";

class TopNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            str : 0
        }
    }

    componentWillMount() {
        if (localStorage && localStorage.getItem('notes')) {
            var notes = JSON.parse(localStorage.getItem('notes'));
            this.setState({
                notes: notes
            });
        }
    }

    s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    generateID() {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
    }

    onGenerateData = () => {
        const notes = [
            {
                id: this.generateID(),
                date: "15/11/2020",
                content: "note 1"
            },
            {
                id: this.generateID(),
                date: "16/11/2020",
                // date: date.toLocaleString(),
                content: "note 2"
            },
            {
                id: this.generateID(),
                // date: date.toLocaleString(),
                date: "17/11/2020",
                content: "note 3"
            },
            {
                id: this.generateID(),
                date: "14/11/2020",
                // date: date.setDate(date.getDate() + 1),
                content: "note 4"
            },
            {
                id: this.generateID(),
                date: "15/11/2020",
                content: "note 5"
            },
            {
                id: this.generateID(),
                date: "16/11/2020",
                // date: date.toLocaleString(),
                content: "note 6"
            },
            {
                id: this.generateID(),
                // date: date.toLocaleString(),
                date: "17/11/2020",
                content: "note 7"
            },
            {
                id: this.generateID(),
                date: "14/11/2020",
                // date: date.setDate(date.getDate() + 1),
                content: "note 8"
            },
            {
                id: this.generateID(),
                date: "14/11/2020",
                // date: date.setDate(date.getDate() + 1),
                content: "note 9"
            },
            {
                id: this.generateID(),
                date: "15/11/2020",
                content: "note 10"
            },
            {
                id: this.generateID(),
                date: "16/11/2020",
                // date: date.toLocaleString(),
                content: "note 11"
            },
            {
                id: this.generateID(),
                // date: date.toLocaleString(),
                date: "17/11/2020",
                content: "note 12"
            },
            {
                id: this.generateID(),
                date: "16/11/2020",
                // date: date.setDate(date.getDate() + 1),
                content: "note 13"
            },
        ];
        this.setState({
            notes: notes
        });
        localStorage.setItem("notes", JSON.stringify(notes));
    };

    onNext = () => {
        this.setState({
            str: this.state.str + 1
        })
    }

    onPrevious = () => {
        this.setState({
            str: this.state.str - 1
        })
    }

    render() {
        let date = new Date();
        const {notes, str} = this.state;
        console.log(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`);
        var elmNotes = notes.filter(note => note.date === `${date.getDate() + str}/${date.getMonth() + 1}/${date.getFullYear()}`).map((note) => {
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
                >
                    Previous
                </button>
                <button className="btn btn-default col-3 mr-85 mt-3">
                    {
                    `${date.getDate() + str}/${date.getMonth() + 1}/${date.getFullYear()}`
                    }
                </button>
                <button className="btn btn-default col-3 mt-3"
                        onClick={this.onNext}
                >
                    Next
                </button>

                <button className="btn btn-default mt-2" onClick={this.onGenerateData}>
                    Generate data
                </button>
                <div className="m-30 bg-white">
                    {elmNotes}
                </div>
            </div>
        )
    }
}

export default TopNav;