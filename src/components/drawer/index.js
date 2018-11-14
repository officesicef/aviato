
import React from 'react';
import Drawer from 'react-native-drawer';

const drawerStyles = {
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
    main: {paddingLeft: 3},
};

class DrawerView extends React.Component {
    constructor(props) {
        super(props);
        this._drawer = null;
    }

    handleOpen() {
        this._drawer.open();
    }

    handleClose() {
        this._drawer.close();
    }

    render() {
        const { children } = this.props;
        return (
            <Drawer
                ref={ref => this._drawer = ref}
                styles={drawerStyles}
                content={() => <spa>Drawer content</spa>}
            >
                {children}
            </Drawer>
        );
    }
}

export default DrawerView;
