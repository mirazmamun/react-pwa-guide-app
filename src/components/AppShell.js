import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {MuiThemeProvider, getMuiTheme} from 'material-ui/styles';
import {AppBar, Drawer, MenuItem} from 'material-ui';

const ContentStyle = {
  width: '90%',
  margin: 'auto',
  marginTop: '30px'
};

const IconStyle = {
  display: 'block',
  color: 'rgba(0, 0, 0, 0.87)',
  fill: 'rgb(117, 117, 117)',
  height: '24px',
  width: '24px',
  transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
  position: 'absolute',
  top: '0px',
  margin: '12px',
  left: '4px',
  userSelect: 'none'
}

// using simple version of icons to reduce mounting time
const GreetingIcon = () => (
  <svg viewBox="0 0 24 24" style={IconStyle}>
    <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/>
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" style={IconStyle}>
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
  </svg>
);

const NotificationIcon = () => (
  <svg viewBox="0 0 24 24" style={IconStyle}>
    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
  </svg>
);

class SidebarDrawer extends React.Component {
  componentDidMount() {
    let frameCount = 0;
    const open = () => (frameCount++ > 0) ? this.props.onMounted() :
      requestAnimationFrame(open);
    requestAnimationFrame(open);
  }

  render() {
    return (
      <Drawer
        docked={false}
        width={200}
        open={this.props.open}
        onRequestChange={this.props.onRequestChange}
      >
        <MenuItem
          primaryText={'Greeting'}
          leftIcon={<GreetingIcon/>}
          containerElement={<Link to={'/'}/>}
          onTouchTap={this.props.onTouchTap}
        />
        <MenuItem
          primaryText={'Users'}
          leftIcon={<UsersIcon/>}
          containerElement={<Link to={'/users'}/>}
          onTouchTap={this.props.onTouchTap}
        />
        <MenuItem
          primaryText={'Notification'}
          leftIcon={<NotificationIcon/>}
          containerElement={<Link to={'/notification'}/>}
          onTouchTap={this.props.onTouchTap}
        />
      </Drawer>
    );
  }
}

class AppShell extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      drawer : false
    };
  }

  handleDrawerToggle = (e) => {
    if (!this.state.drawer) {
      this.setState({drawer: true});
      e.preventDefault();
    } else {
      this.setState({open: !this.state.open});
    }
  }

  render() {
    // using lazy loading for drawer due to reduce first meaningful time
    // all of events are managed by app shell
    const LazySidebarDrawer = this.state.drawer && (<SidebarDrawer
      open={this.state.open}
      onMounted={() => this.setState({open: true})}
      onTouchTap={() => this.setState({open: false})}
      onRequestChange={open => this.setState({open: open})}
    />)

    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title={this.props.title}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={this.handleDrawerToggle}
          />
          {LazySidebarDrawer}
          <div id="content" style={ContentStyle}>
            {React.cloneElement(this.props.children)}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
};

export default AppShell;
