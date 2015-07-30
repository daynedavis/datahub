/// <reference path="./typings/tsd.d.ts"/>

import {Component, View, bootstrap} from "angular2/angular2";
import * as d3 from 'd3';

@Component({
  selector: 'datahub'
})
@View({
  template: `
  <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="#" style="color:#399F2E">datahub</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="/">overview</a></li>
            <li><a href="/who.html">who</a></li>
            <li><a href="/where.html">where</a></li>
            <li><a href="/when.html">when</a></li>
            <li><a href="/follow.html">follow me</a></li>
            <li><a href="/process.html">process book</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a data-toggle="modal" data-target="#help"><span class="glyphicon glyphicon-question-sign"></span></a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
  `
})
class Datahub {
    name: string;

    constructor() {
        this.name = 'Dayne';

        var svg = d3.select("body")
            .append("svg")
            .attr("width", 500)
            .attr("height", 50);

        var dataset = [ 5, 10, 15, 20, 25 ];

        var circles = svg.selectAll("circle")
            .data(dataset)
            .enter()
            .append("circle");

            circles.attr("cx", function(d, i) {
                return (i * 50) + 25;
            })
           .attr("cy", function(d) {
                return 50 - d;
           })
           .attr("r", function(d) {
                return d;
           });
    }
}

bootstrap(Datahub);
