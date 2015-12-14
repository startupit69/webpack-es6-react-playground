import React from 'react';
import MessageList from './MessageList.jsx'
import ChannelList from './ChannelList.jsx'
import MessageBox from './MessageBox.jsx'
import mui from 'material-ui';

import MyRawTheme from './MyRawTheme.js';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';
import Colors from 'material-ui/lib/styles/colors';

import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';

//let ThemeManager = new mui.Styles.ThemeManager();
////var ThemeManager = require('material-ui/lib/styles/theme-manager');

////var Colors = mui.Styles.Colors;
var AppBar = mui.AppBar;
//var muiTheme = ThemeManager.getMuiTheme(LightRawTheme);

//@ThemeDecorator(ThemeManager.getMuiTheme(MyRawTheme))
class App extends React.Component {
  /*  constructor(){
    super();

    this.state = {

    }

    //muiTheme.setThemeManager.getMuiTheme(LightRawTheme)

  /*  ThemeManager.setPalette({
      primary1Color: Colors.blue500,
      primary2Color: Colors.blue700,
      primary3Color: Colors.blue100,
      accent1Collor: Colors.pink400
    });*/
  // constructors end  }

  /*  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  getChildContext(){
    return {
      muiTheme
    };
  }
*/

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

export default App;
