import React from "react";
import "antd/dist/antd.css";
import { Table, Button, Tag } from "antd";

import { Segment } from "semantic-ui-react";

const data = [
  {
    key: "1",
    time: "2019-01-17T08:00:00Z",
    distance: 20,
    tags: ["vacation"],
    startlocation: "Sydney",
    endlocation: "Melbourne"
  },
  {
    key: "2",
    time: "2019-04-17T09:52:00Z",
    distance: 22,
    tags: [],
    startlocation: "Melbourne",
    endlocation: "Sydney"
  },
  {
    key: "3",
    time: "2019-05-17T12:32:00Z",
    distance: 23,
    tags: ["busuiness"],
    startlocation: "Brisbane",
    endlocation: "Gold Coast"
  },
  {
    key: "4",
    time: "2019-07-17T11:00:00Z",
    distance: 40,
    tags: [],
    startlocation: "Gold Coast",
    endlocation: "Brisbane"
  },

  {
    key: "5",
    time: "2019-07-21T11:33:00Z",
    distance: 33,
    tags: ["busuiness"],
    startlocation: "lennox head",
    endlocation: "Margaret River"
  },
  {
    key: "6",
    time: "2019-08-01T19:41:00Z",
    distance: 21,
    tags: ["commute"],
    startlocation: "Perth",
    endlocation: "Adelaide"
  },
  {
    key: "7",
    time: "2019-08-15T15:21:00Z",
    distance: 19,
    tags: ["commute"],
    startlocation: "Adelaide",
    endlocation: "Brisbane"
  }
];

const columns = [
  {
    title: "Time",
    dataIndex: "time"
  },

  {
    title: "Distance",
    dataIndex: "ditance"
  },

  {
    title: "Tags",
    dataIndex: "tags"
  },

  {
    title: "Start Loocation",
    dataIndex: "startlocation"
  },
  {
    title: "End Location",
    dataIndex: "endlocation"
  }
];

class AntdTableComponent extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null
  };
  handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter
    });
  };
  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };
  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null
    });
  };
  setTimeSort = () => {
    this.setState({
      sortedInfo: {
        order: "descend",
        columnKey: "time"
      }
    });
  };
  setDistanceSort = () => {
    this.setState({
      sortedInfo: {
        order: "descend",
        columnKey: "time"
      }
    });
  };

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: "Time",
        dataIndex: "time",
        key: "time",
        sorter: (a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0),
        sortOrder: sortedInfo.columnKey === "time" && sortedInfo.order
      },

      {
        title: "Distance",
        dataIndex: "distance",
        key: "distance",
        sorter: (a, b) => a.distance - b.distance,
        sortOrder: sortedInfo.columnKey === "distance" && sortedInfo.order
      },

      {
        title: "Tags",
        dataIndex: "tags",
        render: tags => (
          <span>
            {tags.map(tag => {
              let color = "green";
              if (tag === "vacation") {
                color = "red";
              } else if (tag === "busuiness") {
                color = "blue";
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        ),
        key: "tags",
        filters: [
          { text: "busuiness", value: "busuiness" },
          { text: "vacation", value: "vacation" }
        ],
        filteredValue: filteredInfo.tags || null,
        onFilter: (value, record) => record.tags.includes(value)
      },

      {
        title: "Start Location",
        dataIndex: "startlocation",
        key: "startlocation",
        filters: [
          { text: "Sydney", value: "Sydney" },
          { text: "Brisbane", value: "Brisbane" }
        ],
        filteredValue: filteredInfo.startlocation || null,
        onFilter: (value, record) => record.startlocation.includes(value)
      },

      {
        title: "End Location",
        dataIndex: "endlocation",
        key: "endlocation",
        filters: [
          { text: "Sydney", value: "Sydney" },
          { text: "Brisbane", value: "Brisbane" }
        ],
        filteredValue: filteredInfo.endlocation || null,
        onFilter: (value, record) => record.endlocation.includes(value)
      }
    ];
    return (
      <Segment>
        <div>
          <div className="table-operations">
            <Button onClick={this.setTimeSort}>Sort time</Button>
            <Button onClick={this.setDistanceSort}>Sort Distance</Button>
            <Button onClick={this.clearFilters}>Clear filters</Button>
            <Button onClick={this.clearAll}>Clear filters and sorters</Button>
          </div>
          <Table
            columns={columns}
            dataSource={data}
            onChange={this.handleChange}
          />
        </div>
      </Segment>
    );
  }
}

export default AntdTableComponent;
