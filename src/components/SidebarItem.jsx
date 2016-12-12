var React = require('react');

var SidebarItem = React.createClass({
    render: function() {
        var itemStyle = {};

        if (this.props.itemColor) {
            itemStyle.background = this.props.itemColor;
        }

        return  (
            <div class="panel" style={itemStyle}>
              <div class="panel-heading">
                <h3 class="panel-title">{this.props.title}</h3>
                <p>{this.props.value}</p>
              </div>
              <div class="panel-body"></div>
            </div>
        );
    }
});

module.exports = SidebarItem;
