import React from 'react';
import * as d3 from 'd3';

class Test extends React.Component {
    constructor() {
        super();
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this.state = { data: [] };
        this.counter = 0;
    }

    getNewId() {
        this.counter += 1;
        return this.counter;
    }
    // add new div
    add() {
        //object destructuring
        const { data } = this.state;
        this.setState({
            data: [ ...data, this.getNewId() ]
        });
    }

    remove(id) {
        const { data } = this.state;
        this.setState({
            data: data.filter(d => d !== id),
        });
    }
    // called after component is mounted
    // in dom
    componentDidMount() {
        this.draw();
    }

    draw() {
        const node = d3.select(this.node);
        node
            .style('width', '100vw')
            .style('height', '100vh')
            .style('position', 'relative');
        // update selection, enterselection and
        // exit selection
        const updateSelection = node
            .selectAll('div').data(this.state.data, d => d);
        const width = 80;
        const gap = 10;
        const enterSelection = updateSelection
            .enter()
            .append('div')
            .on('click', (id) => this.remove(id))
            .html(d => `I am ${d}`)
            .merge(updateSelection)
            .style('position', 'absolute')
            .style('background', 'red')
            .style('opacity', 1)
            .transition()
            .duration(500)
            .style('left', (d, i) => `${i * (width + gap)}px`)
            .style('width', `${width}px`)
            .style('height', `${width}px`);

        const exitSelection = updateSelection
            .exit()
            .html('')
            .transition()
            .duration(500)
            .style('opacity', 0)
            .style('top', (d, i) => `${width}px`)
            .style('width', 0)
            .remove();
    }

    // if state changes, this component will rerender
    // and this function will get called
    componentDidUpdate() {
        this.draw();
    }

    render() {
        return (
            <div>
                <button onClick={this.add}>Add</button>
                <div
                    ref={(node) => this.node = node}
                >
                </div>
            </div>
        );
    }
}

export default Test;
