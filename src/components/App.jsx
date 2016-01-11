import React from 'react';
import MessageList from './MessageList.jsx'
import ChannelList from './ChannelList.jsx'
import MessageBox from './MessageBox.jsx'
import Login from './Login.jsx'
import mui from 'material-ui';
import connectToStores from 'alt-utils/lib/connectToStores';
import ChatStore from '../stores/ChatStore';

import MyRawTheme from './MyRawTheme.js';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';
import Colors from 'material-ui/lib/styles/colors';

import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';

var AppBar = mui.AppBar;
var MyThemeManager = ThemeManager.getMuiTheme(MyRawTheme);

@ThemeDecorator(ThemeManager.getMuiTheme(MyRawTheme))
@connectToStores
class App extends React.Component {

  constructor(){
    super();
  }

  static getStores() {
    return [ChatStore];
  }

  static getPropsFromStores() {
    return ChatStore.getState();
  }

  render () {
    var view = <Login />;

    if(this.props.user){
      view = (
        <div>
          <div style={{
            display: 'flex', flexFlow: 'row wrap', maxWidth: 1200, width: '100%', margin: '30px auto 30px'
          }}>
            <ChannelList/>
            <MessageList/>
          </div>
          <MessageBox />
        </div>
      );
    };

    return(
      <div>
        <AppBar title="Awesome Chat App"/>
        {view}
      </div>

    );

  }; // end of the render method
}

export default App;
