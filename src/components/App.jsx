import React from 'react';
import MessageList from './MessageList.jsx'
import ChannelList from './ChannelList.jsx'
import MessageBox from './MessageBox.jsx'
import mui from 'material-ui';

import MyRawTheme from './MyRawTheme.js';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';
import Colors from 'material-ui/lib/styles/colors';

//ES7 import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';

var AppBar = mui.AppBar;

//ES7 @ThemeDecorator(ThemeManager.getMuiTheme(MyRawTheme))
class App extends React.Component {

  constructor(){
    super();
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(MyRawTheme),
    };
  };

  render () {
    return(
      <div>
        <AppBar title="Awesome Chat App"/>
        <div style={{
        display: 'flex', flexFlow: 'row wrap', maxWidth: 1200, width: '100%', margin: '30px auto 30px'
        }}>
          <ChannelList/>
          <MessageList/>
        </div>
        <MessageBox />
      </div>

    );
  }
}

App.childContextTypes = {
    muiTheme: React.PropTypes.object
};

export default App;
