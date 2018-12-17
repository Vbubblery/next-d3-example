import React from 'react';
import * as d3 from 'd3';

const data = [1, 1, 2, 3, 5, 8, 13];
const colors = [
  "#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd",
  "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"
];


class Chart extends React.Component {
    constructor() {
        super();
    }

    // called after component is mounted
    componentDidMount() {
        this.draw();
    }

    draw() {
        const canvas = this.node;
        const context = canvas.getContext("2d");

        const width = canvas.width,
              height = canvas.height,
              radius = Math.min(width, height) / 2;
        const outerRadius = radius - 10,
              cornerRadius = 12;

        const arc = d3.arc()
                      .outerRadius(outerRadius)
                      .innerRadius(0)
                      .cornerRadius(cornerRadius)
                      .context(context);
        const circle = d3.arc()
                         .startAngle(0)
                         .endAngle(2 * Math.PI)
                         .innerRadius(0)
                         .context(context)


        const pie = d3.pie();
        const arcs = pie(data);

        context.translate(width / 2, height / 2);
        context.globalAlpha = 0.5;

        arcs.forEach(function(d, i) {
          context.beginPath();
          arc(d);
          context.fillStyle = colors[i];
          context.fill();
        });

        context.globalAlpha = 1;
        context.beginPath();
        arcs.forEach(arc);
        context.lineWidth = 1.5;
        context.strokeStyle = "#fff";
        context.stroke();

        context.beginPath();
        arcs.forEach(function(d) {
          corner(d.startAngle, outerRadius - cornerRadius, +1);
          corner(  d.endAngle, outerRadius - cornerRadius, -1);
        });
        context.strokeStyle = "#000";
        context.stroke();

        function corner(angle, radius, sign) {
          context.save();
          context.translate(
            sign * cornerRadius * Math.cos(angle) + Math.sqrt(radius * radius - cornerRadius * cornerRadius) * Math.sin(angle),
            sign * cornerRadius * Math.sin(angle) - Math.sqrt(radius * radius - cornerRadius * cornerRadius) * Math.cos(angle)
          );
          circle.outerRadius(cornerRadius - 1.5)();
          context.restore();
        }
    }

    // if state changes, this component will rerender
    // and this function will get called
    componentDidUpdate() {
        this.draw();
    }

    render() {
        return (
            <>
                <canvas width="960" height="500" ref={(node) => this.node = node} ></canvas>
            </>
        );
    }
}

export default Chart;
