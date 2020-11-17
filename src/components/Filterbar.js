import React from 'react';
import '../App.css';


export class FilterBar extends React.Component {
    constructor(props){
        super(props);
    }

    selectLanguage = (event) => {
        const language = event.target.value
        console.log("hi", language)
        this.props.onChange(language)
    }

    render() {

        return (
            <div>
                <label>Filter projects by language:
                    <select onChange={this.selectLanguage}>
                        <option>
                            All
                        </option>
                        <option value="JavaScript">
                            JavaScript
                        </option>
                        <option value="Ruby">
                            Ruby
                        </option>
                    </select>
                </label>
            </div>
        )
    }
}

export default FilterBar;
