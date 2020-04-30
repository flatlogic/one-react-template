import React from 'react';
import NotificationsDemo from './notifications-demo/Notifications';
import NewNotificationsDemo from './notifications-demo/NewNotifications';
import MessagesDemo from './notifications-demo/Messages';
import ProgressDemo from './notifications-demo/Progress';

import s from './Notifications.module.scss';

class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notificationsTabSelected: 1,
      newNotifications: null,
      isLoad: false,
    };
  }

  changeNotificationsTab(tab) {
    this.setState({
      notificationsTabSelected: tab,
      newNotifications: null,
    });
  }

  loadNotifications() {
    this.setState({
      isLoad: true,
    });

    setTimeout(() => {
      this.setState({
        newNotifications: (<NewNotificationsDemo />),
        isLoad: false,
      });
    }, 1500);
  }

  render() {
    let notificationsTab;

    switch (this.state.notificationsTabSelected) {
      case 1:
        notificationsTab = (<NotificationsDemo />);
        break;
      case 2:
        notificationsTab = (<MessagesDemo />);
        break;
      case 3:
        notificationsTab = (<ProgressDemo />);
        break;
      default:
        notificationsTab = (<NotificationsDemo />);
        break;
    }
    return (
      <section className={`${s.notifications} card navbar-notifications`}>
        {this.state.newNotifications || notificationsTab}
      </section>
    );
  }
}

export default Notifications;
