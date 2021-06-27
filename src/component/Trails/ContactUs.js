import React, { Component } from "react";
//  import ReactDOM from "react-dom";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
//  import filterFactory, {textFilter} from 'react-bootstrap-table2-filter';
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom';

class ContactUs extends Component {
  constructor() {
    super();
    this.state = {
      // For displaying data
      products: [
        {
          company: 'GlobalM',
          State: 'Maharastra',
          villages: 5
        },
        {
          company: 'GlobalM',
          State: 'Andhra Pradesh',
          villages: 14
        },
        {
          company: 'GlobalM',
          State: 'Manipur',
          villages: 5
        },
        {
          company: 'Greenvironment',
          State: ' Gujrat',
          villages: 9
        },
        {
          company: 'Greenvironment',
          State: 'Manipur',
          villages: 2
        },
        {
          company: 'Rydot Infotech',
          State: 'Gujrat',
          villages: 9
        },
        {
          company: 'Rydot Infotech',
          State: 'Manipur',
          villages: 1
        },
        {
          company: 'Rydot Infotech',
          State: 'Rajasthan',
          villages: 4
        },
        {
          company: 'Rydot Infotech',
          State: 'Uttar Pradesh',
          villages: 9
        },
        {
          company: 'Eyenetaqua Solutions',
          State: 'Haryana',
          villages: 10
        },
        {
          company: 'Eyenetaqua Solutions',
          State: 'Manipur',
          villages: 1
        },
        {
          company: 'Eyenetaqua Solutions',
          State: 'Rajasthan',
          villages: 11
    }
      ],
      columns: [
        {
          dataField: "company",
          text: "Company",
          sort: true
          //filter: textFilter({})
        },
        {
          dataField: "State",
          text: "State",
          sort: true
        },
        {
          dataField: "villages",
          text: "Villages",
          sort: true
        },
        {
          dataField: "follow",
          text: "Follow",
          formatter: this.linkFollow,
          sort: true
        }
      ],
    };
  }

  linkFollow = (cell, row, rowIndex, formatExtraData) => {
    //  const navigate="/"+row.company;
    const navigate='/'+row.company;
    return (
      <Link to={navigate} className="brand-link">
        <Button
          onClick={() => {
          console.log(row.company);
          }}
        >
          ClickMe
        </Button>
      </Link>
    );
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h1 className="h2">Products</h1>
        <BootstrapTable
          keyField="id"
          data={this.state.products}
          columns={this.state.columns}
        />
      </div>
    );
  }
}
export default ContactUs;
/*  
data:[
          { id: 1, name: "Item 1", price: 100 },
          { id: 2, name: "Item 2", price: 102 }
        ],
        link:{
            url:"https://codesandbox.io/s/react-bootstrap-table-next-add-button-to-cell-forked-1dhm0?file=/src/index.js",
            url:"https://www.npmjs.com/package/react-bootstrap-table-next"
        }
      }, */